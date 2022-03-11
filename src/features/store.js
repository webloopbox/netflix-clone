import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieCards';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
