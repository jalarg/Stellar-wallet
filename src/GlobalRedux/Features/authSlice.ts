"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

const initialState: IAuthState = {
  isAuthenticated: false,
  walletType: "",
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
      state.walletType = action.payload.walletType;
      state.walletCredentials = action.payload.walletCredentials;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.walletType = "";
      state.walletCredentials = {
        publicKey: "",
        secretKey: "",
      };
    },
    setType: (state, action) => {
      state.walletType = action.payload;
    },
  },
});

export const { login, logout, setType } = authSlice.actions;
export const authReducer = authSlice.reducer;
