import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  // serializableCheck: false,
});

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import { authApi } from '../features/auth/authService';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [authApi.reducerPath]: authApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware),
// });

export default store;
