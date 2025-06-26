import React from "react";

interface NavLinkProps {
  name: string;
  route: string;
  target?: "_self" | "_blank";
}

const NavLink: React.FC<NavLinkProps> = ({ name, route, target = "_self" }) => {
  return (
    <a
      href={route}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="text-center text-[18px] font-medium lg:text-[#5a5a5a] text=[#000000] hover:underline"
    >
      {name}
    </a>
  );
};

export default NavLink;
