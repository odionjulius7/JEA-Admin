import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { logout } from 'src/features/auth/authSlice';

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const userData = useSelector((state) => state.auth.user);
  const expiryDate = userData?.expiryDate;
  console.log(expiryDate);

  const token = userData?.token;

  const isUserAuthenticated = () => {
    let isAuthenticated = false; // Default to false
    if (token !== null && token !== undefined && token !== '') {
      isAuthenticated = true;
    }

    return isAuthenticated;
  };

  const isAuthenticated = isUserAuthenticated();

  // Check if the expiry date/time has passed
  if (isAuthenticated && expiryDate < Date.now()) {
    dispatch(logout()); // Log out the user
    localStorage.clear(); // Clear local storage
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node, // Define the children prop type
};

export default ProtectedRoute;
