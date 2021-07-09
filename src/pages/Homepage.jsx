import React, { useState, useEffect } from "react";
import ListCharacter from "../components/ListCharacter";

//ts=1
// key privade = fef5b2777a2e6227362e8fff3c55ae369f2d745a
// keu public = e0c810e28c52ded9f0f495bb89bdab0e
//md5 = 1fef5b2777a2e6227362e8fff3c55ae369f2d745ae0c810e28c52ded9f0f495bb89bdab0e
// hash = 4d198f7702c7709fd1edcdae03375c96
//url get = https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96"
      );
      const dataRes = await res.json();

      const { data } = dataRes;
      const { results } = data;
      setCharacters(results);
      setIsLoading(false);
      console.log(results);
    };
    fetching();
  }, []);

  return (
    <div className="App">
      <h1>Aplicación sobre la información de Stars Wars</h1>
      <div className="container-listcharacter">
        {isLoading ? (
          <div className='spinner'></div>
        ) : (
          characters.map((character) => <ListCharacter character={character} />)
        )}
      </div>
    </div>
  );
};

export default Homepage;
