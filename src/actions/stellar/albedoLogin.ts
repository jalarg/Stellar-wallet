import albedo from "@albedo-link/intent";
import { useDispatch } from "react-redux";
import { login } from "../../globalRedux/store";

function albedoLogin(dispatch = useDispatch()) {
  albedo
    .publicKey({})
    .then((albedoPublicKey) => {
      dispatch(
        login({
          walletType: "albedo",
          walletCredentials: {
            publicKey: albedoPublicKey.pubkey,
            secretKey: "",
          },
        })
      );
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

export default albedoLogin;
