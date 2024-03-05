import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';

import { allBlog, resetState } from 'src/features/Property/propertySlice';

import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function BlogView() {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.property);

  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.token;

  const blogs = [...(blogState?.blogs?.blog || [])].sort((a, b) => {
    // Assuming createdAt is a timestamp or a string in a format that can be compared
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    // Sort in descending order (latest first)
    return dateB - dateA;
  });

  useEffect(() => {
    dispatch(resetState());
    dispatch(allBlog(token));
  }, [dispatch, token]);
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Blog</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Blog
        </Button>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {blogs?.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
