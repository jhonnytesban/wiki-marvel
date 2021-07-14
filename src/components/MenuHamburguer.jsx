import React, { useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from './Navbar';

const MenuHamburguer = () => {

  const navegation = useRef()

  return (
    <>
      <MenuIcon />
      <Navbar ref={navegation}/>
    </>
  );
}
 
export default MenuHamburguer;