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
  }