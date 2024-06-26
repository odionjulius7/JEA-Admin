import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import CircularProgress from '@mui/material/CircularProgress';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/features/auth/authSlice';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  email: yup.string().email('Email should be valid').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

export default function LoginView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);

  // console.log(authState);

  const { user, isLoading } = authState.auth;
  const token = user?.token;
  console.log(user);
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    // initial form state
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema, // to validate the yup setup schema
    onSubmit: (values) => {
      // pass the value of the data got from formik to the login action
      dispatch(login(values));
      // if (!user?.status) {
      //   toast.error(user?.message);
      // }
    },
  });

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          // name="email"
          label="Email address"
        />
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.email && formik.errors.email}
        </div>

        <TextField
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.password && formik.errors.password}
        </div>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        {/* <Link href="/forgot" variant="subtitle2" underline="hover">
          Forgot password?
        </Link> */}
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={formik.handleSubmit}
        // onSubmit={formik.handleSubmit}
      >
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          'Login'
        )}
      </LoadingButton>
      <div
        style={{
          color: 'orangered',
        }}
      >
        <span>{user?.message}</span>
      </div>
    </>
  );

  //
  useEffect(() => {
    if (token) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [token, router]);
  //

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography
            sx={{
              margin: '0 0 2rem 0',
              textAlign: 'center',
            }}
            variant="h4"
          >
            JEA
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
