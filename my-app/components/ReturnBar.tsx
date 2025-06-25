"use client";
import React, { useState } from "react";
import LinkText from "./LinkText";
import CustomForm from "./CustomForm";

const ReturnBar: React.FC = () => {
  const [showHelpText, setShowHelpText] = useState(false);

  return (
    <div className="w-full lg:w-[30vw] p-4">
      <h2 className="headline-text">MAKING A RETURN?</h2>
      <p className="text-[#5a5a5a] font-bold">
        It's easy! Just enter your order information below to get started.
      </p>
      <p className="text-[#5a5a5a] font-bold">
        Returning a gift? Email us at support@vuori.com with your order number
        and the item you want to return.
      </p>
      <LinkText
        text="Need help finding your order number?"
        onClick={() => setShowHelpText(!showHelpText)}
      />
      {showHelpText && (
        <p className="mt-2 text-[#5a5a5a] text-sm leading-[19px]">
          Your order number is the seven or eight digit number included in your
          confirmation or tracking email. It is also included on the packing
          slip in the 'Customer PO' line.
        </p>
      )}
      <CustomForm />{" "}
      <span className="text-[#5a5a5a] font-bold">
        We apologize in advance as we are currently not offering exchanges. For
        more information please interview our return policy.
      </span>{" "}
      <LinkText text="Our Return Policy" />
    </div>
  );
};

export default ReturnBar;
