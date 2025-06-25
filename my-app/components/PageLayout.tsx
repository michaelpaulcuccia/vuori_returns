import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-col
        my-[16px]
        ml-[20px] 
        lg:ml-[40px] 
      "
    >
      {children}
    </div>
  );
};

export default PageLayout;
