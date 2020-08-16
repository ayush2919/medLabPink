import React from "react";
import {baseUrl} from "./redux/baseUrl";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} className="hamInStyle">
      <img src= "/" alt="MEDLOGO"/>
      <a className="menu-item font-weight-bold" style={{paddingTop:"120px"}} href="/">
      Home
      </a>
      <a className="menu-item font-weight-bold" href="/about">
      ABOUT US
      </a>
      <a className="menu-item font-weight-bold " href="#">
      TEAM
      </a>
      <a className="menu-item font-weight-bold" href="#">
      TIMETABLE
      </a>
      <a className="menu-item font-weight-bold" href="../#packages">
      PACKAGES
      </a>
      <a className="menu-item font-weight-bold" href="/desserts">
      BUY PACKAGES
      </a>
      <a className="menu-item font-weight-bold" href="../#lifecycle">
      LIFECYCLE DISORDER
      </a>
      <a className="menu-item font-weight-bold" href="#contact">
      CONTACT US
      </a>
    </Menu>
  );
};