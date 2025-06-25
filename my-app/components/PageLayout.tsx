import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-col
        mx-[40px] my-[18px]
        lg:mx-[12px] lg:my-[8px]
      "
    >
      {children}
    </div>
  );
};

export default PageLayout;
