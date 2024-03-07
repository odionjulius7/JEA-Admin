import { Helmet } from 'react-helmet-async';
// import { PostProjectView } from 'src/sections/post-project/view';
import PostFeaturedProjectView from 'src/sections/postFeacturedProj';

// ----------------------------------------------------------------------

export default function FeaturedProjectPage() {
  return (
    <>
      <Helmet>
        <title>JEA | Post Featured Project</title>
      </Helmet>

      <PostFeaturedProjectView />
    </>
  );
}
