import Button from "../components/commons/Button";
import { IRegister } from "../types/types";
import { handleOpenModal } from "../actions/handlers";

const Register: React.FC<IRegister> = ({ modalName, openModal }) => {
  return (
    <div className="flex justify-center m-5">
      <Button
        buttonClass="button-register"
        secondary
        fullWidth
        onClick={() => {
          handleOpenModal({ modalName, openModal });
        }}
      >
        Generate key pair for a new account
      </Button>
    </div>
  );
};

export default Register;
