import React, { useRef } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "./Navbar";

const MenuHamburguer = () => {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("nav-deactive");
    navRef.current.classList.toggle("nav-active");
  };

  return (
    <div className="container-menu">
      <MenuIcon
        className='icon-menu'
        fontSize="large"
        style={{ color: "white" }}
        onClick={toggleNav}
      />
      <Navbar navRef={navRef} toggleNav={toggleNav} />
    </div>
  );
};

export default MenuHamburguer;
