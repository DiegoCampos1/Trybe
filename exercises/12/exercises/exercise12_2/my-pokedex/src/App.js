import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
// import Pokemon from './Pokemon.js'

let indice = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: pokemons[indice],
      type: "",
    };
  }

  next = () => {
    indice++;
    if (indice >= pokemons.length) indice = 0;
    return this.setState({ filter: pokemons[indice] });
  };

  fire= () => {
    return this.setState({ type: "fire"})
  }

  psycho= () => {
    return this.setState({ type: "fire"})
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.filter)}
        <button onClick={this.next}>Proximo Pokemon</button>
        {/* <button>Normal</button> */}
        <button onClick={this.fire}>Fire</button>
        <button onClick={this.psycho}>Psychic</button>
        <Pokedex todosPokemons={pokemons} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
