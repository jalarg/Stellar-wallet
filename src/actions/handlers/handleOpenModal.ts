import { IOpenModal } from "../../types/types";

function handleOpenModal({ modalName, openModal }: IOpenModal) {
  openModal(modalName);
}

export default handleOpenModal;
