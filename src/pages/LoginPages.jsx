import React from "react";
import MenuHamburguer from "../components/MenuHamburguer";
import Slider from "../components/Slider";
import HeroImage from '../assets/heroe-marvel2.jpg';

import "../styles/loginPages.css";
import Login from "../components/Login";
import Footer from "../components/Footer";

const LoginPages = () => {
  return (
    <>
      <header className="login-header">
        <h1 className='login__title'>Universo Marvel</h1>
        <MenuHamburguer />
      </header>
      <main>
        <Slider />
        {/* <hr /> */}
        <section className='section-infoLogin'>
          <div className="container-img-hero">
            <img src={HeroImage} alt="" className="hero" />
          </div>
          <div className="infoLogin-content">
            <h2 className='infoLogin__title'>¡Forma parte de la comunidad!</h2>
            <p className="infoLogin__text">Regístrate y conoce todo el contenido Marvel</p>
            <Login />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPages;
