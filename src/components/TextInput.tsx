import { useId } from "react";

interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
}

export default function TextInput({
  label,
  labelClassName = "",
  labelStyle,
  className = "",
  ...rest
}: TextInputProps) {
  const id = useId();
  return (
    <div className="grid gap-4">
      <label
        className={`text-black text-xs sm:text-sm md:text-base ${labelClassName}`}
        style={labelStyle}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...rest}
        className={`text-black placeholder:font-light bg-[#F7F7F7] px-3 py-2 md:px-4 md:py-3 outline-none hover:ring-gray-200 hover:ring-2 focus:ring-gray-200 focus:ring-2 text-xs sm:text-sm lg:text-base ${className}`}
        id={id}
      />
    </div>
  );
}
