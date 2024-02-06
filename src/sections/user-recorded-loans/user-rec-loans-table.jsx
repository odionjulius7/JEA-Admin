import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allUsersRecordedLoans } from 'src/features/Loan/loanSlice';
import moment from 'moment';
import { Button } from '@mui/material';
// import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 120,
    renderCell: (params) => <a href={`/project/${params.row.id}`}>{params.value}</a>,
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

export default function UserRecordedLoanTable() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  console.log(loanState?.userRecordedLoans);

  const loans1 = loanState?.userRecordedLoans || [];
  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }
  //
  const rows = loans1?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      id: loan?.id || 0,
      lastName: loan?.last_name,
      firstName: loan?.first_name,
      email: 'empty',
      lender_borrower: loan?.user_type,
      lender: loan?.user_type === 'Lender' ? loan?.first_name : '',
      lenderId: loan?.user_type === 'Lender' ? loan?.user_id : '',
      borrower: loan?.user_type === 'Borrower' ? loan?.loan?.first_name : '',
      borrowerId: loan?.user_type === 'Borrower' ? loan?.user_id : '',
      loanTakenDate: moment(loan?.date_loan_taken).format('L'),
      loanAmount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.loan_amount)),
      loanInterest: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.loan_interest)),
      repaymentSchedule: loan?.repayment_schedule,
      wasLoanFullyRepaid: '',
    };
    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });
  // console.log(loansData);
  //

  useEffect(() => {
    dispatch(allUsersRecordedLoans(token));
  }, [dispatch, token]);
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        width: '80%',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
        // padding: '0.5rem',
      }}
    >
      <DataGrid
        style={{
          padding: '1rem',
        }}
        rows={rows1}
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
