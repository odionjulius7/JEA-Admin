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

// import * as yup from 'yup';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';

import {
  resetState,
  getAproperty,
  // postProperty,
  updateProperty,
} from 'src/features/Property/propertySlice';

import { useParams } from 'react-router-dom';
import { useRouter } from 'src/routes/hooks';

import './imagestyle.css';
// import { update } from 'lodash';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc

export default function EditPropertyPage() {
  // console.log(property_details);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const propertyState = useSelector((state) => state.property);
  const router = useRouter();
  // const loanState = useSelector((state) => state.loan);
  const { id } = useParams();
  const propertyDetail = propertyState?.property?.property;

  // console.log(propertyState);

  const token = authState?.auth.user?.token;

  const theme = useTheme();

  // console.log(propertyDetail?.tag);

  const formik = useFormik({
    initialValues: {
      title: propertyDetail?.title || '',
      price: propertyDetail?.price || 0,
      number_of_room: propertyDetail?.number_of_room || '',
      location: propertyDetail?.location || '',
      description: propertyDetail?.description || '',
      category: propertyDetail?.category || '',
      tag: propertyDetail?.tag || '',
      agent_whatsapp: propertyDetail?.agent_whatsapp || '',
      agent_call: propertyDetail?.agent_call || '',
      //
      address: propertyDetail?.address || '',
      additional_fees: propertyDetail?.additional_fees || '',
      property_id: propertyDetail?.property_id || '',
      property_type: propertyDetail?.property_type || '',
      year_built: propertyDetail?.year_built || '',
      details_category: propertyDetail?.details_category || '',
      status: propertyDetail?.status || '',
      Number_of_Stories: propertyDetail?.Number_of_Stories || '',
      garage_capacity: propertyDetail?.garage_capacity || '',
      recent_renovations: propertyDetail?.recent_renovations || '',
      youtube_url: propertyDetail?.youtube_url || '',
      //
      neighborhood_info1: propertyDetail?.neighborhood_info1 || '',
      neighborhood_info2: propertyDetail?.neighborhood_info2 || '',
      neighborhood_info3: propertyDetail?.neighborhood_info3 || '',
      neighborhood_info4: propertyDetail?.neighborhood_info4 || '',
      neighborhood_info5: propertyDetail?.neighborhood_info5 || '',
      neighborhood_info6: propertyDetail?.neighborhood_info6 || '',
      //
      feature_1: propertyDetail?.feature_1 || '',
      feature_2: propertyDetail?.feature_2 || '',
      feature_3: propertyDetail?.feature_3 || '',
      feature_4: propertyDetail?.feature_4 || '',
      feature_5: propertyDetail?.feature_5 || '',
      feature_6: propertyDetail?.feature_6 || '',
      feature_7: propertyDetail?.feature_7 || '',
      feature_8: propertyDetail?.feature_8 || '',
    },
    // validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const ids = { id, data: values, token };
        await dispatch(updateProperty(ids));
        formik.resetForm();
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

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <TextField
          label="Property Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        <TextField
          label="Property Location"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
        <TextField
          label="Agent Call Num."
          name="agent_call"
          value={formik.values.agent_call}
          onChange={formik.handleChange}
        />
        <TextField
          label="Agent Whatsapp Num."
          name="agent_whatsapp"
          value={formik.values.agent_whatsapp}
          onChange={formik.handleChange}
        />
        <TextField
          label="Number Of Room"
          name="number_of_room"
          value={formik.values.number_of_room}
          onChange={formik.handleChange}
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
          >
            <MenuItem value="buy">Buy</MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
            <MenuItem value="land">Land</MenuItem>
            <MenuItem value="shortlet">Shortlet</MenuItem>
          </Select>
        </FormControl>

        {/* tag */}
        <FormControl fullWidth>
          <InputLabel id="category-label">Tag Property</InputLabel>
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
        {/* tag */}

        <TextField
          label="Property Price"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          // value={formik.price}
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
            <FormControl fullWidth>
              <InputLabel id="category-label">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                label="Status"
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
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
                marginBottom: '1rem',
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
                marginBottom: '1rem',
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
          maxLength={800}
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

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
            'Edit'
          )}
        </LoadingButton>
      </Stack>
    </form>
  );

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getAproperty(ids));
  }, [dispatch, token, id]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (propertyState?.isSuccessUpdate) {
      toast.success('Property Updated Successfullly!');
      router.push(`/property/${id}`);
    }
    if (propertyState?.isError) {
      toast.error('Failed!, If problem persist try login again');
    }
  }, [propertyState?.isSuccessUpdate, propertyState?.isError, router, id]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Property Edit Page
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
  );
}
