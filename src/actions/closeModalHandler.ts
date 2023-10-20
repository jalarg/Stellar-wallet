import { ICloseModal } from "../types/types";

function closeModalHandler({ onClose, handleCheck }: ICloseModal) {
  onClose();
  if (handleCheck) {
    handleCheck();
  }
}

export default closeModalHandler;
