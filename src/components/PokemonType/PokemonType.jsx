import React, { Component } from 'react';
import './PokemonType.css'
import '../../assets/pokemonColors.css'

class PokemonType extends Component {
  render(){
    return(
      <span className={`pokemon-type ${this.props.type}`}>
        {this.props.type}
      </span>
    )
  }
}

export default PokemonType;