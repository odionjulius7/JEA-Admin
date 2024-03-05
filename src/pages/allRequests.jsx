import { Helmet } from 'react-helmet-async';
import RequestTable from 'src/components/AllRequestTable';
import { Box, Container, Grid, Stack } from '@mui/material';

export default function AllRequestsPage() {
  return (
    <>
      <Helmet>
        <title>JEA | Property Requests</title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <h2
            style={{
              padding: '3rem 2rem',
            }}
          >
            Property Requests
          </h2>
          <Box
            sx={{
              height: 1,
              width: '100%',
              padding: '30px',
            }}
          >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
              <RequestTable />
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
