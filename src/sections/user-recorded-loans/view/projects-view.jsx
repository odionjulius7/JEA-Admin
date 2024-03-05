// import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import Iconify from 'src/components/iconify';

import UserRecordedLoanTable from '../user-rec-loans-table';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Projects</Typography>
        <Link to="/post-featured-proj">
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            Post Featured Project
          </Button>
        </Link>
      </Stack>
      {/* <Card> */}
      <Grid
        sx={{
          padding: '0 1rem',
        }}
      >
        <UserRecordedLoanTable />
      </Grid>
      {/* </Card> */}
    </Container>
  );
}
