import albedo from "@albedo-link/intent";
import { useDispatch } from "react-redux";
import { login } from "../../GlobalRedux/store";

function useAlbedoLogin() {
  const dispatch = useDispatch();

  const handleLogin = () => {
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
  };

  return handleLogin;
}

export default useAlbedoLogin;
