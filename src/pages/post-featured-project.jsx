import { Helmet } from 'react-helmet-async';
import { PostProjectView } from 'src/sections/post-project/view';

// ----------------------------------------------------------------------

export default function FeaturedProjectPage() {
  return (
    <>
      <Helmet>
        <title>JEA | Post Project</title>
      </Helmet>

      <PostProjectView />
      {/* <CreditTipView /> */}
    </>
  );
}
