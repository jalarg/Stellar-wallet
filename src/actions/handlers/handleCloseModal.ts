import { ICloseModal } from "../../types/types";

async function handleCloseModal({
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

export default handleCloseModal;
