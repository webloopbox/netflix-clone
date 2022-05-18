import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const register = createAsyncThunk('user/register', async ({ email, pass }, { rejectWithValue }) => {

    try {
        const user = await createUserWithEmailAndPassword(auth, email, pass)  // and also log you in
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }


})

export const login = createAsyncThunk('user/login', async ({ email, pass }, { rejectWithValue }) => {

    try {
        const user = await signInWithEmailAndPassword(auth, email, pass)  // and also log you in
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }

})

export const logout = createAsyncThunk('user/logout', async (payload, { rejectWithValue }) => {
    await signOut(auth)
    return 1;
})

export const userSlice = createSlice({
    name: "user",
    initialState: { currentUser: {}, x: 1, userData: {} },
    reducers: {
        setCurrentUser: (state, { payload }) => {
            state.currentUser = payload
        },
        setUserData: (state, { payload }) => {
            state.userData = payload
        },
    },
    extraReducers: {
        [register.pending]: (state) => {

        },
        [register.fulfilled]: (state) => {

        },
        [register.rejected]: (state) => {

        },

        [login.pending]: (state) => {

        },
        [login.fulfilled]: (state) => {

        },
        [login.rejected]: (state) => {

        },

        [logout.pending]: (state) => {

        },
        [logout.fulfilled]: (state, { payload }) => {
            // state.x += payload
        },
        [logout.rejected]: (state) => {

        },

    }

});

export const { setCurrentUser, setUserData } = userSlice.actions
export default userSlice.reducer;
