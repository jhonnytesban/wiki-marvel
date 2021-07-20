import React, { useState, useEffect, memo } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListComics from "../components/ListComics";
import Spinner from "../components/Spinner";
import "../styles/homepages.css";

const ComicsPages = memo(() => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true)
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96&offset=${number}`
      );
      const dataRes = await res.json();
      const { data } = dataRes;
      const { results } = data;
      setComics(results);
      setIsLoading(false);
      console.log(data);
    };
    fetching();
  }, [number]);

  return (
    <>
      <Header />
      <main className="homePage-main">
        <h1 className="homePage-main__title">Comics Marvel</h1>
        <div className="homePage-containerBtn">
          {number !== 0 && (
            <button
              className="homePage__btn"
              onClick={() => setNumber(number - 20)}
            >
              Atrás
            </button>
          )}
          <button
            className="homePage__btn"
            onClick={() => setNumber(number + 20)}
          >
            Siguiente
          </button>
        </div>
        <div className="container-listcharacter">
          {isLoading ? (
            <Spinner />
          ) : (
            comics.map((comic) => <ListComics key={comic.id} comic={comic} />)
          )}
        </div>
      </main>
      <Footer />
    </>
  );
});

export default ComicsPages;
