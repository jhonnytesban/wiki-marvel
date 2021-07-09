import React from 'react';
import '../styles/listcharacter.css';

const ListComics = ({comic}) => {
  return (
    <div className='container-list'>
      <div className='container-hero'>
        <img className='hero__image' src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="" />
        <p>{comic.title}</p>
      </div>
    </div>
  );
}
 
export default ListComics;