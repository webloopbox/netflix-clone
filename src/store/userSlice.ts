import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { RegisterCredentials, LoginCredentials } from '../models/userCredentials';

export const register = createAsyncThunk<any, RegisterCredentials>('user/register', async ({ email, password }, { rejectWithValue }) => {

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)  // and also log you in
        console.log(user);
    } catch (e: any) {
        console.log(e.message);
    }

})

export const login = createAsyncThunk<any, LoginCredentials>('user/login', async ({ email, password }, { rejectWithValue }) => {

    try {
        const user = await signInWithEmailAndPassword(auth, email, password)  // and also log you in
        console.log(user);
    } catch (e: any) {
        console.log(typeof e)
        console.log(e.message);
        return rejectWithValue('No user found');
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
    }
});

export const { setCurrentUser, setUserData } = userSlice.actions
export default userSlice.reducer;
