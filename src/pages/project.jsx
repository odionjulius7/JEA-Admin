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
import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAproject, getAproperty, resetState } from 'src/features/Property/propertySlice';

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
  // const loanState = useSelector((state) => state.loan);
  const projectState = useSelector((state) => state.property);

  const projectDetail = projectState?.project?.project;
  // console.log(projectDetail);
  // user auth
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { id } = useParams();

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    // dispatch(getAproperty(ids));
    dispatch(getAproject(ids));
  }, [dispatch, token, id]);

  //
  const { cover, title, view, comment, share, author, createdAt } = post;

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
          spacing={2}
          sx={{
            marginBottom: '20px',
          }}
        >
          <Grid>
            <Button>Edit Product</Button>
          </Grid>
          <Grid>
            <Button>Delete Product</Button>
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
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em>Price:</em>
                    <span>
                      {new Intl.NumberFormat('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
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
                    <span>{projectDetail?.category?.toUpperCase()}</span>
                  </Typography>
                </Stack>
                <Stack style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                  <Typography style={{ display: 'flex', gap: '10px' }}>
                    <em>Location:</em>
                    <span>{projectDetail?.location?.toUpperCase()}</span>
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

                    <span>
                      <div dangerouslySetInnerHTML={{ __html: projectDetail?.neighborhood_info }} />
                    </span>
                  </Typography>
                </Stack>

                <Stack>
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>Details:</em>
                    <span>
                      <div dangerouslySetInnerHTML={{ __html: projectDetail?.property_details }} />
                    </span>
                  </Typography>
                </Stack>

                <Stack>
                  <Typography style={{ display: 'flex', gap: '30px', marginTop: '1rem' }}>
                    <em>features:</em>

                    <span>
                      <div dangerouslySetInnerHTML={{ __html: projectDetail?.features }} />
                    </span>
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
