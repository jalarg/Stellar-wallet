export interface InputProps {
  label: string;
  type?: string;
  value?: string | null;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
}

export interface ButtonProps {
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
  setSecret: (secret: string | null) => void;
  setPublicKey: (publicKey: string | null) => void;
}

export interface Ikeypair {
  publicKey: string;
  privateKey: string;
}

export interface IPair {
  publicKey: () => string | null;
  privateKey: () => string | null;
}

interface IBalance {
  asset_type: string;
  balance: string;
}

interface ISendTransaction {
  publicKey: string;
  privateKey: string;
  destinationId: string;
  amount: string;
}

interface IMinimumBalanceResponse {
  status: number;
  detail: string;
  error: string;
}
