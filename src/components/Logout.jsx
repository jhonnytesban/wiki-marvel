import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Login.css';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <button className='login__btn' onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar sesión
      </button>
    );
  } else {
    return <></>
  }
};

export default Logout;
