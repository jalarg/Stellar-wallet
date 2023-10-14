import { ICloseModal } from "../types/types";

function closeModalHandler({ onClose, handleCancelChecked }: ICloseModal) {
  onClose();
  if (handleCancelChecked) {
    handleCancelChecked();
  }
}

export default closeModalHandler;
