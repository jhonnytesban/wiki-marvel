import React from "react";
import "../styles/infocharacter.css";
import "../styles/listcharacter.css";

const InfoCharacterComics = ({ info }) => {
  return (
    <>
      <a
        className="container-list"
        target="_blank"
        rel="noreferrer"
        href={info.urls[0].url}
      >
        <div className="container-hero">
          <img
            className="hero__image"
            src={info.thumbnail.path + "." + info.thumbnail.extension}
            alt=""
          />
          <p className="title-comic">
            {info.title.length >= 20
              ? info.title.substring(0, 22) + "..."
              : info.title}
          </p>
          {info.prices[0].price === 0 ? (
            <p className="price-text">Solo venta digital</p>
          ) : (
            <p className="price-text">
              Precio en físico: {info.prices[0].price}
            </p>
          )}
        </div>
      </a>
    </>
  );
};

export default InfoCharacterComics;
