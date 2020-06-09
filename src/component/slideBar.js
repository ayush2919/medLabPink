import React from "react";
import Media from 'react-media';
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Media query='(max-width:414px)'>
        <img src='../assets/images/logo.png' width="120px" hegith="70px"/>
      </Media>  
      <a className="menu-item" href="/">
      <strong>Home</strong>
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};