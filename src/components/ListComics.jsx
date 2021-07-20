import React from "react";
import "../styles/listcharacter.css";

const ListComics = ({ comic }) => {
  return (
    <a
      className="container-list"
      target="_blank"
      rel="noreferrer"
      href={comic.urls[0].url}
    >
      <div className="container-hero">
        <img
          className="hero__image"
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={`comic ${comic.title}`}
        />
        <p className="title-comic">
          {comic.title.length >= 35
            ? comic.title.substring(0, 25) + "..."
            : comic.title}
        </p>
        {comic.prices[0].price === 0 ? (
          <p className="price-text">Solo venta digital</p>
        ) : (
          <p className="price-text">Precio en físico{comic.prices[0].price}</p>
        )}
      </div>
    </a>
  );
};

export default ListComics;
