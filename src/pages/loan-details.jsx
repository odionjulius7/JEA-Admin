import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';
import { LoanDetailsView } from 'src/sections/loan-details/view';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>JEA | Details</title>
      </Helmet>

      <LoanDetailsView />
    </>
  );
}
