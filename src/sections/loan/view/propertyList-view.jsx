import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Scrollbar from 'src/components/scrollbar';

import { useDispatch, useSelector } from 'react-redux';
import { allProperty, resetState } from 'src/features/Property/propertySlice';

import moment from 'moment';

import TableNoData from '../table-no-data';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';

import { emptyRows, applyFilter, getComparator } from '../utils';
import PropertiesTableRow from '../properties-table-row';
import PropertiesTableHead from '../properties-table-head';

// ----------------------------------------------------------------------

export default function PropertiesPage() {
  const dispatch = useDispatch();

  const propertyState = useSelector((state) => state.property);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;

  const propertys = propertyState?.properties?.allProperty || [];
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties based on the search term
  const filteredProperties = propertys.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredProperties
    ?.map((property, index) => {
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
        status: property?.status ? property?.status : 'available',
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

  //
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, creditId) => {
    const isAsc = orderBy === creditId && order === 'asc';
    if (creditId !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(creditId);
    }
  };

  //
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const dataFiltered = applyFilter({
    inputData: rows,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  //

  const [creditid, setCreditid] = useState('');
  //
  // useEffect(() => {
  //   let timer;
  //   // Define a delay (e.g., 2000 milliseconds = 2 seconds)
  //   const delay = 2000;
  //   // Check if the 'name' has a value and it's not empty
  //   if (creditid.trim() !== '') {
  //     // Clear the existing timer, if any
  //     clearTimeout(timer);
  //     // Start a new timer to fetch data after the delay
  //     timer = setTimeout(() => {
  //       // Dispatch the action to fetch data using the 'name'
  //       const nums = { creditid, token };
  //       dispatch(searchLoansByName(nums));
  //     }, delay);
  //   }

  // Clean up the timer if the component unmounts or 'name' changes
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [creditid, dispatch, token]);

  const handleUsernameChange = (e) => {
    setCreditid(e.target.value); // Update the username state with the input value
    // console.log(e.target.value);
  };

  const setPostStatus = (e) => {
    // console.log(e);
    // setLoanStatus(e);
  };

  // useEffect(() => {
  //   if (loanStatus !== 'completed' || 'active') {
  //     const items = { item: loanStatus, token };
  //     dispatch(getLoanStatus(items));
  //   }
  // }, [loanStatus, dispatch, token]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(allProperty(token));
  }, [dispatch, token]);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Properties</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          // numSelected={selected.length}
          setPostStatus={setPostStatus}
          filterName={creditid}
          onFilterName={handleSearchChange}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <PropertiesTableHead
                order={order}
                orderBy={orderBy}
                rowCount={rows?.length}
                onRequestSort={handleSort}
                // numSelected={selected.length}
                // onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  // { id: 'Id', label: 'ID', align: 'center' },
                  { id: 'title', label: 'Title', align: 'center' },
                  { id: 'location', label: 'Location', align: 'center' },
                  { id: 'amount', label: 'Property Value', align: 'center' },
                  { id: 'date', label: 'Date', align: 'center' },
                  { id: 'status', label: 'Status', align: 'center' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <PropertiesTableRow
                      key={row.id}
                      Id={row.id}
                      title={row.title}
                      location={row.location}
                      amount={row.amount}
                      status={row.status}
                      date={row.date}
                      // selected={selected.indexOf(row.name) !== -1}
                      // handleClick={(event) => handleClick(event, row.creditId)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, rows?.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
