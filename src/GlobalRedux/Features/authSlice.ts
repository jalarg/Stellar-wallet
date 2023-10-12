"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

const initialState: IAuthState = {
  isAuthenticated: false,
  walletCredential: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.walletCredential = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.walletCredential = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer; 
