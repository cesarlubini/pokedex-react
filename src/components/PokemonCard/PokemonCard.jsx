import React, { Component } from 'react';
import './PokemonCard.css';

class PokemonCard extends Component {

  render(){
    return(
      <li className="pokemon-card">
        <div className="pokemon-card__type"></div>
        <div className="pokemon-card-info">
          <span className="pokemon-card-info__photo">
            <img src="https://picsum.photos/100" alt=""/>
          </span>
          <div className="pokemon-card-info__name">
            <span className="pokemon-card-info__number">#001</span> - Bulbasaur
          </div>
          <div className="pokemon-card-info__types">
            <span className="pokemon-type">grass</span>
            <span className="pokemon-type">poison</span>
          </div>
        </div>
      </li>
    )
  } 

}

export default PokemonCard;