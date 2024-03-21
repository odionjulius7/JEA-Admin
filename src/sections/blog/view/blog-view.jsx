import { useEffect } from 'react';

//
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

//
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';

import { allBlog, resetState } from 'src/features/Property/propertySlice';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 180,
    // renderCell: (params) => <a href={`/property/${params.row.id}`}>{params.value}</a>,
  },

  {
    field: 'created',
    headerName: 'Date',
    // type: 'number',
    width: 170,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
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

// import { posts } from 'src/_mock/blog';

// import Iconify from 'src/components/iconify';

// import PostCard from '../post-card';
// import PostSort from '../post-sort';
// import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function BlogView() {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.property);

  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.token;

  const blogs = blogState?.blogs?.blog || [];

  const rows = blogs?.map((property, index) => {
    // Create loan data for each item
    const propsData = {
      id: property?._id || 0,
      title: property.title,

      created: moment(property?.createdAt).format('L'),
      status: property?.body,
    };
    // You can also add the index if needed
    propsData.index = index;

    return propsData;
  });

  // const blogs = [...(blogState?.blogs?.blog || [])].sort((a, b) => {
  //   // Assuming createdAt is a timestamp or a string in a format that can be compared
  //   const dateA = new Date(a.createdAt).getTime();
  //   const dateB = new Date(b.createdAt).getTime();

  //   // Sort in descending order (latest first)
  //   return dateB - dateA;
  // });

  // const [filterName, setFilterName] = useState('');

  useEffect(() => {
    dispatch(resetState());
    dispatch(allBlog(token));
  }, [dispatch, token]);
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Agents</Typography>
      </Stack>

      {/* <Card> */}
      <div
        style={{
          minHeight: 200,
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow:
            '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
          width: '56%',
        }}
      >
        {/* <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Properies</h2> */}
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
      {/* </Card> */}
    </Container>
  );
}
