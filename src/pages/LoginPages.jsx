import React from "react";
import Slider from "../components/Slider";
import HeroImage from '../assets/heroe-marvel2.jpg';
import "../styles/loginPages.css";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LoginPages = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Slider />
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
