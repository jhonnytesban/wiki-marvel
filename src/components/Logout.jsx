import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";

const Logout = () => {
  const { logout, isLoading, isAuthenticated, user } = useAuth0();

  // if (isLoading) {
  //   return <Spinner />;
  // } else if (user) {
  //   return (
  //     <button onClick={() => logout({ returnTo: window.location.origin })}>
  //       Cerrar sesión
  //     </button>
  //   );
  // } else {
  //   return <>Hola</>;
  // }
  if (isAuthenticated) {
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar sesión
      </button>
    );
  } else {
    return <></>
  }
};

export default Logout;
