import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allLoanRecords, loanTransaction } from 'src/features/Loan/loanSlice';
import moment from 'moment';
import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 120,
    renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'location', headerName: 'Loction', width: 160 },
  {
    field: 'amount',
    headerName: 'Value',
    // type: 'number',
    width: 160,
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
        color={
          (params.value === 'contested' && 'error') ||
          (params.value === 'rejected' && 'error') ||
          (params.value === 'awaiting_approval' && 'warning') ||
          'success'
        }
        style={{ padding: '0 1rem' }}
      >
        {params.value}
      </Button>
    ),
  },
  // {
  //   field: 'message',
  //   headerName: 'Message',
  //   // type: 'number',
  //   width: 220,
  // },
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

export default function DashboardTable() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  console.log(loanState?.loanTransactionData);
  const token = authState?.auth.user?.data?.token;

  const loans1 = loanState?.loanTransactionData || [];
  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }
  //
  const rows = loans1?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      id: loan?.loan_id || 0,
      lender: loan?.lender?.first_name,
      borrower: loan?.borrower?.first_name,
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.amount)),
      repaymentDate: moment(loan?.createdAt).format('L'),
      status: loan?.status,
      message: '',
    };
    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });
  // console.log(rows1);

  useEffect(() => {
    // dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    dispatch(loanTransaction(token));
  }, [dispatch, token]);
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        width: '80%',
      }}
    >
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Properies</h2>
      <DataGrid
        style={{
          padding: '1rem',
        }}
        rows={rows1}
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
