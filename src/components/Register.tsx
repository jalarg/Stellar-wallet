import Button from "../components/commons/Button";
import { IRegisterButton } from "../types/types";
import openModalHandler from "../actions/openModalHandler";

const Register = ({ modalName, openModal }: IRegisterButton) => {
  return (
    <div className="flex justify-center m-5">
      <Button
        buttonClass="button-register"
        secondary
        fullWidth
        onClick={() => {
          openModalHandler({modalName, openModal});
        }}
      >
        Generate key pair for a new account
      </Button>
    </div>
  );
};

export default Register;
