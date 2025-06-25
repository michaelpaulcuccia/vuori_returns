import React from "react";

interface LinkTextProps {
  text: string;
  onClick?: () => void;
}

const LinkText: React.FC<LinkTextProps> = ({ text, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="text-[13px] leading-[19px] text-[#868686] underline cursor-pointer"
    >
      {text}
    </span>
  );
};

export default LinkText;
