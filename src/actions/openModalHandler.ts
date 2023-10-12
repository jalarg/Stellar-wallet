import { IOpenModal } from "../types/types";

function openModalHandler({ modalName, openModal }: IOpenModal) {
  openModal(modalName);
}

export default openModalHandler;
