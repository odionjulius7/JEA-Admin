import { useEffect, useState } from 'react';

import { Container, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

// import * as yup from 'yup';
import { useFormik } from 'formik';

import { bgGradient } from 'src/theme/css';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { resetState, updatePropertyImg } from 'src/features/Property/propertySlice';

import './imagestyle.css';
import { useRouter } from 'src/routes/hooks';
import { useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function EditPropertyImages() {
  const { id } = useParams();
  console.log(id);

  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const propertyState = useSelector((state) => state.property);
  // console.log(propertyState?.isSuccess);
  const token = authState?.auth.user?.token;
  const theme = useTheme();

  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();

        for (let i = 0; i < images.length; i += 1) {
          formData.append('images', images[i]);
        }

        // const ids = { id, data: values, token };
        const data = { formData, token, id };
        await dispatch(updatePropertyImg(data));

        setImages([]);
        dispatch(resetState());
        // router.push(`/property/${id}`);
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

  const removeFile = (key) => {
    const newFiles = images.filter((file, index) => key !== index);
    setImages(newFiles);
  };

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
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
                  Edit Product images
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
          {propertyState?.isLoading ? (
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
    if (propertyState?.isSuccessImg && propertyState?.propertyImgs) {
      toast.success('property images updated Successfullly!');
      router.push(`/property/${id}`);
    }
    if (propertyState?.isError) {
      toast.error('Failed!, If problem persist try login again');
    }
  }, [
    propertyState?.isSuccessImg,
    propertyState?.propertyImgs,
    propertyState?.isError,
    router,
    id,
  ]);

  return (
    <>
      <Helmet>
        <title> Reviel | Update Product Images </title>
      </Helmet>
      {/*  */}
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Update Property Images
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
