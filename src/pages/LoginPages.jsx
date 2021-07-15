import React from "react";
import MenuHamburguer from "../components/MenuHamburguer";
import Slider from "../components/Slider";

import "../styles/loginPages.css";

const LoginPages = () => {
  return (
    <>
      <header className="login-header">
        <h1 className='login__title'>Universo Marvel</h1>
        <MenuHamburguer />
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
};

export default LoginPages;
