import React from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import "../styles/navbar.css";

const Navbar = ({ toggleNav, navRef }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="nav-deactive" ref={navRef}>
        <MenuOpenIcon
          className="icon-menu"
          style={{ color: "white" }}
          fontSize="large"
          onClick={toggleNav}
        />
        <ul className="nav-list">
          {isAuthenticated && (
            <>
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
            </>
          )}
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
};

export default Navbar;
