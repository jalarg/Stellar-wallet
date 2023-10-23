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
  isLoading?: boolean;
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

export interface IPair {
  publicKey: () => string | null;
  privateKey: () => string | null;
}

export interface IBalance {
  asset_type: string;
  balance: string;
}

export interface IMiniumBalanceHandler {
  publicKey: string;
  setBalance: (balance: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export interface ISendTransactionHandler {
  privateKey: string;
  publicKey: string;
  amount: string;
  destinationId: string;
  onClose?: () => void;
  setBalance?: (balance: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export interface IMinimumBalanceResponse {
  status: number;
  detail: string;
  error: string;
}

interface IAuth {
  auth: IAuthState;
}

export interface IAuthState {
  isAuthenticated: boolean;
  walletCredentials: {
    publicKey: string;
    secretKey: string;
  };
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
  dispatch: (action: any) => void;
  auth: IAuthState;
}

export interface IModalWallet {
  activeModal: string;
  isOpen: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  secretKey: string;
  publicKey: string;
  setBalance: (balance: string) => void;
}

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
  dispatch: (action: any) => void;
  auth: IAuthState;
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
  dispatch: (action: any) => void;
  auth: IAuthState;
}

export interface ISendTransactionFunction {
  publicKey: string;
  privateKey: string;
  destinationId: string;
  amount: string;
}

export interface ISendTransactionModal {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  secretKey: string;
  publicKey: string;
  content: {
    title: string;
    button: string;
  };
  setBalance: (balance: string) => void;
}

export interface IReceiveTransactionModal {
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
  handleCheck?: (
    isChecked: boolean,
    setIsChecked: (isChecked: boolean) => void
  ) => void;
  isChecked?: boolean;
  setIsChecked?: (isChecked: boolean) => void;
}

export interface IOpenModal {
  modalName: string;
  openModal: (modalName: string) => void;
}

export interface IRegister {
  modalName: string;
  openModal: (modalName: string) => void;
}

export interface ILogin {
  publicKey?: string;
  secretKey: string;
  dispatch: (action: any) => void;
  auth: IAuthState;
}
