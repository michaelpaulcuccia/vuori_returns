import React from "react";

interface CustomInputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full 
        border 
        border-[#e0e0e0] 
        h-[40px] 
        rounded-[2px] 
        px-3 
        text-sm 
        placeholder-[#9e9e9e]
      "
    />
  );
};

export default CustomInput;
