import React from 'react'

import logo from '../assets/images/logo.png';
import logoWink from '../assets/images/logo_wink.png';
import michael from '../assets/images/Michael.png';
import { Link } from 'gatsby'



const Header = (props) => (
    <header id="header" className="alt">
      <figure className="swap-on-hover">
        <img className="swap-on-hover__front-image" src={logo} alt=""/>
        <img className="swap-on-hover__back-image" src={logoWink} alt=""/>
      </figure>

      <ul className="burger">
        <a href="#" className="icon fa-bars alt"><span className="label">Burger Menu</span></a>
      </ul>
      <h1>AMBER <span>JOSEPH</span></h1>
      <p>SOFTWARE ENGINEER</p>

    </header>

)



export default Header
