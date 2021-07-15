import React from "react";
import ImageMarvel from "../assets/heroe-marvel.jpg";
import MarvelComics from "../assets/marvel-comics.jpg";
import "../styles/Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-slider">
        <section className="slide">
          <img className="slide__image" src={ImageMarvel} alt="" />
          <p className='slide__text'>Disfruta de información de todos los héroes</p>
        </section>
        <section className="slide">
          <img className="slide__image" src={MarvelComics} alt="" />
          <p className='slide__text'>Sumérgete en el universo Cómic de Marvel</p>
        </section>
      </div>
    </>
  );
};

export default Slider;
