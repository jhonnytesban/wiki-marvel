import React, { useState, useEffect } from "react";
import ListCharacter from "../components/ListCharacter";
import Logout from "../components/Logout";
import Spinner from "../components/Spinner";
import { useAuth0 } from '@auth0/auth0-react';

//ts=1
// key privade = fef5b2777a2e6227362e8fff3c55ae369f2d745a
// keu public = e0c810e28c52ded9f0f495bb89bdab0e
//md5 = 1fef5b2777a2e6227362e8fff3c55ae369f2d745ae0c810e28c52ded9f0f495bb89bdab0e
// hash = 4d198f7702c7709fd1edcdae03375c96
//url get = https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96

//Siguiente tarea: Implementar la página de login y la autenticacion ayudado por el video :)

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);

  const { user, isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96"
      );
      const dataRes = await res.json();
      const { data } = dataRes;
      const { results } = data;
      setCharacters(results);
      setIsLoadingComponent(false);
      console.log(results);
    };
    fetching()
    if (isLoading) {
      console.log('Está cargando')
    } else {
      console.log( {user ,isAuthenticated, isLoading})
    }
  }, []);

  return (
    <div className="App">
      <Logout />
      <h1>Aplicación sobre la información de los héroes de Marvel</h1>
      <div className="container-listcharacter">
        {isLoadingComponent ? (
          <Spinner />
        ) : (
          characters.map((character) => <ListCharacter key={character.id} character={character} />)
        )}
      </div>
    </div>
  );
};

export default Homepage;
