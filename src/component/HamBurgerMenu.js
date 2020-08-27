import React from "react";
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} className="hamInStyle">
      <img src= "../assets/images/medLogo.png" alt="MEDLOGO"/>
      <a className="menu-item font-weight-bold ml-2" style={{paddingTop:"120px"}} href="/">
      Home
      </a>
      <a className="menu-item font-weight-bold ml-2" href="./about">
      ABOUT
      </a>
      <a className="menu-item font-weight-bold ml-2" href="/about/#team">
      TEAM
      </a>
      <a className="menu-item font-weight-bold ml-2" href="/">
      APPOINTMENT
      </a>
      <a className="menu-item font-weight-bold ml-2" href="../#healthcare">
      HEALTHCARE
      </a>
      <a className="menu-item font-weight-bold ml-2" href="../#report">
      REPORTS
      </a>
      <a className="menu-item font-weight-bold ml-2" href="../#lifecycle">
      LIFECYCLE
      </a>
      <a className="menu-item font-weight-bold ml-2" href="#contact">
      CONTACTS
      </a>
    </Menu>
  );
};