import { IInput } from "../../types/types";
import copy from "../../assets/copy-icon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

const Input: React.FC<IInput> = ({
  label,
  value,
  placeholder,
  required,
  disabled,
  readOnly,
  onChange,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center m-auto gap-2 w-[90%]">
        <label className="text-xs text-gray-800 font-bold pt-2">{label}</label>
        <div className="flex">
          <input
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            value={value || ""}
            readOnly={readOnly}
            required={required}
            className={`border border-gray-600
            rounded-md px-3 py-2 font-semibold w-full text-gray-800 focus:ring-2 
            focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 
            ${
              label === "Secret key"
                ? "input-private-key"
                : label === "Public key"
                ? "input-public-key"
                : ""
            }
            `}
          />
          <CopyToClipboard
            text={value || ""}
            onCopy={() => alert("Text copied to the clipboard")}
          >
            <Image
              src={copy}
              alt="copy"
              className="m-3 w-4 h-4 cursor-pointer"
            />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Input;
