import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: "movie",
  initialState: { title: "", descripion: "" },
  reducers: {
    getMovies: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { getMovies } = movieSlice.actions
export default movieSlice.reducer;
