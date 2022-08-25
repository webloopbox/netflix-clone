import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: "movie",
  initialState: { title: "", descripion: "" },
  reducers: {
    getMovies: (state, { payload } : PayloadAction<string>) => {
      state.title = payload;
    }
  }
});

export const { getMovies } = movieSlice.actions
export default movieSlice.reducer;
