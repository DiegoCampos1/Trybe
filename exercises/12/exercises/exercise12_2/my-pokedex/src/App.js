import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
// import Pokemon from './Pokemon.js'

function App() {
  return (
    <div className="App">
      <Pokedex todosPokemons={pokemons} />
    </div>
  );
}

export default App;
