import "jest";
import { login, logout, authReducer } from "../../src/GlobalRedux/store";
import { IAuthState } from "../../src/types/types";
import { expect } from "@jest/globals";

const secretKey = "SBKQYX26DP6GLTVKX6SADEUO3W3WC7GUQGXDINGM2VIHGHNW5KMB5SB6";

describe("Authentication Redux Store", () => {
  it("Should handle login action adding login credentials to store", () => {
    const initialState: IAuthState = {
      isAuthenticated: false,
      walletCredential: null,
    };

    const {isAuthenticated, walletCredential} = authReducer(initialState, login(secretKey));
    expect(isAuthenticated).toBe(true);
    expect(walletCredential).toBe(secretKey);
  });

  it("Should handle logout action removing credentials from store", () => {
    const initialState: IAuthState = {
      isAuthenticated: false,
      walletCredential: null,
    };

    const {isAuthenticated, walletCredential} = authReducer(initialState, logout());
    expect(isAuthenticated).toBe(false);
    expect(walletCredential).toBe(null);
  });
});
