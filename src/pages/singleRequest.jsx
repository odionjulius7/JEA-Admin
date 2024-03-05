import { useEffect } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getaRequest, resetState } from 'src/features/Property/propertySlice';

export default function RequestPage() {
  const dispatch = useDispatch();
  // const loanState = useSelector((state) => state.loan);
  const requestState = useSelector((state) => state.property);

  const requestDetail = requestState?.singleRequest?.propertyReq;
  console.log(requestDetail);
  // user auth
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { id } = useParams();

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getaRequest(ids));
  }, [dispatch, token, id]);

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
              backgroundColor: '#fff',
              height: 1,
              width: '80%',
              padding: '40px',
              marginLeft: '1rem',
            }}
          >
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Full Name:</em>
                <span>{requestDetail?.fullName}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Email:</em>
                <span>{requestDetail?.email}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Inquirer Category:</em>
                <span>{requestDetail?.inquirer_category}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Phone Number:</em>
                <span>{requestDetail?.phoneNumber}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Location:</em>
                <span>{requestDetail?.location}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Max. Budget:</em>
                <span>{requestDetail?.maximum_budget}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Number Of Rooms:</em>
                <span>{requestDetail?.number_of_room}</span>
              </Typography>
            </Stack>
            <Stack
              sx={{
                marginBottom: '5px',
              }}
            >
              <Typography style={{ display: 'flex', gap: '10px' }}>
                <em style={{ marginRight: '0.5' }}>Property Category:</em>
                <span>{requestDetail?.property_category}</span>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
