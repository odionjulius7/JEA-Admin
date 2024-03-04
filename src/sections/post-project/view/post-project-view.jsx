// import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { Container, Grid } from '@mui/material';

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
import { login } from 'src/features/auth/authSlice';

import TextArea from 'antd/es/input/TextArea';

import ImageUploadProperty from '../image-upload';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  email: yup.string().email('Email should be valid').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

export default function PostProjectView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);

  const { user } = authState.auth;
  const token = user?.data?.token;

  const theme = useTheme();

  // const handleClick = () => {
  //   router.push('/dashboard');
  // };

  // Formik state, check doc
  const formik = useFormik({
    // initial form state
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema, // to validate the yup setup schema
    onSubmit: (values) => {
      // pass the value of the data got from formik to the login action
      dispatch(login(values));
    },
  });

  const renderForm = (
    <>
      <Stack spacing={4}>
        <TextField label="Project Title" />
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.email && formik.errors.email}
        </div>

        <TextArea
          style={{
            color: '#000000',
          }}
          rows={4}
          placeholder="Property Details"
          maxLength={300}
        />

        <TextArea
          style={{
            color: '#000000',
          }}
          rows={4}
          placeholder="Property Amenities & Features"
          maxLength={300}
        />

        <TextArea
          style={{
            color: '#000000',
          }}
          rows={4}
          placeholder="Property Neighborhood Information"
          maxLength={300}
        />

        <ImageUploadProperty />
      </Stack>

      <LoadingButton
        sx={{
          marginTop: '25px',
        }}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={formik.handleSubmit}
        // onSubmit={formik.handleSubmit}
      >
        Post
      </LoadingButton>
    </>
  );

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
