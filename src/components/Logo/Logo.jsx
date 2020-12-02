import React, { Component } from 'react';
import './Logo.css';
import LogoImg from '../../assets/img/logo.png'

class Logo extends Component {
  render() {
    return (
      <img className="logo" src={LogoImg} alt="Pokedex"/>
    )
  }
}

export default Logo;