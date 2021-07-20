import React from "react";
import "../styles/infocharacter.css";

const InfoCharacter = ({ info }) => {
  return (
    <>
      <h1 className="characterInfoPages__title">Información de {info.name}</h1>
      <div className="infoCharacter-container">
        <div className="infoCharacter-containerImg">
          <img
            className="containerImg__img"
            src={info.thumbnail.path + "." + info.thumbnail.extension}
            alt={info.name}
          />
        </div>
        <div className="infoCharacter-content">
          <hr className="content__separate" />
          <h2>Biografía</h2>
          {info.description.length === 0 ? (
            <p className="infoCharacter__text">
              Este personaje no tiene descripción
            </p>
          ) : (
            <p className="infoCharacter__text">{info.description}</p>
          )}
        </div>
      </div>
      
    </>
  );
};

export default InfoCharacter;
