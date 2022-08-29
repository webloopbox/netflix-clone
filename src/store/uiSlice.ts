import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIFeaturesType = {
  topMoviesReady: boolean
}

const initialState: UIFeaturesType = {
  topMoviesReady: false
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTopMovieReady: (state, { payload }: PayloadAction<boolean>) => {
      state.topMoviesReady = payload;
    }
  }
});

export const { setTopMovieReady } = slice.actions;

export default slice.reducer;
