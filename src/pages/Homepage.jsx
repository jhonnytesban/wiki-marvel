import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ListCharacter from "../components/ListCharacter";
import Logout from "../components/Logout";
import Spinner from "../components/Spinner";
import "../styles/homepages.css";

//ts=1
// key privade = fef5b2777a2e6227362e8fff3c55ae369f2d745a
// keu public = e0c810e28c52ded9f0f495bb89bdab0e
//md5 = 1fef5b2777a2e6227362e8fff3c55ae369f2d745ae0c810e28c52ded9f0f495bb89bdab0e
// hash = 4d198f7702c7709fd1edcdae03375c96
//url get = https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96

//Siguiente tarea: Mejorar el diseño de Hompages

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);
  const [number, setNumber] = useState(0);

  const { user, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   const fetching = async () => {
  //     const res = await fetch(
  //       "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96"
  //     );
  //     const dataRes = await res.json();
  //     const { data } = dataRes;
  //     const { results } = data;
  //     setCharacters(results);
  //     setIsLoadingComponent(false);
  //     console.log(results);
  //   };
  //   fetching();
  //   if (isLoading) {
  //     console.log("Está cargando");
  //   } else {
  //     console.log({ user, isAuthenticated, isLoading });
  //   }
  // }, []);

  useEffect(() => {
    const fetching = async () => {
      setIsLoadingComponent(true);
      const res = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96&offset=${number}`)
      const dataRes = await res.json()
      const { data } = dataRes;
      const { results } = data;
      setCharacters(results);
      setIsLoadingComponent(false);
      console.log(data)
    }
      fetching()
      console.log('Hola')
  }, [number]);

  return (
    <>
      <Logout />
      <h1>Aplicación sobre la información de los héroes de Marvel</h1>
      <button onClick={() => setNumber(number + 20)}>Cargar más datos</button>
      {number !== 0 && <button onClick={() => setNumber(number - 20)}>Atrás</button>}
      
      <div className="container-listcharacter">
        {isLoadingComponent ? (
          <Spinner />
        ) : (
          characters.map((character) => (
            <ListCharacter key={character.id} character={character} />
          ))
        )}
      </div>
    </>
  );
};

export default Homepage;
