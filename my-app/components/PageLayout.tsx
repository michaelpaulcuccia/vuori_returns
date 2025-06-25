import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-col
        mt-[16px]
        ml-[0px] 
        lg:ml-[20px] 
      "
    >
      {children}
    </div>
  );
};

export default PageLayout;
