export interface IWalletComponent {
  setIsLoading: (isLoading: boolean) => void;
  setBalance: (balance: string) => void;
  setPayments: (payments: any) => void;
  publicKey: string;
  secretKey: string;
  balance: string;
  payments: any;
  walletType: "privateKey" | "albedo" | "freighter";
}

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

export interface IAddMiniumBalanceHandler {
  publicKey: string;
  setBalance: (balance: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export interface ISendTransactionHandler {
  privateKey: string;
  publicKey: string;
  amount: string;
  destinationId: string;
  onClose: () => void;
  setBalance: (balance: string) => void;
  setIsLoading: (loading: boolean) => void;
  setPayments: (payments: any) => void;
  walletType: "privateKey" | "albedo" | "freighter";
}

export interface IMinimumBalanceResponse {
  status: number;
  detail: string;
  error: string;
}

export interface IAuth {
  auth: IAuthState;
}

export interface IAuthState {
  isAuthenticated: boolean;
  walletCredentials: {
    publicKey: string;
    secretKey: string;
  };
  walletType: "privateKey" | "albedo" | "freighter";
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
  setPayments: (payments: any) => void;
  walletType: "privateKey" | "albedo" | "freighter";
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

export interface IAlbedoModal {
  isOpen?: boolean;
  onClose: () => void;
  label: string;
  openModal: (modalName: string) => void;
  content: {
    title: string;
    subtitle: string;
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
  setPayments: (payments: any) => void;
  walletType: "privateKey" | "albedo" | "freighter";
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

export interface IHandleWalletInformationProps {
  setIsLoading: (isLoading: boolean) => void;
  setBalance: (balance: string) => void;
  setPayments: (payments: any) => void;
  publicKey: string;
  walletType: "privateKey" | "albedo" | "freighter";
}

export interface IPaymentsTable {
  key: React.Key;
  sender: string;
  receiver: string;
  asset: string;
  amount: string;
}

export interface IPayments {
  payments: IPaymentsTable[];
}

export interface IWalletSwitcher {
  walletType: "privateKey" | "albedo" | "freighter" | "";
  publicKey: string;
  secretKey: string;
}
