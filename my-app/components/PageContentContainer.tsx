import React from "react";

interface PageContentContainerProps {
  children: React.ReactNode;
}

const PageContentContainer: React.FC<PageContentContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-6">{children}</div>
  );
};

export default PageContentContainer;
