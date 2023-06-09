import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import {
  RegisterCredentials,
  LoginCredentials,
  UserInitState,
} from "../models/User";
import { FirebaseError } from "firebase/app";

export const register = createAsyncThunk<void, RegisterCredentials>(
  "user/register",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: username });
    } catch (err) {
      if ((err as FirebaseError).code === "auth/email-already-in-use") {
        return rejectWithValue(
          "Email is already in use. Please use a different email."
        );
      } else {
        return rejectWithValue(
          "An error occurred during registration. Please try again later."
        );
      }
    }
  }
);

export const login = createAsyncThunk<void, LoginCredentials>(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return;
    } catch (err) {
      if ((err as FirebaseError).code === "auth/wrong-password") {
        return rejectWithValue("Wrong password.");
      } else if ((err as FirebaseError).code === "auth/user-not-found") {
        return rejectWithValue("User not found.");
      } else {
        return rejectWithValue(
          "An error occurred during login. Please try again later."
        );
      }
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (err) {
      return rejectWithValue("Logout unsuccessful");
    }
  }
);

const initialState: UserInitState = {
  currentUserUid: undefined,
  errorMessage: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUserUid: (state, { payload }: PayloadAction<string>) => {
      state.currentUserUid = payload;
    },
    cleanErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.currentUserUid = undefined;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.errorMessage = payload as string;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.errorMessage = payload as string;
    });
  },
});

export const { setCurrentUserUid, cleanErrorMessage } = userSlice.actions;
export default userSlice.reducer;
