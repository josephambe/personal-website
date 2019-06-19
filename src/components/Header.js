import React from 'react'

import logo from '../assets/images/logo.png';
import logoWink from '../assets/images/logo_wink.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        {/*<span className="overlay"><img src={logoWink} alt=""/></span>*/}
      <h1>AMBER <span>JOSEPH</span></h1>
      <p>SOFTWARE ENGINEER</p>
    </header>
)

export default Header
