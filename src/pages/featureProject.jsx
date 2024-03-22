import { useState, useEffect } from 'react';

import { Container, Grid } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { bgGradient } from 'src/theme/css';

// import * as yup from 'yup';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { getAproject, resetState, updateFeaturedProj } from 'src/features/Property/propertySlice';

import './imagestyle.css';
import { useParams } from 'react-router-dom';
import { useRouter } from 'src/routes/hooks';

export default function FeatureProjectPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const propertyState = useSelector((state) => state.property);
  // console.log(propertyState);
  const router = useRouter();
  const { id } = useParams();
  const [image, setImage] = useState('');
  // console.log(id);
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    // validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // const formData = new FormData();
        // if (image) {
        //   formData.append('logo', image);
        // }
        const ids = { id, token };
        await dispatch(updateFeaturedProj(ids));
        formik.resetForm();
        setImage('');
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
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const token = authState?.auth.user?.token;

  const theme = useTheme();

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      {/* <Stack>
        <div
          className="upload-wrap"
          style={{
            margin: '2rem',
          }}
        >
          <label htmlFor="inputTag" className="upload-label">
            <img src="/assets/icons/shape-avatar.svg" alt="" />
            <span>Upload Logo</span>
            <input
              name="image"
              id="inputTag"
              type="file"
              className="upload-input"
              onChange={handleImage}
            />
          </label>
          <span>Max file size 2MB.</span>
        </div>
      </Stack>
      <div style={{ width: '300px', height: 'auto', margin: '2rem' }}>
        {image && <img src={URL.createObjectURL(image)} alt="Selected" />}
      </div> */}
      <Stack spacing={4}>
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
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getAproject(ids));
  }, [dispatch, token, id]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (propertyState?.isSuccessFeat) {
      toast.success('Project featured Successfullly!');
      router.push(`/project/${id}`);
    }
  }, [propertyState?.isSuccessFeat, id, router]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
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
          {propertyState?.isLoadingFeat ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            'Feature This Project'
          )}
        </LoadingButton>
      </Stack>
    </form>
  );
  // return (
  //   <Container maxWidth="xl">
  //     <Typography variant="h4" sx={{ mb: 5 }}>
  //       Feature This Project
  //     </Typography>

  //     <Grid container spacing={3}>
  //       <Box
  //         sx={{
  //           ...bgGradient({
  //             color: alpha(theme.palette.background.default, 0.9),
  //             imgUrl: '/assets/background/overlay_4.jpg',
  //           }),
  //           height: 1,
  //           width: '100%',
  //           padding: '50px',
  //         }}
  //       >
  //         <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
  //           <Card
  //             sx={{
  //               p: 5,
  //               width: 1,
  //               maxWidth: 820,
  //             }}
  //           >
  //             {renderForm}
  //           </Card>
  //         </Stack>
  //       </Box>
  //     </Grid>
  //   </Container>
  // );
}
