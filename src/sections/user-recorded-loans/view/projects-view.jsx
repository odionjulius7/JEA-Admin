// import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';

import UserRecordedLoanTable from '../user-rec-loans-table';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Projects</Typography>
      </Stack>
      {/* <Card> */}
      <Grid
        sx={{
          padding: '0 1rem',
        }}
        // xs={12}
        // sm={6}
        // md={6}
      >
        <UserRecordedLoanTable />
      </Grid>
      {/* </Card> */}
    </Container>
  );
}
