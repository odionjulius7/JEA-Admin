import { useEffect, useState } from 'react';
import { Box, Card, Container, Grid, Stack, TextField } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import { alpha, useTheme } from '@mui/material/styles';

import LoadingButton from '@mui/lab/LoadingButton';

import CircularProgress from '@mui/material/CircularProgress';

// import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import './imagestyle.css';
import { postBlog, resetState } from 'src/features/Property/propertySlice';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  // images: yup.array(),
});

// ----------------------------------------------------------------------
export default function PostBlogPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const blogState = useSelector((state) => state.property);
  console.log(blogState?.isSuccess);
  const token = authState?.auth.user?.token;

  const [image, setImage] = useState('');
  const [body, setBody] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        // Append form fields to formData
        formData.append('title', values.title);
        formData.append('body', body);
        // Append image to formData
        if (image) {
          formData.append('image', image);
        }
        const data = { formData, token };
        await dispatch(postBlog(data));
        formik.resetForm();
        setImage('');
        setBody('');
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

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (blogState?.isSuccess && blogState?.postedBlog) {
      toast.success('property posted Successfullly!');
    }
  }, [blogState?.isSuccess, blogState?.postedBlog]);

  return (
    <>
      <Helmet>
        <title>JEA | Post Blog</title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <h2
            style={{
              padding: '3rem 2rem',
            }}
          >
            Post Blog Page
          </h2>
          <Box
            sx={{
              height: 1,
              width: '100%',
              padding: '30px',
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                  sx={{
                    p: 5,
                    width: 1,
                    maxWidth: 620,
                  }}
                >
                  <Stack spacing={3}>
                    {/*  */}
                    <TextField
                      label="Title"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={formik.touched.title && Boolean(formik.errors.title)}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                    <div>
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello!</p>"
                        // data={
                        //   userToCreate.membership
                        //     ? userToCreate.membership?.benefits
                        //     : "<p>Hello!</p>"
                        // }
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          // console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setBody(data);
                        }}
                        onBlur={(event, editor) => {
                          // console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          // console.log("Focus.", editor);
                        }}
                      />
                    </div>
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
                            onChange={handleImage}
                          />
                        </label>
                        <span>
                          Max file size 2MB. <br /> CTRL+ click to select multiple images
                        </span>
                      </div>
                    </Stack>
                    <div style={{ width: '400px', height: 'auto' }}>
                      {image && <img src={URL.createObjectURL(image)} alt="Selected" />}
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
                      {blogState?.isLoading ? (
                        <Box sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>
                      ) : (
                        'Post'
                      )}
                      {/* post */}
                    </LoadingButton>
                  </Stack>
                </Card>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
