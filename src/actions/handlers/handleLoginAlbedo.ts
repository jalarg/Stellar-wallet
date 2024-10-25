import { message } from "antd";
import WalletSwitcher from "../wallets/walletSwitcher";

interface IHandlerAlbedo {
  dispatch: (action: any) => void;
}

export default handleLoginAlbedo;

async function handleLoginAlbedo({ dispatch }: IHandlerAlbedo) {
  const wallet = WalletSwitcher.createWallet({
    walletType: "albedo",
    publicKey: "",
    secretKey: "",
  });

  try {
    await wallet.login({ dispatch } as any);
    message.success("Login successful!");
  } catch (err: any) {
    message.error("Login failed!");
  }
}
