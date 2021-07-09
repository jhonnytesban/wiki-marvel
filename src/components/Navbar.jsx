import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav__item'>
            <NavLink exact className='link' activeClassName='active' to='/'>Ir a inicio</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink exact  className='link' activeClassName='active' to='/comics'>Ir a los comics</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
 
export default Navbar;