import { useEffect } from 'react';
// import { faker } from '@faker-js/faker';
// import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import {
  allBlog,
  allProject,
  allRequest,
  allProperty,
  resetState,
} from 'src/features/Property/propertySlice';

import { useDispatch, useSelector } from 'react-redux';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import DashboardTable from '../DashboardTable';
import AppWidgetSummary from '../app-widget-summary';

export default function AppView() {
  const dispatch = useDispatch();
  // const loanState = useSelector((state) => state.loan);
  const propertyState = useSelector((state) => state.property);
  const projectState = useSelector((state) => state.property);
  const requestState = useSelector((state) => state.property);
  const blogState = useSelector((state) => state.property);

  // user
  const userState = useSelector((state) => state.users);
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;
  const { user } = authState.auth;
  const user1 = user?.data?.user;

  const propertys = propertyState?.properties?.allProperty || [];
  const projs = projectState?.projects?.allProject || [];
  const requests = requestState?.requests?.allPropRequest || [];
  const blogs = blogState?.blogs?.blog || [];
  // console.log(blogState?.blogs);
  const userMetrics = userState?.userMetrics;

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty(token));
    dispatch(allProject(token));
    dispatch(allRequest(token));
    dispatch(allBlog(token));
  }, [dispatch, token]);
  //
  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }

  const propLth = propertys || [];
  const projLth = projs || [];
  const requestLth = requests || [];
  const blogtLth = blogs || [];

  const completedProj = projs.filter((proj) => proj.category === 'completed');
  const unCompletedProj = projs.filter((proj) => proj.category !== 'completed');

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi {user1?.first_name}, Welcome 👋
      </Typography>

      <Grid container spacing={3}>
        {/* small */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="All Properties"
            total={propLth}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Requested Properties"
            total={requestLth}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="All Projects"
            total={projLth}
            color="warning"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        {/* small */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Completed Projects"
            total={completedProj}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            // icon={<span style={{ fontSize: '30px' }}>&#8358; </span>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ongoing Projects"
            total={unCompletedProj}
            color="error"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="All Blogs"
            total={blogtLth}
            color="error"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        {/* Metric End Here */}

        <Grid
          xs={12}
          md={6}
          lg={9}
          sx={{
            marginTop: '2rem',
          }}
        >
          <AppWebsiteVisits
            title="Property Requests"
            // subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ],
              series: [
                {
                  name: 'Vol. of Requests',
                  type: 'line',
                  // type: 'column',
                  fill: 'solid',
                  // data: [],
                  data: [23, 11, 0, 0, 20, 20, 0, 60, 0, 0],
                },
                //   {
                //     name: 'Vol. of overdue loans',
                //     type: 'line',
                //     fill: 'solid',
                //     data: [],
                //     // data: [44, 55, 41, 67, 22, 43, 21, 0, 0, 70, 20],
                //   },
                //   {
                //     name: 'Vol. of completed loans',
                //     type: 'line',
                //     fill: 'solid',
                //     data: [0],
                //     // data: [11, 25, 36, 0, 0, 0, 0, 52, 59, 0, 39],
                //   },
                //   {
                //     name: 'Vol. of active loans',
                //     type: 'line',
                //     fill: 'solid',
                //     data: [0, 0, 0],
                //     // data: [90, 25, 64, 52, 59, 36, 39, 11, 25, 36, 30],
                //   },
              ],
            }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            marginTop: '2rem',
          }}
        >
          <AppCurrentVisits
            title="Projects"
            chart={{
              series: [
                { label: 'Completed', value: completedProj?.length || 0.01 },
                { label: 'Ongoing', value: unCompletedProj?.length || 0.01 },
                // { label: 'Series', value: 1443 },
                // { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12}>
          <DashboardTable />
        </Grid>
      </Grid>
    </Container>
  );
}

// AppView.propTypes = {
//   props: PropTypes.array,
// };
