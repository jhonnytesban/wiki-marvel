import React from "react";
import "../styles/listcharacter.css";

const ListComics = ({ comic }) => {
  return (
    <div className="container-list">
      <div className="container-hero">
        <img
          className="hero__image"
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={`comic ${comic.title}`}
        />
        <p className="title-comic">{comic.title}</p>
        {comic.prices[0].price === 0 ? (
          <p className="price-text">Solo venta digital</p>
        ) : (
          <p className="price-text">Precio en físico{comic.prices[0].price}</p>
        )}
        {/* <p>{comic.prices[0].price}</p> */}
      </div>
    </div>
  );
};

export default ListComics;
