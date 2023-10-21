import { ICloseModal } from "../../types/types";

function closeModalHandler({
  onClose,
  handleCheck,
  isChecked,
  setIsChecked,
}: ICloseModal) {
  onClose();
  if (handleCheck && isChecked && setIsChecked) {
    handleCheck(isChecked, setIsChecked);
  }
}

export default closeModalHandler;
