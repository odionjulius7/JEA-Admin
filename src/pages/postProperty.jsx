import { Helmet } from 'react-helmet-async';
import { PostProperty } from 'src/sections/loan-repayment/view';

// ----------------------------------------------------------------------

export default function PostPropertyPage() {
  return (
    <>
      <Helmet>
        <title> Reviel | Post Product </title>
      </Helmet>

      <PostProperty />
    </>
  );
}
