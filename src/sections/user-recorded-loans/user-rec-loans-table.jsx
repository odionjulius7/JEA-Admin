import * as React from 'react';
import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
// import { allUsersRecordedLoans } from 'src/features/Loan/loanSlice';
import moment from 'moment';

import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

import { allProject, resetState } from 'src/features/Property/propertySlice';
import { useNavigate } from 'react-router-dom';
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

// const rows1 = [
//   {
//     id: 1432,
//     title: 'Duplex',
//     location: 'Ajah',
//     amount: '50,000',
//     created: '11/28/2023',
//     status: 'Sold',
//     // message: 'lorem ipsum make a ka dhh jhfdh',
//   },
// ];

export default function UserRecordedLoanTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projectState = useSelector((state) => state.property);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;

  const projs = projectState?.projects?.allProject || [];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjs = projs.filter((property) => {
    const lowercaseTitle = property.title.toLowerCase().trim();
    const lowercaseSearchTerm = searchTerm.toLowerCase().trim();

    if (lowercaseSearchTerm === '') {
      return true; // Return true for all properties if search term is empty
    }
    return lowercaseTitle.includes(lowercaseSearchTerm);
  });

  const rows = filteredProjs
    .map((project, index) => {
      const propsData = {
        id: project?._id || 0,
        title: project.title,
        location: project.location,
        category: project.category,
        amount: new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0,
        }).format(project?.price),
        created: moment(project?.createdAt).format('L'),
        status: project?.category,
      };
      // You can also add the index if needed
      propsData.index = index;

      return propsData;
    })
    .reverse();

  // Handler for updating search term
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProject());
  }, [dispatch, token]);
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        width: '100%',
        padding: '1rem 0 0 1rem',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        // padding: '0.5rem',
      }}
    >
      <div>
        <OutlinedInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Projects..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      </div>
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
        onRowClick={(params, event) => {
          navigate(`/project/${params.id}`);
        }}
      />
    </div>
  );
}
