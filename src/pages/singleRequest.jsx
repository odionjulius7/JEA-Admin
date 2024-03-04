import { Box, Container, Grid, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function RequestPage() {
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
              //   ...bgGradient({
              //     color: alpha(theme.palette.background.default, 0.9),
              //     imgUrl: '/assets/background/overlay_4.jpg',
              //   }),
              height: 1,
              width: '100%',
              padding: '30px',
            }}
          >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
              Request Data
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
