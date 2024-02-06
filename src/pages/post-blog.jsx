import { Box, Card, Container, Grid, Stack, TextField } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------
export default function PostBlogPage() {
  const theme = useTheme();
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
              ...bgGradient({
                color: alpha(theme.palette.background.default, 0.9),
                imgUrl: '/assets/background/overlay_4.jpg',
              }),
              height: 1,
              width: '100%',
              padding: '30px',
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
                <Stack spacing={3}>
                  <TextField label="Blog Title" />
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
                        // SetBody1(data);
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
