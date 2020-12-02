import React, { Component } from 'react';
import './PokemonCard.css';
import '../../assets/pokemonColors.css'

import PokemonType from '../PokemonType'

class PokemonCard extends Component {

  render(){    
    return(
      <li className="pokemon-card">
        <div className={`pokemon-card__type ${this.props.types[0]}`}></div>
        <div className="pokemon-card-info">
          <span className="pokemon-card-info__photo">
            <img src={this.props.photo} alt={this.props.name}/>
          </span>
          <div className="pokemon-card-info__name">
            <span className="pokemon-card-info__number">#{this.props.number}</span> - {this.props.name}
          </div>
          <div className="pokemon-card-info__types">
            {this.props.types.map((type, key) => {
              return <PokemonType key={key} type={type} />
            })}
          </div>
        </div>
      </li>
    )
  } 

}

export default PokemonCard;