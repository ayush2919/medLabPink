import React from "react";
import Media from 'react-media';
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
        <img className="homeLogo" src='../assets/images/medLogo.png' alt="MEDLOGO"/>
      <a className="menu-item font-weight-bold" style={{paddingTop:"120px",color:"#2a93c9"}} href="/">
      Home
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="/about">
      ABOUT US
      </a>
      <a className="menu-item font-weight-bold " style={{color:"#2a93c9"}} href="#">
      TEAM
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="#">
      TIMETABLE
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="../#packages">
      PACKAGES
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="/desserts">
      BUY PACKAGES
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="../#lifecycle">
      LIFECYCLE DISORDER
      </a>
      <a className="menu-item font-weight-bold" style={{color:"#2a93c9"}} href="#contact">
      CONTACT US
      </a>
    </Menu>
  );
};