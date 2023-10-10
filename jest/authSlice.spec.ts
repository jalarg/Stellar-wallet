import "jest";
import { login, logout, authReducer } from "../src/GlobalRedux/store";
import { AuthState } from "../src/types/types";
import { expect } from "@jest/globals";

const wallet = "SBKQYX26DP6GLTVKX6SADEUO3W3WC7GUQGXDINGM2VIHGHNW5KMB5SB6";

describe("Authentication Redux Store", () => {
  it("should handle login action adding login credentials to store", () => {
    // Configurar el estado inicial
    const initialState: AuthState = {
      isAuthenticated: false,
      walletCredential: null,
    };

    const newState = authReducer(initialState, login(wallet));
    expect(newState.isAuthenticated).toBe(true);
    expect(newState.walletCredential).toBe(wallet);
  });

  it("should handle logout action removing credentials from store", () => {
    // Configurar el estado inicial
    const initialState: AuthState = {
      isAuthenticated: false,
      walletCredential: null,
    };

    const newState = authReducer(initialState, logout());
    expect(newState.isAuthenticated).toBe(false);
    expect(newState.walletCredential).toBe(null);
  });
});
