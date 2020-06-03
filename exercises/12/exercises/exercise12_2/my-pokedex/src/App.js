import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
// import Pokemon from './Pokemon.js'

let indice = 0;
let pokemons2 = pokemons;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: pokemons2[indice],
      type: pokemons2,
      disabled: false,
    };
  }

  next = () => {
    indice++;
    if (indice >= this.state.type.length) indice = 0;
    // console.log(this.state.filter)
    return this.setState({ filter: pokemons2[indice] });
  };

  filterPokemons = (typePokemon) => {
    indice = 0;
    const filterFire = pokemons.filter(
      (pokemons) => pokemons.type === typePokemon,
    );
    pokemons2 = filterFire;

    pokemons2.length <= 1
      ? this.setState({
          type: pokemons2,
          filter: pokemons2[indice],
          disabled: true,
        })
      : this.setState({
          type: pokemons2,
          filter: pokemons2[indice],
          disabled: false,
        });
  };

  all = () => {
    indice = 0;
    pokemons2 = pokemons;
    return this.setState({ type: pokemons2, filter: pokemons2[indice] , disabled: false });
  };

  render() {
    return (
      <div className="App">
        {/* {console.log(this.state.filter)} */}
        <Pokedex todosPokemons={this.state.type} filter={this.state.filter} />
        <button onClick={this.next} disabled={this.state.disabled}>
          Next Pokemon
        </button>
        {/* <button>Normal</button> */}
        <button onClick={this.all}>All</button>
        <button onClick={() => this.filterPokemons('Fire')}>Fire</button>
        <button onClick={() => this.filterPokemons('Psychic')}>Psychic</button>
        <button onClick={() => this.filterPokemons('Electric')}>
          Electric
        </button>
        <button onClick={() => this.filterPokemons('Bug')}>Bug</button>
        <button onClick={() => this.filterPokemons('Poison')}>Poison</button>
        <button onClick={() => this.filterPokemons('Normal')}>Normal</button>
        <button onClick={() => this.filterPokemons('Dragon')}>Dragon</button>
      </div>
    );
  }
}

export default App;
