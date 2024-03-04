import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import loanReducer from '../features/Loan/loanSlice';
import usersReducer from '../features/Users/usersSlice';
import propertReducer from '../features/Property/propertySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    loan: loanReducer,
    property: propertReducer,
  },
});
