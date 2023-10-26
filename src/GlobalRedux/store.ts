"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { login, logout, setType } from "./features/authSlice";

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
export { login, logout, setType, authReducer };
