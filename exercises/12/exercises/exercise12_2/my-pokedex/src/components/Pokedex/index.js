import React from "react";
import Pokemon from "../Pokemon";
import "./style.css";


class Pokedex extends React.Component {
  render() {
    const { todosPokemons , filter } = this.props;
    return (
      <div className="card-pokemon">
        {todosPokemons.filter(e => e.name === filter.name)
        .map((e) => (
          <Pokemon key={e.name} pokemon={e} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
