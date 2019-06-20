import React from 'react'

import logo from '../assets/images/logo.png';
import logoWink from '../assets/images/logo_wink.png';

const Header = (props) => (
    <header id="header" className="alt">
      <figure className="swap-on-hover">
        <img class="swap-on-hover__front-image" src={logo} alt="" />
        <img class="swap-on-hover__back-image" src={logoWink} alt="" />
      </figure>
        {/*<span className="overlay"><img src={logo} alt="" /></span>*/}
        {/*<span className="logo"><img src={logoWink} alt=""/></span>*/}
      <h1>AMBER <span>JOSEPH</span></h1>
      <p>SOFTWARE ENGINEER</p>
    </header>
)

export default Header
