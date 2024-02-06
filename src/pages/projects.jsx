import { Helmet } from 'react-helmet-async';

import { ProjectsPageView } from 'src/sections/user-recorded-loans/view';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title> JEA | Projects </title>
      </Helmet>

      <ProjectsPageView />
    </>
  );
}
