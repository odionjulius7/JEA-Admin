import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import * as yup from 'yup';
import { useFormik } from 'formik';

import TextArea from 'antd/es/input/TextArea';

import { useDispatch, useSelector } from 'react-redux';

import { bgGradient } from 'src/theme/css';

import { toast } from 'react-toastify';
import { fetchFeatProject, postProj, resetState } from 'src/features/Property/propertySlice';

// import './imagestyle.css';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  // property_details: yup.string(),
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  number_of_room: yup.string(),
  location: yup.string().required('Location is required'),
  description: yup.string(),
  // features: yup.string(),
  category: yup.string(),
});

export default function PostFeaturedProsjectView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const projState = useSelector((state) => state.property);
  const token = authState?.auth.user?.token;

  const [image, setImage] = useState('');
  const theme = useTheme();
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: '',
      tag: 'featured',
      price: 0,
      number_of_room: '',
      location: '',
      description: '',
      category: '',
      agent_whatsapp: '',
      agent_call: '',
      //
      address: '',
      additional_fees: '',
      property_id: '',
      property_type: '',
      year_built: '',
      details_category: '',
      status: '',
      Number_of_Stories: '',
      garage_capacity: '',
      recent_renovations: '',
      youtube_url: '',
      //
      neighborhood_info1: '',
      neighborhood_info2: '',
      neighborhood_info3: '',
      neighborhood_info4: '',
      neighborhood_info5: '',
      neighborhood_info6: '',
      //
      feature_1: '',
      feature_2: '',
      feature_3: '',
      feature_4: '',
      feature_5: '',
      feature_6: '',
      feature_7: '',
      feature_8: '',
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        // Append form fields to formData
        formData.append('title', values.title);
        formData.append('tag', 'featured');
        formData.append('price', values.price);
        formData.append('number_of_room', values.number_of_room);
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('location', values.location);

        formData.append('agent_call', values.agent_call);
        formData.append('agent_whatsapp', values.agent_whatsapp);
        //
        // formData.append('price', values.price);
        formData.append('address', values.address);
        formData.append('additional_fees', values.additional_fees);
        formData.append('property_id', values.property_id);
        formData.append('property_type', values.property_type);
        formData.append('year_built', values.year_built);
        formData.append('details_category', values.details_category); // Assuming details_category is the correct field
        formData.append('status', values.status);
        formData.append('Number_of_Stories', values.Number_of_Stories);
        formData.append('garage_capacity', values.garage_capacity);
        formData.append('recent_renovations', values.recent_renovations);
        formData.append('youtube_url', values.youtube_url);

        // Append neighborhood_info fields to formData
        formData.append('neighborhood_info1', values.neighborhood_info1);
        formData.append('neighborhood_info2', values.neighborhood_info2);
        formData.append('neighborhood_info3', values.neighborhood_info3);
        formData.append('neighborhood_info4', values.neighborhood_info4);
        formData.append('neighborhood_info5', values.neighborhood_info5);
        formData.append('neighborhood_info6', values.neighborhood_info6);

        // Append features fields to formData
        formData.append('feature_1', values.feature_1);
        formData.append('feature_2', values.feature_2);
        formData.append('feature_3', values.feature_3);
        formData.append('feature_4', values.feature_4);
        formData.append('feature_5', values.feature_5);
        formData.append('feature_6', values.feature_6);
        formData.append('feature_7', values.feature_7);
        formData.append('feature_8', values.feature_8);

        formData.append('image', image);

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

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    // console.log('Selected File:', selectedFile);
    setImage(selectedFile);
  };

  const handleImage = (event) => {
    setImages([...images, ...event.target.files]);
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
            <label htmlFor="inputTag" className="upload-label">
              <img src="/assets/icons/shape-avatar.svg" alt="" />
              <span>Upload Images</span>
              <input
                name="image"
                id="inputTag"
                type="file"
                className="upload-input"
                onChange={handleImageChange}
              />
            </label>
          </div>
          {/* <span>Max file size 2MB.</span> */}

          {/* Display the selected image (optional) */}
          <div style={{ width: '150px', height: 'auto' }}>
            {image && <img src={URL.createObjectURL(image)} alt="Selected" />}
          </div>
        </Stack>

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
        <TextField
          label="Agent Call Num."
          name="agent_call"
          value={formik.values.agent_call}
          onChange={formik.handleChange}
          error={formik.touched.agent_call && Boolean(formik.errors.agent_call)}
          helperText={formik.touched.agent_call && formik.errors.agent_call}
        />
        <TextField
          label="Agent Whatsapp Num."
          name="agent_whatsapp"
          value={formik.values.agent_whatsapp}
          onChange={formik.handleChange}
          error={formik.touched.agent_whatsapp && Boolean(formik.errors.agent_whatsapp)}
          helperText={formik.touched.agent_whatsapp && formik.errors.agent_whatsapp}
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
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />

        <div
          style={{
            margin: '2rem',
          }}
        >
          <h4
            style={{
              marginBottom: '1rem',
            }}
          >
            Property Details:
          </h4>
          <Stack
            spacing={2}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <TextField
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <TextField
              label="Additional Fees"
              name="additional_fees"
              value={formik.values.additional_fees}
              onChange={formik.handleChange}
            />
          </Stack>

          <Stack
            spacing={2}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <TextField
              label="Property Id"
              name="property_id"
              value={formik.values.property_id}
              onChange={formik.handleChange}
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <TextField
              label="Property Type"
              name="property_type"
              value={formik.values.property_type}
              onChange={formik.handleChange}
            />
            <TextField
              label="Year Built"
              name="year_built"
              value={formik.values.year_built}
              onChange={formik.handleChange}
            />
            <TextField
              label="Detail Category"
              name="details_category"
              value={formik.values.details_category}
              onChange={formik.handleChange}
            />
          </Stack>

          <Stack
            spacing={2}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <TextField
              label="Status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
            />
            <TextField
              label="Number of Stories"
              name="Number_of_Stories"
              value={formik.values.Number_of_Stories}
              onChange={formik.handleChange}
            />
            <TextField
              label="Garage Capacity"
              name="garage_capacity"
              value={formik.values.garage_capacity}
              onChange={formik.handleChange}
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            <TextField
              label="Recent Renovations"
              name="recent_renovations"
              value={formik.values.recent_renovations}
              onChange={formik.handleChange}
            />
            <TextField
              label="Youtube URL"
              name="youtube_url"
              value={formik.values.youtube_url}
              onChange={formik.handleChange}
            />
          </Stack>
        </div>

        <div
          style={{
            margin: '2rem',
          }}
        >
          <h4
            style={{
              marginBottom: '1rem',
            }}
          >
            Amenities & Features:
          </h4>
          <div>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                label="Feature 1"
                name="feature_1"
                value={formik.values.feature_1}
                onChange={formik.handleChange}
              />
              <TextField
                label="Feature 2"
                name="feature_2"
                value={formik.values.feature_2}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                label="Feature 3"
                name="feature_3"
                value={formik.values.feature_3}
                onChange={formik.handleChange}
              />
              <TextField
                label="Feature 4"
                name="feature_4"
                value={formik.values.feature_4}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <TextField
                label="Feature 5"
                name="feature_5"
                value={formik.values.feature_5}
                onChange={formik.handleChange}
              />
              <TextField
                label="Feature 6"
                name="feature_6"
                value={formik.values.feature_6}
                onChange={formik.handleChange}
              />
            </Stack>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <TextField
                label="Feature 7"
                name="feature_7"
                value={formik.values.feature_7}
                onChange={formik.handleChange}
              />
              <TextField
                label="Feature 8"
                name="feature_8"
                value={formik.values.feature_8}
                onChange={formik.handleChange}
              />
            </Stack>
          </div>
        </div>

        <div
          style={{
            margin: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            // marginTop: '1rem',
          }}
        >
          <h4
            style={{
              marginBottom: '1rem',
            }}
          >
            Neighborhood Information:
          </h4>

          <TextField
            label="Neighborhood Info. "
            name="neighborhood_info1"
            value={formik.values.neighborhood_info1}
            onChange={formik.handleChange}
          />
          <TextField
            label="Other Neighborhood Info."
            name="neighborhood_info2"
            value={formik.values.neighborhood_info2}
            onChange={formik.handleChange}
          />
          <TextField
            label="Other Neighborhood Info."
            name="neighborhood_info3"
            value={formik.values.neighborhood_info3}
            onChange={formik.handleChange}
          />

          <TextField
            label="Other Neighborhood Info."
            name="neighborhood_info4"
            value={formik.values.neighborhood_info4}
            onChange={formik.handleChange}
          />
          <TextField
            label="Other Neighborhood Info."
            name="neighborhood_info5"
            value={formik.values.neighborhood_info5}
            onChange={formik.handleChange}
          />
          <TextField
            label="Other Neighborhood Info."
            name="neighborhood_info6"
            value={formik.values.neighborhood_info6}
            onChange={formik.handleChange}
          />
        </div>

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
            'Post'
          )}
        </LoadingButton>
      </Stack>
    </form>
  );

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (projState?.isSuccess && projState?.postedProject) {
      toast.success('Project posted Successfullly!');
    }
    if (projState?.isError) {
      toast.error('Failed! If problem persist try log in again');
    }
  }, [projState?.isSuccess, projState?.postedProject, projState?.isError]);

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
