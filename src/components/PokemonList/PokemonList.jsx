import React, { Component } from 'react';
import './PokemonList.css';

import PokemonCard from '../PokemonCard';

class PokemonList extends Component {
  render() {
    return(
      <div className="pokemon-list">
        {this.props.pokemonList.map((pokemon, key) => {
        return <PokemonCard
          key={key}
          photo={pokemon.photo}
          number={pokemon.number}
          name={pokemon.name}
          types={pokemon.types}
          />
      })}
      </div>
    )
  }
}

export default PokemonList;