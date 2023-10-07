import Button from "../components/commons/Button";
import { ISetKeyPair } from "../types/types";
import registerHandler from "../actions/registerHandler";

interface IRegister extends ISetKeyPair {
  openModalFn: (isOpen: string) => void;
}


const Register = ({ setSecretKey, setPublicKey, openModalFn }: IRegister) => {
  return (
    <div className="flex justify-center m-5">
      <Button
        buttonClass="button-register"
        secondary
        fullWidth
        onClick={() => {
          registerHandler({ setSecretKey, setPublicKey });
          openModalFn("generateKeyPair")
        }}
      >
        Generate key pair for a new account
      </Button>
    </div>
  );
};

export default Register;
