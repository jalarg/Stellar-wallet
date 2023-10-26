import { addMinimumBalance } from "../stellar";
import { IAddMiniumBalanceHandler } from "../../types/types";
import { message } from "antd";
import WalletSwitcher from "../../actions/wallets/walletSwitcher";

async function handleMinimumBalance({
  publicKey,
  setBalance,
  setIsLoading,
}: IAddMiniumBalanceHandler) {
  if (publicKey) {
    setIsLoading(true);
    await addMinimumBalance(publicKey);
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey,
      secretKey: "",
    });
    const balance = await wallet.checkBalance();
    setBalance(balance[0].balance);
    setIsLoading(false);
    message.success("Account created successfully");
  }
}

export default handleMinimumBalance;
