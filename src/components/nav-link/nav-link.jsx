import React from "react";

import "./nav-link.scss";

const NavLink = ({ children, icon, link, linkType }) => {
  const classname = linkType === "login" ? "login" : "nav-link";

  return (
    <div className={classname}>
      {icon && <i className={`fa-solid fa-${icon}`}></i>}
      {children && <a href={link || "#"}>{children}</a>}
    </div>
  );
};

export default NavLink;
