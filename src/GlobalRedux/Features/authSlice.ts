"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

const initialState: IAuthState = {
  isAuthenticated: false,
  isAlbedo: false,
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
      state.isAlbedo = false;
      state.walletCredentials = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAlbedo = false;
      state.walletCredentials = {
        publicKey: "",
        secretKey: "",
      };
    },
    setIsAlbedo: (state, action) => {
      state.isAlbedo = action.payload;
    },
  },
});

export const { login, logout, setIsAlbedo } = authSlice.actions;
export const authReducer = authSlice.reducer;
