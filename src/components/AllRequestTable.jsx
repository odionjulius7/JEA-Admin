import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
// import { allLoanRecords, loanTransaction } from 'src/features/Loan/loanSlice';
import moment from 'moment';
import { allRequest, resetState } from 'src/features/Property/propertySlice';

const columns = [
  {
    field: 'name',
    headerName: 'Full Name',
    width: 200,
    renderCell: (params) => <a href={`/single-request/${params.row.id}`}>{params.value}</a>,
  },

  {
    field: 'amount',
    headerName: 'Maximum Budget',
    // type: 'number',
    width: 150,
  },
  { field: 'property_category', headerName: 'Prop. Category', width: 170 },
  { field: 'location', headerName: 'Location', width: 160 },
  {
    field: 'country',
    headerName: 'Country',
    // type: 'number',
    width: 160,
  },
  {
    field: 'created',
    headerName: 'Date',
    // type: 'number',
    width: 160,
  },
];

const rows1 = [
  {
    id: 123,
    title: 'Duplex',
    location: 'Ajah',
    country: 'Niger',
    amount: '50,000',
    created: '11/28/2023',
  },
];

export default function RequestTable() {
  const dispatch = useDispatch();
  const requestState = useSelector((state) => state.property);
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.token;

  const requests = requestState?.requests?.allPropRequest || [];

  const filteredRequests = requests.filter(
    (request) =>
      request.maximum_budget &&
      request.fullName &&
      request.location &&
      request.number_of_room &&
      request.property_category
    // Check if the request has the desired properties or values
    // Add more conditions if needed
  );

  // maximum_budget, fullName, location,number_of_room, property_category
  console.log(filteredRequests);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allRequest(token));
  }, [dispatch, token]);

  //
  const rows = filteredRequests?.map((request, index) => {
    // Create loan data for each item
    const inData = {
      id: request?._id,
      name: request?.fullName,
      location: request?.location,
      property_category: request?.property_category,
      country: request?.country,
      // status: request?.status ? 'seen' : 'not seen',
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(request?.maximum_budget),
      created: moment(request?.createdAt).format('L'),
    };
    inData.index = index;

    return inData;
  });

  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        width: '95%',
      }}
    >
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>All Request</h2>
      <DataGrid
        style={{
          padding: '1rem',
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
