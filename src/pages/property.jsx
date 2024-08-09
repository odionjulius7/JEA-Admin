import { useEffect } from 'react';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import CircularProgress from '@mui/material/CircularProgress';

import SvgColor from 'src/components/svg-color';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { deleteProperty, getAproperty, resetState } from 'src/features/Property/propertySlice';

// ----------------------------------------------------------------------

export const post = {
  id: faker.string.uuid(),
  // cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  cover: `/assets/images/covers/cover_1.jpg`,
  title: 'Six Socks Studio',
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_1.jpg`,
  },
};

// ----------------------------------------------------------------------

export default function PropertyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  // const loanState = useSelector((state) => state.loan);
  const propertyState = useSelector((state) => state.property);

  const propertyDetail = propertyState?.property?.property;

  // user auth
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { id } = useParams();

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getAproperty(ids));
  }, [dispatch, token, id]);

  useEffect(() => {
    if (propertyState?.isSuccessDelete) {
      // Redirect to "/properties" when isSuccessDelete is true
      router.push('/property-list');
      // Show success toast message
      toast.success('Property deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Adjust as needed
      });
    }
  }, [router, propertyState?.isSuccessDelete]);

  // const ids = { id, token };
  //
  const { title } = post;

  const latestPostLarge = 0;

  const renderAvatar = (
    <Avatar
      alt={propertyDetail?.title}
      src={propertyDetail?.images[0]}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        ...(latestPostLarge && {
          zIndex: 9,
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        }),
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        cursor: 'pointer',
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(latestPostLarge && { typography: 'h5', height: 40 }),
        ...(latestPostLarge && {
          color: 'common.white',
        }),
      }}
    >
      {propertyDetail?.title}
    </Link>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={propertyDetail?.images[1]}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
        ...(latestPostLarge && {
          opacity: 0.48,
          color: 'common.white',
        }),
      }}
    >
      {fDate(propertyDetail?.createdAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        ...(latestPostLarge && { display: 'none' }),
      }}
    />
  );
  return (
    <>
      <Helmet>
        <title>JEA | property</title>
      </Helmet>

      <Container
        sx={{
          padding: '60px ',
          marginBottom: '40px',
        }}
      >
        <Typography
          style={{
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          Property Page
        </Typography>
        <Stack
          direction="row"
          spacing={12}
          sx={{
            marginBottom: '20px',
          }}
        >
          <Grid style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <Button
              style={{
                backgroundColor: '#FF9900', // orange-red color
                color: 'white',
                // padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bolder',
              }}
              onClick={() => router.push(`/edit-property/${propertyDetail._id}`)}
            >
              Edit Property Details
            </Button>
            <Button
              style={{
                border: '1px solid blue',
                color: '#000',
                fontWeight: 'bolder',
              }}
              onClick={() => router.push(`/product-image-edit/${propertyDetail._id}`)}
            >
              Update Property Image
            </Button>
          </Grid>
          <Grid>
            {propertyState?.isLoadingDelete ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                style={{
                  border: '1px solid orangered',
                  color: 'orangered',
                }}
                onClick={() => dispatch(deleteProperty({ id, token }))}
              >
                Delete Product
              </Button>
            )}
          </Grid>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Grid
            // item
            // md={8}
            sx={{
              height: '30vh',
              width: '60%',
            }}
          >
            <Card>
              <Box
                sx={{
                  position: 'relative',
                  pt: 'calc(100% * 3 / 4)',
                  ...(latestPostLarge && {
                    pt: 'calc(100% * 4 / 3)',
                    '&:after': {
                      top: 0,
                      content: "''",
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    },
                  }),
                  ...(latestPostLarge && {
                    pt: {
                      xs: 'calc(100% * 4 / 3)',
                      sm: 'calc(100% * 3 / 4.66)',
                    },
                  }),
                }}
              >
                {renderShape}

                {renderAvatar}

                {renderCover}
              </Box>

              <Box
                sx={{
                  p: (theme) => theme.spacing(4, 3, 3, 3),
                  ...(latestPostLarge && {
                    width: 1,
                    bottom: 0,
                    position: 'absolute',
                  }),
                }}
              >
                {renderDate}

                {renderTitle}

                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                    <em>Price:</em>
                    <span>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                        minimumFractionDigits: 0,
                      }).format(propertyDetail?.price)}
                    </span>
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                    <em>Location:</em>
                    <span>{propertyDetail?.location}</span>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                    <em style={{ marginRight: '0.5' }}>Number Of Room:</em>
                    <span>{propertyDetail?.number_of_room}</span>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                    marginTop: '1rem',
                  }}
                >
                  Description:
                  <Typography
                    sx={{
                      marginTop: '20px',
                      marginBottom: '40px',
                    }}
                  >
                    {propertyDetail?.description}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                    <em>Category:</em>
                    <span>{propertyDetail?.category}</span>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>features & Amenities:</em>
                    <ul>
                      {propertyDetail?.price && (
                        <li className="font_15">
                          Price:{' '}
                          {new Intl.NumberFormat('en-NG', {
                            style: 'currency',
                            currency: 'NGN',
                            minimumFractionDigits: 0,
                          }).format(propertyDetail?.price)}
                        </li>
                      )}
                      {propertyDetail?.address && (
                        <li className="font_15">Address: {propertyDetail?.address}.</li>
                      )}
                      {propertyDetail?.additional_fees && (
                        <li className="font_15">
                          Additional fees (For only rent categories):{' '}
                          {propertyDetail?.additional_fees}
                        </li>
                      )}
                      {propertyDetail?.property_id && (
                        <li className="font_15">Property ID: {propertyDetail?.property_id}</li>
                      )}
                      {propertyDetail?.property_type && (
                        <li className="font_15">Property Type: {propertyDetail?.property_type}</li>
                      )}
                      {propertyDetail?.year_built && (
                        <li className="font_15">Year Built: {propertyDetail?.year_built}</li>
                      )}
                      {propertyDetail?.details_category && (
                        <li className="font_15">Category: {propertyDetail?.details_category}</li>
                      )}
                      {propertyDetail?.status && (
                        <li className="font_15">Status: {propertyDetail?.status}</li>
                      )}
                      {propertyDetail?.number_of_room && (
                        <li className="font_15">
                          Number of Rooms: {propertyDetail?.number_of_room}
                        </li>
                      )}
                      {propertyDetail?.Number_of_Stories && (
                        <li className="font_15">
                          Number of Stories: {propertyDetail?.Number_of_Stories}
                        </li>
                      )}
                      {propertyDetail?.garage_capacity && (
                        <li className="font_15">Garage Capacity: {propertyDetail?.property_id}</li>
                      )}
                      {propertyDetail?.recent_renovations && (
                        <li className="font_15">
                          Recent Renovations: {propertyDetail?.recent_renovations}
                        </li>
                      )}
                    </ul>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>Property Details:</em>
                    <ul>
                      {propertyDetail?.price && (
                        <li className="font_15">Price: {propertyDetail?.price}</li>
                      )}
                      {propertyDetail?.address && (
                        <li className="font_15">Address: {propertyDetail?.address}.</li>
                      )}
                      {propertyDetail?.additional_fees && (
                        <li className="font_15">
                          Additional fees (For only rent categories):{' '}
                          {propertyDetail?.additional_fees}
                        </li>
                      )}
                      {propertyDetail?.property_id && (
                        <li className="font_15">Property ID: {propertyDetail?.property_id}</li>
                      )}
                      {propertyDetail?.property_type && (
                        <li className="font_15">{propertyDetail?.property_type}</li>
                      )}
                      {propertyDetail?.year_built && (
                        <li className="font_15">{propertyDetail?.year_built}</li>
                      )}
                      {propertyDetail?.details_category && (
                        <li className="font_15">{propertyDetail?.details_category}</li>
                      )}
                      {propertyDetail?.status && (
                        <li className="font_15">{propertyDetail?.status}</li>
                      )}
                      {propertyDetail?.Number_of_Stories && (
                        <li className="font_15">{propertyDetail?.Number_of_Stories}</li>
                      )}
                      {propertyDetail?.garage_capacity && (
                        <li className="font_15">{propertyDetail?.property_id}</li>
                      )}
                      {propertyDetail?.recent_renovations && (
                        <li className="font_15">
                          Recent Renovations: {propertyDetail?.recent_renovations}
                        </li>
                      )}
                      {propertyDetail?.youtube_url && (
                        <li className="font_15">
                          <a
                            style={{
                              color: 'blue',
                            }}
                            href={propertyDetail?.youtube_url}
                          >
                            Youtube Link
                          </a>
                        </li>
                      )}
                    </ul>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography
                    style={{
                      display: 'flex',
                      gap: '30px',
                      marginTop: '1rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <em>Neighborhood Info.:</em>
                    <ul>
                      {propertyDetail?.neighborhood_info1 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info1}</li>
                      )}
                      {propertyDetail?.neighborhood_info2 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info2}</li>
                      )}
                      {propertyDetail?.neighborhood_info3 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info3}</li>
                      )}
                      {propertyDetail?.neighborhood_info4 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info4}</li>
                      )}
                      {propertyDetail?.neighborhood_info5 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info5}</li>
                      )}
                      {propertyDetail?.neighborhood_info6 && (
                        <li className="font_15">{propertyDetail?.neighborhood_info6}</li>
                      )}
                    </ul>
                  </Typography>
                </Stack>
                {/* {renderInfo} */}
              </Box>
            </Card>
          </Grid>
          <Grid
            sx={{
              height: '400px',
              width: '40%',
            }}
            // md={4}
          >
            <Card
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                padding: '10px',
                gap: '10px',
              }}
            >
              {propertyDetail?.images?.map((property, index) => (
                <img
                  key={index}
                  src={property}
                  alt=""
                  style={{
                    width: '40%',
                  }}
                />
              ))}
            </Card>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
