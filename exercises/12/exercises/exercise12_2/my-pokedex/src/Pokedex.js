import React from 'react';

import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render () {

    const { todosPokemons } = this.props;
    return (
      <div>
        { todosPokemons.map(e => <Pokemon key={e.name} pokemon={e}/> ) }
      </div>
    )
  }
}

export default Pokedex;