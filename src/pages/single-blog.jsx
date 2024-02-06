import { Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Watermark } from 'antd';

// ----------------------------------------------------------------------

export default function SingleBlogPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | Dashboard</title>
      </Helmet>

      {/* <div>Single Blog</div> */}
      <Container>
        <Watermark content="JEA Post">
          <Stack
            sx={{
              padding: '50px ',
            }}
          >
            <Stack
              sx={{
                margin: '50px',
              }}
            >
              <h3>Blog Title lorem</h3>
            </Stack>
            <div
              style={{
                minHeight: 400,
              }}
            >
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eum officia fuga
                perferendis illum dignissimos tenetur, non ipsum distinctio ad doloribus sit quo
                obcaecati iusto veritatis? Laboriosam dolores neque illo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Est, consectetur, perferendis reiciendis laborum
                fugit ad neque voluptatum maiores unde accusamus nulla. Illum fugit eum quis
                mollitia assumenda repellendus necessitatibus impedit? Ipsum provident quos
                excepturi est ex sit molestiae delectus ipsam error nulla? Quae libero quas nostrum,
                distinctio autem provident qui consequuntur aliquam aliquid veniam modi sit porro
                perspiciatis nam vero? Magni iure itaque et! Alias dolores veritatis commodi. Quas
                possimus cumque pariatur cum natus qui in ex architecto itaque aut. Fugiat rem
                expedita corporis odio placeat quam optio, asperiores suscipit. Blanditiis incidunt,
                officiis nemo ullam veniam adipisci quas molestias, inventore itaque corporis
                distinctio, excepturi quaerat quasi illum ipsa neque! Illo exercitationem fuga
                repudiandae saepe vel sequi ducimus tempore consectetur debitis.
              </Typography>
              <Typography
                sx={{
                  marginTop: '1rem',
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eum officia fuga
                perferendis illum dignissimos tenetur, non ipsum distinctio ad doloribus sit quo
                obcaecati iusto veritatis? Laboriosam dolores neque illo. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Est, consectetur, perferendis reiciendis laborum
                fugit ad neque voluptatum maiores unde accusamus nulla. Illum fugit eum quis
                mollitia assumenda repellendus necessitatibus impedit? Ipsum provident quos
                excepturi est ex sit molestiae delectus ipsam error nulla? Quae libero quas nostrum,
                distinctio autem provident qui consequuntur aliquam aliquid veniam modi sit porro
                perspiciatis nam vero? Magni iure itaque et! Alias dolores veritatis commodi. Quas
                possimus cumque pariatur cum natus qui in ex architecto itaque aut. Fugiat rem
                expedita corporis odio placeat quam optio, asperiores suscipit. Blanditiis incidunt,
                officiis nemo ullam veniam adipisci quas molestias, inventore itaque corporis
                distinctio, excepturi quaerat quasi illum ipsa neque! Illo exercitationem fuga
                repudiandae saepe vel sequi ducimus tempore consectetur debitis.
              </Typography>
            </div>
          </Stack>
        </Watermark>
      </Container>
    </>
  );
}
