"use client";
import React from "react";
import Image from "next/image";

const ReturnHero: React.FC = () => {
  return (
    <div className="relative">
      {/* Mobile Image */}
      <div className="block lg:hidden relative w-full h-[100px]">
        <Image
          src="/images/returns_mobile.jpg"
          alt="Returns Mobile Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block relative w-[65vw] h-screen">
        <Image
          src="/images/returns_desktop.jpg"
          alt="Returns Desktop Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ReturnHero;
