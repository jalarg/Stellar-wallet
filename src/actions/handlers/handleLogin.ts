import { Keypair } from "stellar-sdk";
import { message } from "antd";
import { ILogin } from "../../types/types";
import WalletSwitcher from "../wallets/walletSwitcher";

async function handleLogin({ publicKey, secretKey, dispatch, auth }: ILogin) {
  try {
    if (auth.isAuthenticated) {
      message.error("You are already logged in!");
      return;
    }
    if (!secretKey) {
      message.error("You must provide a secret key!");
      return;
    }
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: (publicKey) ? publicKey : Keypair.fromSecret(secretKey).publicKey(),
      secretKey,
    });
    await wallet.login({ dispatch, secretKey });
    message.success("Login successful!");
  } catch (error) {
    console.log("Error:", error);
  }
}
export default handleLogin;
