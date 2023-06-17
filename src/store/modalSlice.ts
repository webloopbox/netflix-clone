import { createSlice } from '@reduxjs/toolkit';
import { IModalsState } from '../models/Modals';

const initialState: IModalsState = {
    movieDetailsModal: {
        visible: false,
        title: '',
        overview: '',
        poster: '',
        backdrop: ''
    },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setMovieDetailsModalStatus: (state, { payload }) => {
            state.movieDetailsModal.visible = payload.visible;
            state.movieDetailsModal.title = payload.title;
            state.movieDetailsModal.overview = payload.overview;
            state.movieDetailsModal.poster = payload.poster;
            state.movieDetailsModal.backdrop = payload.backdrop;
        },
    },
});

export const {
    setMovieDetailsModalStatus,
} = modalSlice.actions;

export default modalSlice.reducer;
