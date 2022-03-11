import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: "movie",
  initialState: { value: { title: "", descripion: "" } },
  reducers: {
    getMovies: (state, action) => {
      state.value = action.payload;
    }
  }
});

export default movieSlice.reducer;
