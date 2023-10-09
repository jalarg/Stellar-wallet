export interface IInput {
  label: string;
  type?: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
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
  isOpen?: boolean;
  onClose: () => void;
  content: {
    title: string;
    subtitle: string;
    question?: string;
    list: string[];
    checkbox?: string;
    button: string;
  };
  label: string;
  openModal: (isActive: string) => void;
  publicKey?: string | null;
  secretKey?: string | null;
  setPublicKey: (publicKey: string | null) => void;
  setSecretKey: (secretKey: string | null) => void;
  registerHandler?: () => void;
  setActiveModal?: (modalName: string) => void;
}

export interface ICloseModal {
  onClose: () => void
  handleCancelChecked: () => void
}

export interface IOpenModal {
  modalName: string
  openModal: (modalName: string) => void
}




