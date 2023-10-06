import Button from "../components/commons/Button";
import { ISetKeyPair } from "../types/types";
import registerHandler from "../actions/registerHandler";

interface IRegister extends ISetKeyPair {
  setIsOpen: (isOpen: boolean) => void;
}

const Register = ({ setSecret, setPublicKey, setIsOpen }: IRegister) => {
  return (
    <div className="flex justify-center m-5">
      <Button
        buttonClass="button-register"
        secondary
        fullWidth
        onClick={() => {
          registerHandler({ setSecret, setPublicKey });
          setIsOpen(true);
        }}
      >
        Generate key pair for a new account
      </Button>
    </div>
  );
};

export default Register;
