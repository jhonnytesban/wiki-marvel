import React from 'react';
import MenuHamburguer from "../components/MenuHamburguer";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="login-header">
        <h1 className='login__title'>Universo Marvel</h1>
        <MenuHamburguer className='header-icon'/>
      </header>
    </>
  );
}
 
export default Header;