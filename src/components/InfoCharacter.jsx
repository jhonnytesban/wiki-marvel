import React from "react";
import "../styles/listcharacter.css";
import "../styles/infocharacter.css";

const InfoCharacter = ({ info }) => {
  return (
    <>
      <div className="container-list">
        <div className="container-info">
          <img
            className="hero__image"
            src={info.thumbnail.path + "." + info.thumbnail.extension}
            alt=""
          />
          <p className="hero__name">
            {info.title.length >= 20
              ? info.title.substring(0, 22) + "..."
              : info.title}
          </p>
          {info.prices[0].price === 0 ? (
            <p className="prices-text">Solo venta digital</p>
          ) : (
            <p className="prices-text">
              Precio en físico: {info.prices[0].price}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoCharacter;
