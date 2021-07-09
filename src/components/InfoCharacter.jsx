import React from "react";
import '../styles/listcharacter.css';

const InfoCharacter = ({ info }) => {

  return (
    <>
      <div className='container-list'>
        <div className="container-hero">
          <img className='hero__image' src={info.thumbnail.path + '.' + info.thumbnail.extension} alt="" />
        </div>
        <p className="hero__name">{info.title}</p>
        <p>Precio en formato físico: {info.prices[0].price}</p>
        {/* <p className="hero__name">Precio en formato digital: {info.prices[1].price}</p> */}
      </div>
    </>
  );
};

export default InfoCharacter;
