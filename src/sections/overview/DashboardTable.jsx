import * as React from 'react';
import moment from 'moment';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { allProperty, resetState } from 'src/features/Property/propertySlice';

const columns = [
  // {
  //   field: 'id',
  //   headerName: 'ID',
  //   width: 120,
  //   renderCell: (params) => <a href={`/property/${params.row.id}`}>{params.value}</a>,
  // },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    renderCell: (params) => <a href={`/property/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'location', headerName: 'Location', width: 160 },
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

export default function DashboardTable() {
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;

  const propertys = propertyState?.properties?.allProperty || [];
  // function convertKoboToNaira(koboAmount) {
  //   const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
  //   return nairaAmount;
  // }
  //
  const rows = propertys?.map((property, index) => {
    // Create loan data for each item
    const propsData = {
      id: property?._id || 0,
      title: property.title,
      location: property.location,
      category: property.category,
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(property?.price),
      created: moment(property?.createdAt).format('L'),
      status: 'available',
    };
    // You can also add the index if needed
    propsData.index = index;

    return propsData;
  });
  // console.log(rows1);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty(token));
  }, [dispatch, token]);
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        width: '96%',
      }}
    >
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Properies</h2>
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
