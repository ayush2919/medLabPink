import React from "react";
import {baseUrl} from "./redux/baseUrl";
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} className="hamInStyle">
      <img src= "#" alt="MEDLOGO"/>
      <a className="menu-item font-weight-bold" style={{paddingTop:"120px"}} href="/">
      Home
      </a>
      <a className="menu-item font-weight-bold" href="./about">
      ABOUT
      </a>
      <a className="menu-item font-weight-bold " href="/about/#team">
      TEAM
      </a>
      <a className="menu-item font-weight-bold" href="/">
      APPOINTMENT
      </a>
      <a className="menu-item font-weight-bold" href="../#healthcare">
      HEALTHCARE
      </a>
      <a className="menu-item font-weight-bold" href="../#report">
      REPORTS
      </a>
      <a className="menu-item font-weight-bold" href="../#lifecycle">
      LIFECYCLE
      </a>
      <a className="menu-item font-weight-bold" href="#contact">
      CONTACTS
      </a>
    </Menu>
  );
};