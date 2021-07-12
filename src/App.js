import React from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <>
      <Auth0Provider
        domain="jhonnytesban.eu.auth0.com"
        clientId="DH6ozO7BEUefSqfNOuzP8ijM3JNAMP8b"
        redirectUri={window.location.origin}
      >
        <AppRouter />
      </Auth0Provider>
    </>
  );
}

export default App;
