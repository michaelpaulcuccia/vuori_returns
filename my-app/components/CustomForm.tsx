import React, { useState } from "react";
import CustomInput from "./CustomInput";

const CustomForm: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (orderNumber.length < 8) {
      setError("Order number must be at least 8 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Form submitted:", { orderNumber, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomInput
        name="orderNumber"
        placeholder="Customer PO / Order Number"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
      <CustomInput
        name="email"
        type="email"
        placeholder="Order Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full h-[40px] bg-[#5a5a5a] text-white text-sm rounded-[2px]"
      >
        Next
      </button>
    </form>
  );
};

export default CustomForm;
