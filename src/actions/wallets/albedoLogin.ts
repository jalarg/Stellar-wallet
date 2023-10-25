import albedo from "@albedo-link/intent";
import { useDispatch } from "react-redux";
import { login, setIsAlbedo } from "../../globalRedux/store";

function albedoLogin(dispatch = useDispatch()) {
  albedo
    .publicKey({})
    .then((albedoPublicKey) => {
      dispatch(login({ publicKey: albedoPublicKey.pubkey, secretKey: "" }));
      dispatch(setIsAlbedo(true));
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

export default albedoLogin;
