import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state:AuthState) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state:AuthState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    loginFailure(state:AuthState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.token = null;
      localStorage.removeItem("token");
    },
    logout(state:AuthState) {
      state.token = null;
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
