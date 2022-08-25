import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>