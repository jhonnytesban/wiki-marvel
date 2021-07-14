import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = forwardRef(({ props, navegation }) => {
  return (
    <>
      <nav className="nav" ref={navegation}>
        <ul className="nav-list">
          <li className="nav__item">
            <NavLink exact className="link" activeClassName="active" to="/">
              Ir a Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="link"
              activeClassName="active"
              to="/personajes"
            >
              Personajes
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              className="link"
              activeClassName="active"
              to="/comics"
            >
              Ir a los comics
            </NavLink>
          </li>
          <li>
            <Login />
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </>
  );
});

export default Navbar;
