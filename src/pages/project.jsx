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
  const { cover, title, view, comment, share, author, createdAt } = post;

  const latestPostLarge = 0;

  const renderAvatar = (
    <Avatar
      alt={author.name}
      src={author.avatarUrl}
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
      {title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        // { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        { number: share, icon: 'eva:share-fill' },
      ].map((info) => (
        <Stack
          key={1}
          direction="row"
          sx={{
            ...(latestPostLarge && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
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
      {fDate(createdAt)}
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
        <title>JEA | Dashboard</title>
      </Helmet>

      <Container
        sx={{
          padding: '50px ',
        }}
      >
        <Typography>Project Page</Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginBottom: '20px',
          }}
        >
          <Grid>
            <Button>Edit Project</Button>
          </Grid>
          <Grid>
            <Button>Delete Project</Button>
          </Grid>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Grid
            item
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

                <Stack>
                  <Typography>
                    Lorem ipsum dolor sit, adipisci provident eos beatae, inventore sequi alias
                    nisi, veritatis necessitatibus libero eum mollitia suscipit perferendis
                    consequuntur modi fugiat ratione eveniet dolores sit error accusamus dolorum
                    voluptate! Veritatis, consequatur! emporibus quos sunt similique laborum iste
                    enim ducimus dolorem quod dignissimos recusandae eligendi suscipit dolore amet,
                    neque consectetur. Fuga voluptates, voluptatibus quisquam eos aspernatur maxime!
                    Magnam ex non, fugiat necessitatibus, earum tempore excepturi dolor quia
                    officiis dolorum explicabo adipisci nam, reprehenderit in consequatur quos porro
                    aperiam aspernatur expedita pariatur asperiores dolore. Esse enim deserunt
                    sequi.
                  </Typography>
                </Stack>

                {renderInfo}
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
              <img
                src="/assets/images/avatars/avatar_1.jpg"
                alt=""
                style={{
                  width: '40%',
                }}
              />
              <img
                src="/assets/images/avatars/avatar_1.jpg"
                alt=""
                style={{
                  width: '40%',
                }}
              />
              <img
                src="/assets/images/avatars/avatar_1.jpg"
                alt=""
                style={{
                  width: '40%',
                }}
              />
              <img
                src="/assets/images/avatars/avatar_1.jpg"
                alt=""
                style={{
                  width: '40%',
                }}
              />
            </Card>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
