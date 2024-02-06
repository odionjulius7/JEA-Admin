import { Helmet } from 'react-helmet-async';
import { PropertyList } from 'src/sections/loan/view';

// ----------------------------------------------------------------------

export default function PropertiesPage() {
  return (
    <>
      <Helmet>
        <title> JEA | Property List </title>
      </Helmet>
      <PropertyList />
    </>
  );
}
