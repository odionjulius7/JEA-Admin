import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>JEA | Account Edit</title>
      </Helmet>

      <AccountView />
    </>
  );
}
