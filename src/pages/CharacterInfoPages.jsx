import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCharacter from "../components/InfoCharacter";
import InfoCharacterComics from "../components/InfoCharacterComics";
import Spinner from "../components/Spinner";
import "../styles/CharacterInfoPages.css";

const CharacterInfoPages = memo(() => {
  const { id } = useParams();

  const [infoCharacter, setInfoCharacter] = useState([]);
  const [infoComics, setInfoComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComics, setIsLoadingComics] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96`
      );
      const dataRes = await res.json();
      const { results } = await dataRes.data;
      setInfoCharacter(results);
      setIsLoading(false);
    };
    fetching();
    const fetchingComics = async () => {
      const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96`
      );
      const dataRes = await res.json();
      const { results } = await dataRes.data;
      setInfoComics(results);
      setIsLoadingComics(false);
    };
    fetchingComics();
  }, [id]);

  return (
    <>
      <Header />
      <div className="characterInfoPages-container">
        <div className="characterInfoPages-infoCharacterContainer">
          {isLoading ? (
            <Spinner />
          ) : (
            infoCharacter.map((info) => <InfoCharacter key={info.id} info={info} />)
          )}
        </div>
        <h2 className="characterInfoPages-subtitle">Comics relacionados</h2>
        <div className="container-listcharacter">
          {isLoadingComics ? (
            <Spinner />
          ) : (
            infoComics.map((info) => <InfoCharacterComics key={info.id} info={info} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default CharacterInfoPages;
