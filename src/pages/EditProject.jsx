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

import { toast } from 'react-toastify';

import TextArea from 'antd/es/input/TextArea';

import {
  getAproject,
  allFeatsNLogos,
  // postProj,
  resetState,
  updateProj,
} from 'src/features/Property/propertySlice';

import { useParams } from 'react-router-dom';

import OutlinedInput from '@mui/material/OutlinedInput';

import { useRouter } from 'src/routes/hooks';

import './imagestyle.css';

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

// const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  // property_details: yup.string(),
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  number_of_room: yup.string(),
  location: yup.string().required('Location is required'),
  description: yup.string(),
  latitude: yup.number(),
  longitude: yup.number(),
  // features: yup.string(),
  category: yup.string().required('Category is required'),
});

export default function EditProjectPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const projectState = useSelector((state) => state.property);
  const token = authState?.auth.user?.token;
  const theme = useTheme();
  const router = useRouter();
  const { id } = useParams();

  const projectDetail = projectState?.project?.project;
  const allFeatArr = projectState?.allFeatNLogo?.allFeat || [];
  // const theme = useTheme();
  const [personName, setPersonName] = useState(projectDetail?.featuresAndLogos || []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  // console.log(personName);
  //

  const formik = useFormik({
    initialValues: {
      title: projectDetail?.title || '',
      price: projectDetail?.price || 0,
      number_of_room: projectDetail?.number_of_room || '',
      location: projectDetail?.location || '',
      description: projectDetail?.description || '',
      category: projectDetail?.category || '',
      agent_whatsapp: projectDetail?.agent_whatsapp || '',
      agent_call: projectDetail?.agent_call || '',
      //
      address: projectDetail?.address || '',
      additional_fees: projectDetail?.additional_fees || '',
      property_id: projectDetail?.property_id || '',
      property_type: projectDetail?.property_type || '',
      year_built: projectDetail?.year_built || '',
      details_category: projectDetail?.details_category || '',
      status: projectDetail?.status || '',
      Number_of_Stories: projectDetail?.Number_of_Stories || '',
      garage_capacity: projectDetail?.garage_capacity || '',
      recent_renovations: projectDetail?.recent_renovations || '',
      youtube_url: projectDetail?.youtube_url || '',
      //
      neighborhood_info1: projectDetail?.neighborhood_info1 || '',
      neighborhood_info2: projectDetail?.neighborhood_info2 || '',
      neighborhood_info3: projectDetail?.neighborhood_info3 || '',
      neighborhood_info4: projectDetail?.neighborhood_info4 || '',
      neighborhood_info5: projectDetail?.neighborhood_info5 || '',
      neighborhood_info6: projectDetail?.neighborhood_info6 || '',
      //
      feature_1: projectDetail?.feature_1 || '',
      feature_2: projectDetail?.feature_2 || '',
      feature_3: projectDetail?.feature_3 || '',
      feature_4: projectDetail?.feature_4 || '',
      feature_5: projectDetail?.feature_5 || '',
      feature_6: projectDetail?.feature_6 || '',
      feature_7: projectDetail?.feature_7 || '',
      feature_8: projectDetail?.feature_8 || '',
      //
      longitude: projectDetail?.longitude || 0,
      latitude: projectDetail?.latitude || 0,
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // const formData = new FormData();
        // Append form fields to formData
        const data = { ...values, featuresAndLogos: personName };

        const ids = { data, token, id };
        // Now you can dispatch your action with the formData
        await dispatch(updateProj(ids));

        // Reset form or handle success as needed
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
          label="Location Longitude"
          name="longitude"
          value={formik.values.longitude}
          onChange={formik.handleChange}
          error={formik.touched.longitude && Boolean(formik.errors.longitude)}
          helperText={formik.touched.longitude && formik.errors.longitude}
        />
        <TextField
          label="Location Latitude"
          name="latitude"
          value={formik.values.latitude}
          onChange={formik.handleChange}
          error={formik.touched.latitude && Boolean(formik.errors.latitude)}
          helperText={formik.touched.latitude && formik.errors.latitude}
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
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          >
            <MenuItem value="completed">completed</MenuItem>
            <MenuItem value="ongoing">ongoing</MenuItem>
          </Select>
        </FormControl>
        {/* multiselect */}
        <Stack
          spacing={4}
          style={{
            margin: '1.5rem 0 0.5rem 0',
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Add Features & Icons</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Features & Icons" />}
              MenuProps={MenuProps}
              // name='featuresAndLogos'
            >
              {allFeatArr.map((name) => (
                <MenuItem
                  key={name?.title}
                  value={name?._id}
                  style={getStyles(name?.title, personName, theme)}
                >
                  {name?.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        {/* multiselect */}
        <TextField
          label="Price"
          name="price"
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />

        <div
          style={{
            margin: '1.5rem',
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
        >
          {projectState?.isLoadingUpdate1 ? (
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
    dispatch(allFeatsNLogos());
    dispatch(getAproject(ids));
  }, [dispatch, token, id]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (projectState?.isSuccessUpdate1) {
      toast.success('Project Update Successfullly!');
      router.push(`/project/${id}`);
    }
    if (projectState?.isError) {
      toast.error('Failed! If problem persist try login again');
      router.push(`/project/${id}`);
    }
  }, [projectState?.isSuccessUpdate1, projectState?.isError, router, id]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Edit Project
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
