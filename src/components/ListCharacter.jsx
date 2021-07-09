import React from 'react';
import '../styles/listcharacter.css'

const ListCharacter = ({ character }) => {
  return (
    <div className='container-list'>
      <div className='container-hero'>
        <img className='hero__image' src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
      </div>
      <p className='hero__name'>{character.name}</p>
    </div>
  );
}
 
export default ListCharacter;