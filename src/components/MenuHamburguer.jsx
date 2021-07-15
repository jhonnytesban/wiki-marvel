import React, { useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from './Navbar';

const MenuHamburguer = () => {

  const navRef = useRef()

  const toggleNav = () => {
    navRef.current.classList.toggle('nav-deactive')
    navRef.current.classList.toggle('nav-active')
  }

  return (
    <>
      <MenuIcon fontSize='large' style={{color: 'white'}} onClick={toggleNav}/>
      <Navbar navRef={navRef} toggleNav={toggleNav}/>
    </>
  );
}
 
export default MenuHamburguer;