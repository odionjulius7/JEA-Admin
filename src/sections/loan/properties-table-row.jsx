import { useState } from 'react';
import PropTypes from 'prop-types';

// import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';

import { Link, useNavigate } from 'react-router-dom';

import Iconify from 'src/components/iconify';

import moment from 'moment';

// ----------------------------------------------------------------------

export default function PropertiesTableRow({
  selected,
  title,
  location,
  amount,
  status,
  date,
  Id,
  key,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  console.log(Id);

  return (
    <>
      <TableRow
        key={key}
        hover
        tabIndex={-1}
        role="checkbox"
        selected={selected}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate(`/property/${Id}`);
        }}
      >
        <TableCell align="center">
          <Link to={`/property/${Id}`}>{title}</Link>
        </TableCell>
        {/* <TableCell align="center">{title}</TableCell> */}

        <TableCell align="center">{location}</TableCell>

        <TableCell align="center">{amount}</TableCell>
        <TableCell align="center">{moment(date).format('L')}</TableCell>

        <TableCell align="center">
          <Label
            color={
              (status === 'available' && 'success') ||
              (status === 'sold' && 'warning') ||
              (status === 'inactive' && 'warning') ||
              'success'
            }
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
        //
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

PropertiesTableRow.propTypes = {
  // avatarUrl: PropTypes.any,
  // handleClick: PropTypes.func,
  title: PropTypes.any,
  location: PropTypes.any,
  amount: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  date: PropTypes.any,
  Id: PropTypes.any,
  key: PropTypes.any,
};
