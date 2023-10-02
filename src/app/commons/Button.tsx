import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
  }) => {
    let buttonClasses = `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`;
  
    if (disabled) {
      buttonClasses += " opacity-50 cursor-default";
    }
  
    if (fullWidth) {
      buttonClasses += " w-full";
    }
  
    if (secondary) {
      buttonClasses +=
        " bg-green-500 hover:bg-green-600 focus-visible:outline-rose-600 text-white";
    } else {
      buttonClasses += " text-white";
    }
  
    if (danger) {
      buttonClasses +=
        " bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600";
    } else {
      buttonClasses +=
        " bg-blue-400 hover:bg-blue-500 focus-visible:outline-blue-500";
    }
  
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={buttonClasses}
      >
        {children}
      </button>
    );
  };
  
  export default Button;