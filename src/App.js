import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [randomPokemon]);

  const fetchData = async () => {
    const request = await fetch(randomPokemon);
    const response = await request.json();

    setPokemon(response);
  };

  const handleRandom = () => {
    const random = Math.floor(Math.random() * 151) + 1; 

    setRandomPokemon(`https://pokeapi.co/api/v2/pokemon/${random}`);
  };

  if (pokemon === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="pokemon-card">
        <img
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
        <h1>{pokemon.name}</h1>
        <div className="description">
          <h2>Height:</h2>
          <p>{pokemon.height}</p>
        </div>
        <div className="description">
          <h2>Weight:</h2>
          <p>{pokemon.weight}</p>
        </div>
        <div className="ist">
          <h2>Types:</h2>
          <ul>
            {pokemon.types.map((type, i) => {
              return (
                <li>
                  <p>{type.type.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className="button-random" onClick={handleRandom}>
        <p>Show random pokemon</p>
      </button>
    </div>
  );
}

export default App;
