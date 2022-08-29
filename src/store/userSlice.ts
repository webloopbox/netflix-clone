import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { RegisterCredentials, LoginCredentials, UserInitState, UserData } from '../models/User';

export const register = createAsyncThunk<any, RegisterCredentials>('user/register', async ({ email, password }, { rejectWithValue }) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)  // and also log you in
    } catch (e: any) {
        console.log(e.message);
    }
})

export const login = createAsyncThunk<any, LoginCredentials>('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)  // and also log you in
    } catch (e: any) {
        return rejectWithValue('No user found');
    }

})

export const logout = createAsyncThunk('user/logout', async (payload, { rejectWithValue }) => {
    await signOut(auth)
})

const initialState: UserInitState = {
    currentUserUid: '',
    userData: {
        email: ''
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUserUid: (state, { payload }: PayloadAction<string>) => {
            state.currentUserUid = payload
        },
        setUserData: (state, { payload }: PayloadAction<string>) => {
            state.userData.email = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            state.currentUserUid = ''
        })
    }
});

export const { setCurrentUserUid, setUserData } = userSlice.actions
export default userSlice.reducer;
