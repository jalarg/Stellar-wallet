export interface IInput {
  label: string;
  type?: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  buttonClass?: string;
}

export interface IRegisterButton {
  openModal: (modalName: string) => void;
  modalName: string;
}

export interface ISetKeyPair {
  setSecretKey: (secret: string | null) => void;
  setPublicKey: (publicKey: string | null) => void;
  openModal?: (modalName: string) => void;
}

export interface IKeypair {
  publicKey: string;
  privateKey: string;
}

export interface IModal {
  activeModal: string;
  isOpen: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  setPublicKey: (publicKey: string | null) => void;
  setSecretKey: (secretKey: string | null) => void;
  secretKey: string;
  publicKey: string;
}

export interface IModalWallet {
  activeModal: string;
  isOpen: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  secretKey: string;
  publicKey: string;
}

// ACA ESTO TOCANDO:

export interface IRegistrationModalStepOne {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  setPublicKey: (publicKey: string | null) => void;
  setSecretKey: (secretKey: string | null) => void;
  content: {
    title: string;
    subtitle: string;
    list: string[];
    button: string;
  };
}

export interface IRegistrationModalStepTwo {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  publicKey: string | null;
  secretKey: string | null;
  content: {
    title: string;
    subtitle: string;
    list: string[];
    checkbox: string;
    button: string;
  };
}

export interface ILoginModalStepOne {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  content: {
    title: string;
    subtitle: string;
    list: string[];
    checkbox: string;
    button: string;
  };
}

export interface ILoginModalStepTwo {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  setSecretKey: (secretKey: string | null) => void;
  content: {
    title: string;
    subtitle: string;
    question: string;
    list: string[];
    button: string;
  };
}

export interface ISendTransaction {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  secretKey: string;
  publicKey: string;
  content: {
    title: string;
    button: string;
  };
}

export interface IReceiveTransaction {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  publicKey: string;
  content: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export interface ICloseModal {
  onClose: () => void;
  handleCheck?: () => void;
}

export interface IOpenModal {
  modalName: string;
  openModal: (modalName: string) => void;
}

interface IRegister {
  modalName: string;
  openModal: (modalName: string) => void;
}
