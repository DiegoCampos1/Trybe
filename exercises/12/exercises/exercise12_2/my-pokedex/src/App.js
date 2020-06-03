import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import Buttons from './components/Buttons';
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
    const filterTypes = pokemons.filter(
      (pokemons) => pokemons.type === typePokemon,
    );
    pokemons2 = filterTypes;

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
    return this.setState({
      type: pokemons2,
      filter: pokemons2[indice],
      disabled: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex todosPokemons={this.state.type} filter={this.state.filter} />
        <div className="buttons-type">
        <Buttons onClick={this.all} name={'All'} />

        <Buttons onClick={() => this.filterPokemons('Fire')} name={'Fire'} />
        <Buttons onClick={() => this.filterPokemons('Psychic')} name={'Psychic'} />
        <Buttons onClick={() => this.filterPokemons('Electric')} name={'Electric'} />
        <Buttons onClick={() => this.filterPokemons('Bug')} name={'Bug'} />
        <Buttons onClick={() => this.filterPokemons('Poison')} name={'Poison'} />
        <Buttons onClick={() => this.filterPokemons('Normal')} name={'Normal'} />
        <Buttons onClick={() => this.filterPokemons('Dragon')} name={'Dragon'} />
        </div>
        <Buttons onClick={this.next} disabled={this.state.disabled} name={'Next Pokemon'} />
      </div>
    );
  }
}

export default App;
