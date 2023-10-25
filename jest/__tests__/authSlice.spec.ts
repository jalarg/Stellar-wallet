import "jest";
import { login, logout, authReducer } from "../../src/globalRedux/store";
import { IAuthState } from "../../src/types/types";
import { expect } from "@jest/globals";

const publicKey = "GC2FBHS3IQ3AMYUAZOWU7YYSTBSCHCYCHVEXZWODAQQVU5JNPONCMJRN";
const secretKey = "SBKQYX26DP6GLTVKX6SADEUO3W3WC7GUQGXDINGM2VIHGHNW5KMB5SB6";

describe("Authentication Redux Store", () => {
  it("Should handle login action adding login credentials to store", () => {
    const initialState: IAuthState = {
      isAuthenticated: false,
      isAlbedo: false,
      walletCredentials: {
        publicKey: "",
        secretKey: "",
      },
    };

    const { isAuthenticated, walletCredentials } = authReducer(
      initialState,
      login({ secretKey, publicKey })
    );

    const { secretKey: secretKeyFromStore, publicKey: publicKeyFromStore } =
      walletCredentials;

    expect(isAuthenticated).toBe(true);
    expect({
      secretKey: secretKeyFromStore,
      publicKey: publicKeyFromStore,
    }).toEqual({
      publicKey: publicKey,
      secretKey: secretKey,
    });
  });

  it("Should handle logout action removing credentials from store", () => {
    const initialState: IAuthState = {
      isAuthenticated: false,
      isAlbedo: false,
      walletCredentials: {
        publicKey: "",
        secretKey: "",
      },
    };

    const { isAuthenticated, walletCredentials } = authReducer(
      initialState,
      logout()
    );
    const { secretKey: secretKeyFromStore, publicKey: publicKeyFromStore } =
      walletCredentials;

    expect(isAuthenticated).toBe(false);
    expect({
      secretKey: secretKeyFromStore,
      publicKey: publicKeyFromStore,
    }).toEqual({
      publicKey: "",
      secretKey: "",
    });
  });
});
