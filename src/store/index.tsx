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
export const useAppDispatch: () => AppDispatch = useDispatch() // Export a hook that can be reused to resolve types


export type RootState = ReturnType<typeof store.getState>