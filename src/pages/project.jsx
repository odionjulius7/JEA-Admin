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

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProj,
  getAproject,
  getAproperty,
  resetState,
} from 'src/features/Property/propertySlice';
import { toast } from 'react-toastify';
import { useRouter } from 'src/routes/hooks';

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

export default function ProjectPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const projectState = useSelector((state) => state.property);

  const projectDetail = projectState?.project?.project;

  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { id } = useParams();

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getAproject(ids));
  }, [dispatch, token, id]);

  //
  const { title } = post;

  const latestPostLarge = 0;

  const renderAvatar = (
    <Avatar
      alt={projectDetail?.title}
      src={projectDetail?.images[0]}
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
      {projectDetail?.title}
    </Link>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={projectDetail?.images[1]}
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
      {fDate(projectDetail?.createdAt)}
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

  useEffect(() => {
    if (projectState?.isSuccessDelete) {
      router.push('/projects');
      // Show success toast message
      toast.success('Property deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Adjust as needed
      });
    }
  }, [router, projectState?.isSuccessDelete]);

  return (
    <>
      <Helmet>
        <title>JEA | Project</title>
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
          Project Page
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            marginBottom: '20px',
          }}
        >
          <Grid>
            <Button onClick={() => router.push(`/edit-project/${id}`)}>Edit Project</Button>
          </Grid>
          <Grid>
            <Button onClick={() => router.push(`/featured-proj/${projectDetail._id}`)}>
              Feature This Project
            </Button>
          </Grid>
        </Stack>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '1rem',
          }}
        >
          {projectState?.isLoadingDelete ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Button
              style={{
                border: '1px solid orangered',
                color: 'orangered',
              }}
              onClick={() => dispatch(deleteProj({ id, token }))}
            >
              Delete Project
            </Button>
          )}
        </div>
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
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em>Price:</em>
                    <span>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                        minimumFractionDigits: 0,
                      }).format(projectDetail?.price)}
                    </span>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em>Category:</em>
                    <span>{projectDetail?.category}</span>
                  </Typography>
                </Stack>
                <Stack style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em>Location:</em>
                    <span>{projectDetail?.location}</span>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    marginBottom: '5px',
                  }}
                >
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em style={{ marginRight: '0.5' }}>Number Of Room:</em>
                    <span>{projectDetail?.number_of_room}</span>
                  </Typography>
                </Stack>
                <Stack>
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>Neighborhood Info:</em>

                    <ul>
                      {projectDetail?.neighborhood_info1 && (
                        <li className="font_15">{projectDetail?.neighborhood_info1}</li>
                      )}
                      {projectDetail?.neighborhood_info2 && (
                        <li className="font_15">{projectDetail?.neighborhood_info2}</li>
                      )}
                      {projectDetail?.neighborhood_info3 && (
                        <li className="font_15">{projectDetail?.neighborhood_info3}</li>
                      )}
                      {projectDetail?.neighborhood_info4 && (
                        <li className="font_15">{projectDetail?.neighborhood_info4}</li>
                      )}
                      {projectDetail?.neighborhood_info5 && (
                        <li className="font_15">{projectDetail?.neighborhood_info5}</li>
                      )}
                      {projectDetail?.neighborhood_info6 && (
                        <li className="font_15">{projectDetail?.neighborhood_info6}</li>
                      )}
                    </ul>
                  </Typography>
                </Stack>

                <Stack>
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>Details:</em>
                    <ul>
                      {projectDetail?.price && (
                        <li className="font_15">Price: {projectDetail?.price}</li>
                      )}
                      {projectDetail?.address && (
                        <li className="font_15">Address: {projectDetail?.address}.</li>
                      )}
                      {projectDetail?.additional_fees && (
                        <li className="font_15">
                          Additional fees (For only rent categories):{' '}
                          {projectDetail?.additional_fees}
                        </li>
                      )}
                      {projectDetail?.property_id && (
                        <li className="font_15">Property ID: {projectDetail?.property_id}</li>
                      )}
                      {projectDetail?.property_type && (
                        <li className="font_15">{projectDetail?.property_type}</li>
                      )}
                      {projectDetail?.year_built && (
                        <li className="font_15">{projectDetail?.year_built}</li>
                      )}
                      {projectDetail?.details_category && (
                        <li className="font_15">{projectDetail?.details_category}</li>
                      )}
                      {projectDetail?.status && (
                        <li className="font_15">{projectDetail?.status}</li>
                      )}
                      {projectDetail?.Number_of_Stories && (
                        <li className="font_15">{projectDetail?.Number_of_Stories}</li>
                      )}
                      {projectDetail?.garage_capacity && (
                        <li className="font_15">{projectDetail?.property_id}</li>
                      )}
                      {projectDetail?.recent_renovations && (
                        <li className="font_15">
                          Recent Renovations: {projectDetail?.recent_renovations}
                        </li>
                      )}
                      {projectDetail?.youtube_url && (
                        <li className="font_15">
                          <a
                            style={{
                              color: 'blue',
                            }}
                            href={projectDetail?.youtube_url}
                          >
                            Youtube Link
                          </a>
                        </li>
                      )}
                    </ul>
                  </Typography>
                </Stack>

                <Stack>
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>features:</em>

                    <ul>
                      {projectDetail?.feature_1 && (
                        <li className="font_15">{projectDetail?.feature_1}</li>
                      )}
                      {projectDetail?.feature_2 && (
                        <li className="font_15">{projectDetail?.feature_2}</li>
                      )}
                      {projectDetail?.feature_4 && (
                        <li className="font_15">{projectDetail?.feature_4}</li>
                      )}
                      {projectDetail?.feature_5 && (
                        <li className="font_15">{projectDetail?.feature_5}</li>
                      )}
                      {projectDetail?.feature_6 && (
                        <li className="font_15">{projectDetail?.feature_6}</li>
                      )}
                      {projectDetail?.feature_7 && (
                        <li className="font_15">{projectDetail?.feature_7}</li>
                      )}
                      {projectDetail?.feature_8 && (
                        <li className="font_15">{projectDetail?.feature_8}</li>
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
                    sx={{
                      marginTop: '20px',
                      marginBottom: '40px',
                    }}
                  >
                    {projectDetail?.description}
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
              {projectDetail?.images?.map((property, index) => (
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
