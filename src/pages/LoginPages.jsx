import React from "react";
import MenuHamburguer from "../components/MenuHamburguer";
import "../styles/loginPages.css";

const LoginPages = () => {
  return (
    <>
      <header className="login-header">
        <h1>La web sobre personajes y cómics Marvel</h1>
        <MenuHamburguer />
      </header>
      <main></main>
    </>
  );
};

export default LoginPages;
