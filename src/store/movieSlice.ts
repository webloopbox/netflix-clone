import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: "movie",
  initialState: { title: "", descripion: "" },
  reducers: {
    getMovies: (state, { payload }) => {
      state.title = payload;
    }
  }
});

export const { getMovies } = movieSlice.actions
export default movieSlice.reducer;
