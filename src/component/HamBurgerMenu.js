import React from "react";
import Media from 'react-media';
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Media query='(max-width:414px)'>
        <img src='../assets/images/logo.png' width="120px" hegith="70px"/>
      </Media>  
      <a className="menu-item font-weight-bold" href="/">
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