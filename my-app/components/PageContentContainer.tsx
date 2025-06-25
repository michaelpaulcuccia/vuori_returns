import React, { ReactElement, ReactNode } from "react";

interface PageContentContainerProps {
  children: ReactNode;
}

const PageContentContainer: React.FC<PageContentContainerProps> = ({
  children,
}) => {
  const childrenArray = React.Children.toArray(children) as ReactElement[];

  return (
    <div className="flex flex-col lg:flex-row w-full mt-6">
      <div className="order-2 lg:order-1 w-full">{childrenArray[0]}</div>
      <div className="order-1 lg:order-2 w-full">{childrenArray[1]}</div>
    </div>
  );
};

export default PageContentContainer;
