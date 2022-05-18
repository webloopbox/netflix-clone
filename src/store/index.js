import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
