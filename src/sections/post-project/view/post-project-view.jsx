import { useEffect, useState } from 'react';

import { Container, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import TextArea from 'antd/es/input/TextArea';

import { toast } from 'react-toastify';
import { postProj, resetState } from 'src/features/Property/propertySlice';

import './imagestyle.css';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  property_details: yup.string(),
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  number_of_room: yup.string(),
  location: yup.string().required('Location is required'),
  description: yup.string(),
  features: yup.string(),
  category: yup.string(),
  // images: yup.array(),
});

export default function PostProjectView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const projState = useSelector((state) => state.property);
  console.log(projState?.isSuccess);
  const token = authState?.auth.user?.token;
  const theme = useTheme();

  // const handleClick = () => {
  //   router.push('/dashboard');
  // };
  // Formik state, check doc

  // TKE
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      property_details: '',
      title: '',
      price: 0,
      number_of_room: '',
      location: '',
      description: '',
      features: '',
      category: '',
      // images: [],
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        // Append form fields to formData
        formData.append('title', values.title);
        formData.append('price', values.price);
        formData.append('number_of_room', values.number_of_room);
        formData.append('property_details', values.property_details);
        formData.append('description', values.description);
        formData.append('features', values.features);
        formData.append('category', values.category);
        formData.append('location', values.location);
        for (let i = 0; i < images.length; i += 1) {
          formData.append('images', images[i]);
        }

        const data = { formData, token };
        // Now you can dispatch your action with the formData
        await dispatch(postProj(data));

        // Reset form or handle success as needed
        formik.resetForm();
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

  const handleImage = (event) => {
    setImages([...images, ...event.target.files]);
  };

  const removeFile = (key) => {
    const newFiles = images.filter((file, index) => key !== index);
    setImages(newFiles);
  };

  const renderForm = (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <TextField
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            label="Project Location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <TextField
            label="Number Of Room"
            name="number_of_room"
            value={formik.values.number_of_room}
            onChange={formik.handleChange}
            error={formik.touched.number_of_room && Boolean(formik.errors.number_of_room)}
            helperText={formik.touched.number_of_room && formik.errors.number_of_room}
          />
          <FormControl fullWidth>
            <InputLabel id="category-label">Project Status Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              label="Property Category"
            >
              <MenuItem value="completed">completed</MenuItem>
              <MenuItem value="ongoing">ongoing</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Price"
            name="price"
            // type="number"
            // value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />

          <TextArea
            rows={4}
            placeholder="Details"
            maxLength={300}
            name="property_details"
            value={formik.values.property_details}
            onChange={formik.handleChange}
          />

          <TextArea
            rows={4}
            placeholder="Features"
            maxLength={300}
            name="features"
            value={formik.values.features}
            onChange={formik.handleChange}
          />

          <TextArea
            rows={4}
            placeholder="Property Description"
            maxLength={300}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />

          <Stack>
            <div className="upload-wrap">
              <label htmlFor="inputTag" className="upload-label">
                <img src="/assets/icons/shape-avatar.svg" alt="" />
                <span>Upload Images</span>
                <input
                  multiple
                  name="images"
                  id="inputTag"
                  type="file"
                  className="upload-input"
                  onChange={handleImage}
                />
              </label>
              <span>
                Max file size 2MB. <br /> CTRL+ click to select multiple images
              </span>
            </div>
          </Stack>

          <div style={{ display: 'flex', flexDirection: 'wrap', gap: '2rem' }}>
            {images?.map((file, index) => (
              <div className="image-display" style={{ height: 'auto', width: '40%' }} key={index}>
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
                <img src={URL.createObjectURL(file)} alt={file.name} />
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
            // onClick={formik.handleSubmit}
            // onSubmit={formik.handleSubmit}
          >
            {projState?.isLoading ? 'posting' : 'Post'}
          </LoadingButton>
        </Stack>
      </form>
    </>
  );

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (projState?.isSuccess && projState?.postedProject) {
      toast.success('Project posted Successfullly!');
    }
  }, [projState?.isSuccess, projState?.postedProject]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Post Project
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
                maxWidth: 620,
              }}
            >
              {renderForm}
            </Card>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}
