import Button from "../components/commons/Button";
import { ISetKeyPair } from "../types/types";
import registerHandler from "../actions/registerHandler";

const Register = ({ setSecret, setPublicKey }: ISetKeyPair) => {
  return (
    <div className="flex justify-center m-5">
      <Button
        secondary
        fullWidth
        onClick={() => registerHandler({ setSecret, setPublicKey })}
      >
        Generate key pair for a new account
      </Button>
    </div>
  );
};

export default Register;
