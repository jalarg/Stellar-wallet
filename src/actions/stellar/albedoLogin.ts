import albedo from "@albedo-link/intent";
import { useDispatch } from "react-redux";
import { login } from "../../GlobalRedux/store";

function albedoLogin(dispatch = useDispatch()) {
  albedo
    .publicKey({})
    .then((albedoPublicKey) => {
      dispatch(login({ publicKey: albedoPublicKey.pubkey, secretKey: "" }));
    })    
    .catch((err) => {
      throw new Error(err.message);
    });
}

export default albedoLogin;
