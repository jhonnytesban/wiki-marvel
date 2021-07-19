import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../styles/listcharacter.css";

const ListCharacter = memo(({ character }) => {
  return (
    <Link className="container-list" to={JSON.stringify(character.id)}>
      <div className="container-hero">
        <img
          className="hero__image"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
        />
        <p className="hero__name">{character.name}</p>
      </div>
    </Link>
  );
});

export default ListCharacter;
