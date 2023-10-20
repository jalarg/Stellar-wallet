"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

const initialState: IAuthState = {
  isAuthenticated: false,
  walletCredentials: {
    publicKey: "",
    secretKey: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.walletCredentials = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.walletCredentials = {
        publicKey: "",
        secretKey: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
