import React from "react";

import NavLink from "../nav-link/nav-link";

import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="brand">
        <img src="./assets/logo.png" alt="brand name" />
      </div>

      <div className="nav-links">
        <NavLink icon={"video"}>Live</NavLink>
        <NavLink icon={"id-card"}>Membership</NavLink>
        <NavLink icon={"person-running"}>Plans</NavLink>
        <NavLink icon={"table-cells-large"}>More</NavLink>
      </div>
      <div className="brand">
        <NavLink icon={"user"} linkType="login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
