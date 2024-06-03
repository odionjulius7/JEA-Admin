import { Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Watermark } from 'antd';
import { getABlog, resetState } from 'src/features/Property/propertySlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function SingleBlogPage() {
  const dispatch = useDispatch();
  // const loanState = useSelector((state) => state.loan);
  const blogState = useSelector((state) => state.property);

  const blogDetail = blogState?.singleBlog?.blog;
  console.log(blogDetail);
  // user auth
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { id } = useParams();

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getABlog(ids));
  }, [dispatch, token, id]);

  return (
    <>
      <Helmet>
        <title>Reviel | Dashboard</title>
      </Helmet>

      {/* <div>Single Blog</div> */}
      <Container>
        <Watermark content="JEA Post">
          <Stack
            sx={{
              padding: '50px ',
            }}
          >
            <Stack
              sx={{
                margin: '50px',
              }}
            >
              <h3>{blogDetail?.title}</h3>
            </Stack>
            <div
              style={{
                minHeight: 400,
              }}
            >
              <div className="" style={{ padding: '1rem' }}>
                <div dangerouslySetInnerHTML={{ __html: blogDetail?.body }} />
              </div>
            </div>
          </Stack>
        </Watermark>
      </Container>
    </>
  );
}
