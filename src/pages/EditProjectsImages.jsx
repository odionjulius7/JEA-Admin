import { useEffect, useState } from 'react';

import { Container, Grid } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import CircularProgress from '@mui/material/CircularProgress';

import { bgGradient } from 'src/theme/css';

import { MdCloudUpload } from 'react-icons/md';

// import * as yup from 'yup';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { resetState, updateProjectImages } from 'src/features/Property/propertySlice';

// import OutlinedInput from '@mui/material/OutlinedInput';

import './imagestyle.css';
import { useRouter } from 'src/routes/hooks';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function EditProjectImages() {
  const { id } = useParams();
  console.log(id);

  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const projState = useSelector((state) => state.property);
  const token = authState?.auth.user?.token;
  const theme = useTheme();
  const [images, setImages] = useState([]);

  const [image, setImage] = useState('');

  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();

        let newImages;
        if (image) {
          newImages = [...images, image];
        } else {
          newImages = [...images];
        } // Concatenate the selected files with the existing images array

        for (let i = 0; i < newImages.length; i += 1) {
          formData.append('images', newImages[i]);
        }

        const data = { formData, token, id };
        await dispatch(updateProjectImages(data));

        setImages([]); // Clear the image state after successful submission
        dispatch(resetState());
      } catch (error) {
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  //

  const handleLogo = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleImage = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = [];
    let invalidFile = false;

    files.forEach((file) => {
      if (file.size > 500000) {
        // Check if file size exceeds 500KB
        // toast.error(`File "${file.name}" exceeds 500KB. Please select a smaller file.`);
        alert(`File "${file.name}" exceeds 500KB. Please select a smaller file.`);
        invalidFile = true;
      } else {
        validFiles.push(file);
      }
    });

    if (!invalidFile) {
      setImages((prevImages) => [...prevImages, ...validFiles]);
    }
  };

  //
  const removeFile = (key) => {
    const newFiles = images.filter((file, index) => key !== index);
    setImages(newFiles);
  };

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <Stack>
          <div
            className="upload-wrap"
            style={{
              margin: '1rem',
            }}
          >
            <label htmlFor="inputLogo" className="upload-label">
              <MdCloudUpload
                style={{
                  fontSize: '40px',
                }}
              />
              <span>Upload Logo</span>
              <input
                name="image"
                id="inputLogo"
                type="file"
                className="upload-input"
                onChange={handleLogo}
              />
            </label>
            <span>Max file size 500kb.</span>
          </div>
        </Stack>
        {image && (
          <div style={{ width: '200px', height: '200px', margin: '1rem' }}>
            <img src={URL.createObjectURL(image)} alt="Selected" />
          </div>
        )}

        <hr />

        <Stack>
          <div className="upload-wrap">
            <label htmlFor="file-input">
              <Typography variant="body2" sx={{ mb: 1 }}>
                Choose Images (500KB max each):
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Image width (max 1200px each):
              </Typography>
              <Stack direction="row" spacing={1}>
                <LoadingButton
                  variant="contained"
                  component="span"
                  color="primary"
                  style={{
                    height: '2rem',
                  }}
                >
                  Edit Project images
                </LoadingButton>
              </Stack>
              <input
                accept="image/*"
                id="file-input"
                type="file"
                name="images"
                multiple
                onChange={handleImage}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </Stack>

        <div
          style={{
            display: 'flex',
            gap: '15px',
            maxWidth: '90%',
            flexWrap: 'wrap',
            // minHeight: '200px',
          }}
        >
          {images?.map((file, index) => (
            <div className="image-display" style={{ height: 'auto', width: '30%' }} key={index}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{
                  width: '90%',
                }}
              />{' '}
              <span
                role="button"
                tabIndex={0}
                style={{
                  border: '1px solid red',
                  color: 'orangered',
                  cursor: 'pointer',
                }}
                className="px-2"
                onClick={() => removeFile(index)}
                onKeyDown={(e) => e.key === 'Enter' && removeFile(index)}
              >
                x
              </span>
            </div>
          ))}
        </div>

        <LoadingButton
          sx={{
            marginTop: '25px',
          }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="inherit"
        >
          {projState?.isLoading ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            'Update'
          )}
        </LoadingButton>
      </Stack>
    </form>
  );

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (projState?.isSuccessImg && projState?.updatedProjectImg) {
      toast.success('Project posted Successfullly!');
      router.push(`/project/${id}`);
    }
    if (projState?.isError) {
      toast.error('Failed!, if problem persist try log in again');
    }
  }, [projState?.isSuccessImg, projState?.updatedProjectImg, projState?.isError, router, id]);

  return (
    <>
      <Helmet>
        <title> Reviel | Update Project Images </title>
      </Helmet>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Update Project Images
        </Typography>

        <Grid container spacing={3}>
          <Box
            sx={{
              ...bgGradient({
                color: alpha(theme.palette.background.default, 0.9),
                imgUrl: '/assets/background/overlay_4.jpg',
              }),
              height: 1,
              width: '100%',
              padding: '50px',
            }}
          >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
              <Card
                sx={{
                  p: 5,
                  width: 1,
                  maxWidth: 820,
                }}
              >
                {renderForm}
              </Card>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
