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

export interface ISetKeyPair {
  setSecretKey: (secret: string | null) => void;
  setPublicKey: (publicKey: string | null) => void;
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
    list: string[];
    checkbox?: string;
    button: string;
  };
  label: string;
  openModalFn: (isActive: string) => void;
  publicKey?: string | null;
  secretKey?: string | null;
  setPublicKey: (publicKey: string | null) => void;
  setSecretKey: (secretKey: string | null) => void;
  registerHandler?: () => void;
}
