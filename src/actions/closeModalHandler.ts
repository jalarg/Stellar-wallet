import { ICloseModal } from "../types/types";

function closeModalHandler({ onClose, handleCancelChecked }: ICloseModal) {
  onClose();
  handleCancelChecked();
}

export default closeModalHandler;
