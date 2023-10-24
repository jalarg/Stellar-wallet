"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Features/authSlice";
import { login, logout, setIsAlbedo } from "./Features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

interface CypressWithStore extends Cypress.Cypress {
  store?: typeof store;
}

declare global {
  interface Window {
    Cypress?: CypressWithStore;
  }
}

if (typeof window !== "undefined" && window.Cypress) {
  window.Cypress.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { login, logout, setIsAlbedo, authReducer };
