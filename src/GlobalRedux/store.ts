"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Features/authSlice";
import { login, logout } from "./Features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { login, logout, authReducer };
