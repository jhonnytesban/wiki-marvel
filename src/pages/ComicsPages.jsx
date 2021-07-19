import React, { useState, useEffect, memo } from "react";
import ListComics from "../components/ListComics";
import Spinner from "../components/Spinner";

const ComicsPages = memo(() => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96"
      );
      const dataRes = await res.json();
      const { data } = dataRes;
      const { results } = data;
      setComics(results);
      setIsLoading(false);
      console.log(results);
    };
    fetching();
  }, []);

  return (
    <>
      <h1>Página de cómics</h1>
      <div className="container-listcharacter">
        {isLoading ? (
          <Spinner />
        ) : (
          comics.map((comic) => <ListComics key={comic.id} comic={comic} />)
        )}
      </div>
    </>
  );
});

export default ComicsPages;
