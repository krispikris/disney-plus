import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import logger from 'redux-logger';
import movieReducer from '../features/movie/movieSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
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
