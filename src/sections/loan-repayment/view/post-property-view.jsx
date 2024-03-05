import { useEffect, useState } from 'react';

import { Container, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import TextArea from 'antd/es/input/TextArea';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { toast } from 'react-toastify';

import { postProperty, resetState } from 'src/features/Property/propertySlice';

import './imagestyle.css';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  // property_details: yup.string(),
  tag: yup.string(),
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  number_of_room: yup.string(),
  location: yup.string().required('Location is required'),
  description: yup.string(),
  features: yup.string(),
  category: yup.string().required('Category is required'),
  // images: yup.array(),
});

export default function PostPropertyView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState?.isSuccess);
  const token = authState?.auth.user?.token;
  const theme = useTheme();

  const [images, setImages] = useState([]);
  const [details, setDetails] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [features, setFeatures] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      number_of_room: '',
      location: '',
      description: '',
      category: '',
      tag: '',
      // neighborhood_info: '',
      // features: '',
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
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('location', values.location);
        formData.append('tag', values.tag);
        //
        formData.append('property_details', details);
        formData.append('neighborhood_info', neighborhood);
        formData.append('features', features);
        for (let i = 0; i < images.length; i += 1) {
          formData.append('images', images[i]);
        }

        const data = { formData, token };
        // Now you can dispatch your action with the formData
        await dispatch(postProperty(data));

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

  const imgSizes = images?.find((item) => item?.size > 2000000);

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
            label="Property Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            label="Property Location"
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
            <InputLabel id="category-label">Property Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              label="Property Category"
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            >
              <MenuItem value="buy">Buy</MenuItem>
              <MenuItem value="rent">Rent</MenuItem>
              <MenuItem value="land">Land</MenuItem>
              <MenuItem value="short let">Short Let</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="category-label">Tag Property ..(optional)</InputLabel>
            <Select
              labelId="tag-label"
              id="tag"
              name="tag"
              value={formik.values.tag}
              onChange={formik.handleChange}
              label="Tag Property"
              error={formik.touched.tag && Boolean(formik.errors.tag)}
              helperText={formik.touched.tag && formik.errors.tag}
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="property of the week">Property Of The Week</MenuItem>
              <MenuItem value="available luxury">Available Luxury</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Property Price"
            name="price"
            // type="number"
            // value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />

          <div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Details!</p>"
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDetails(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Features And Amenities!</p>"
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setFeatures(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Neighborhood Info!</p>"
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setNeighborhood(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          {/* <TextArea
            rows={4}
            placeholder="Neighborhood Info."
            maxLength={300}
            name="neighborhood_info"
            value={formik.values.neighborhood_info}
            onChange={formik.handleChange}
          />

          <TextArea
            rows={4}
            placeholder="Property Amenities & Features"
            maxLength={300}
            name="features"
            value={formik.values.features}
            onChange={formik.handleChange}
          /> */}

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
            // onClick={formik.handleSubmit}
            // onSubmit={formik.handleSubmit}
          >
            {propertyState?.isLoading ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : (
              'Post'
            )}
          </LoadingButton>
        </Stack>
      </form>
    </>
  );

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (propertyState?.isSuccess && propertyState?.postedProperty) {
      toast.success('property posted Successfullly!');
    }
  }, [propertyState?.isSuccess, propertyState?.postedProperty]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Post Property
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
