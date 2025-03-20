import { IButton } from "../../types/types";
import { Spiral } from "./";

const Button: React.FC<IButton> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  isLoading,
  className = "",
}) => {
  const buttonClasses = `
    flex justify-center rounded-md px-3 py-2 text-sm font-semibold 
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    ${disabled ? " opacity-50 cursor-default" : ""}
    ${fullWidth ? " w-full" : ""}
    ${
      secondary
        ? " bg-green-500 hover:bg-green-600 focus-visible:outline-green-600 text-white"
        : " text-white"
    }
    ${
      danger
        ? " bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"
        : " bg-blue-400 hover:bg-blue-500 focus-visible:outline-blue-500"
    }
    ${isLoading ? " cursor-wait text-transparent" : ""}
    ${className}
  `;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`relative ${buttonClasses}`}
    >
      {children}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spiral size="small" />
        </div>
      )}
    </button>
  );
};

export default Button;
