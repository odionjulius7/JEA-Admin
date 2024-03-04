import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
// import { allUsersRecordedLoans } from 'src/features/Loan/loanSlice';
import moment from 'moment';
import { Button } from '@mui/material';
import { allProject, resetState } from 'src/features/Property/propertySlice';
// import { Button } from '@mui/material';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    renderCell: (params) => <a href={`/project/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'location', headerName: 'Loction', width: 160 },
  {
    field: 'amount',
    headerName: 'Property Value',
    width: 160,
  },
  {
    field: 'category',
    headerName: 'Property Category',
    width: 180,
  },
  {
    field: 'created',
    headerName: 'Date',
    // type: 'number',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 140,
    renderCell: (params) => (
      <Button
        variant="text"
        color={(params.value === 'sold' && 'error') || 'success'}
        style={{ padding: '0 1rem' }}
      >
        {params.value}
      </Button>
    ),
  },
];

const rows1 = [
  {
    id: 1432,
    title: 'Duplex',
    location: 'Ajah',
    amount: '50,000',
    created: '11/28/2023',
    status: 'Sold',
    // message: 'lorem ipsum make a ka dhh jhfdh',
  },
];

export default function UserRecordedLoanTable() {
  const dispatch = useDispatch();

  const projectState = useSelector((state) => state.property);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;

  const projs = projectState?.projects?.allProject || [];

  const rows = projs?.map((project, index) => {
    const propsData = {
      id: project?._id || 0,
      title: project.title,
      location: project.location,
      category: project.category,
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(project?.price),
      created: moment(project?.createdAt).format('L'),
      status: project?.category,
    };
    // You can also add the index if needed
    propsData.index = index;

    return propsData;
  });
  useEffect(() => {
    dispatch(resetState());
    dispatch(allProject(token));
  }, [dispatch, token]);
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        width: '95%',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        // padding: '0.5rem',
      }}
    >
      <DataGrid
        style={{
          padding: '1rem',
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        // checkboxSelection
      />
    </div>
  );
}
