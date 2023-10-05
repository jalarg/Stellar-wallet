export interface InputProps {
  label: string;
  type?: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  cypressId?: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  cypressId?: string;
}

export interface ISetKeyPair {
  setSecret: (secret: string | null) => void;
  setPublicKey: (publicKey: string | null) => void;
}

export interface Ikeypair {
  publicKey: string;
  privateKey: string;
}
