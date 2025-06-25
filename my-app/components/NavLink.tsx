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
      className="text-center text-lg font-medium hover:underline"
    >
      {name}
    </a>
  );
};

export default NavLink;
