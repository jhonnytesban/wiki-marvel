import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListCharacter from "../components/ListCharacter";
// import Logout from "../components/Logout";
// import MenuHamburguer from "../components/MenuHamburguer";
import Spinner from "../components/Spinner";
import "../styles/homepages.css";

//Siguiente tarea: Mejorar el diseño de Hompages

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetching = async () => {
      setIsLoadingComponent(true);
      const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0c810e28c52ded9f0f495bb89bdab0e&hash=4d198f7702c7709fd1edcdae03375c96&offset=${number}`
      );
      const dataRes = await res.json();
      const { data } = dataRes;
      const { results } = data;
      setCharacters(results);
      setIsLoadingComponent(false);
      console.log(data);
    };
    fetching();
    console.log("Hola");
  }, [number]);

  return (
    <>
      <Header />
      <main className="homePage-main">
        <h1 className="homePage-main__title">
          Aplicación sobre la información de los héroes de Marvel
        </h1>
        {/* <MenuHamburguer /> */}
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
          {isLoadingComponent ? (
            <Spinner />
          ) : (
            characters.map((character) => (
              <ListCharacter key={character.id} character={character} />
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
