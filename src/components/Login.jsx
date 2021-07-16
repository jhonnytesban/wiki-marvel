import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        className='login__btn'
        onClick={() =>
          loginWithRedirect({ redirectUri: "http://localhost:3000/personajes" })
        }
      >
        Inicia Sesión
      </button>
    </>
  );
};

export default Login;
