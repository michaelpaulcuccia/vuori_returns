"use client";
import React, { useState } from "react";
import LinkText from "./LinkText";
import CustomForm from "./CustomForm";

const ReturnBar: React.FC = () => {
  const [showHelpText, setShowHelpText] = useState(false);

  return (
    <div className="w-full lg:w-[25vw] p-4 h-screen overflow-y-auto mt-0 lg:mt-20">
      {/* <div className="h-screen overflow-y-auto p-4"> */}
      <h2 className="headline-text">Making A Return?</h2>
      <div className="mb-2"></div>
      <p className="text-[#5a5a5a] font-bold text-[14px]">
        It's easy! Just enter your order information below to get started.
      </p>
      <div className="mb-4"></div>
      <p className="text-[#5a5a5a] font-bold text-[14px]">
        Returning a gift? Email us at support@vuori.com with your order number
        and the item you want to return.
      </p>
      <div className="mb-4"></div>
      <LinkText
        text="Need help finding your order number?"
        onClick={() => setShowHelpText(!showHelpText)}
      />
      {showHelpText && (
        <p className="text-[#5a5a5a] font-bold text-[14px] mt-2">
          Your order number is the seven or eight digit number included in your
          confirmation or tracking email. It is also included on the packing
          slip in the 'Customer PO' line.
        </p>
      )}
      <div className="mb-6"></div>
      <CustomForm /> <div className="mb-6"></div>
      <span className="text-[#5a5a5a] text-[14px] font-bold">
        We apologize in advance as we are currently not offering exchanges. For
        more information please interview our return policy.
      </span>{" "}
      <LinkText text="Our Return Policy" />
    </div>
  );
};

export default ReturnBar;
