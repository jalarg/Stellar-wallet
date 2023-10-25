import { login } from "../../globalRedux/store";
import { Keypair } from "stellar-sdk";
import { message } from "antd";
import { ILogin } from "../../types/types";

async function handleLogin({
  publicKey,
  secretKey,
  dispatch,
  auth,
}: ILogin) {
  try {
    if (auth.isAuthenticated) {
      message.error("You are already logged in!");
      dispatch({
        type: "AUTH_ERROR",
        payload: {
          error: "You are already logged in!",
        },
      });
      message.error("You are already logged in!");
      return;
    }
    if (!publicKey) {
      publicKey = Keypair.fromSecret(secretKey).publicKey();
      dispatch(login({ publicKey, secretKey }));
      message.success("Login successful!");
      return;
    }
    dispatch(login({ publicKey, secretKey }));
    message.success("Login successful!");
  } catch (error) {
    console.log("Error:", error);
  }
}
export default handleLogin;
