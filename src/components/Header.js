import React from 'react'

import Popup from 'reactjs-popup'
import Modal from '../components/Modal'
import Menu from './Menu'



const Header = (props) => (
    <header id="header" className="alt">
      <Modal />
      <Menu />


      {/*<figure className="swap-on-hover">*/}
        {/*<img className="swap-on-hover__front-image" src={logo} alt=""/>*/}
        {/*<img className="swap-on-hover__back-image" src={logoWink} alt=""/>*/}
      {/*</figure>*/}

      {/*<ul className="burger">*/}
        {/*<a href="#" className="icon fa-bars alt"><span className="label">Burger Menu</span></a>*/}
      {/*</ul>*/}
      <h1>AMBER <span>JOSEPH</span></h1>
      <p>SOFTWARE ENGINEER</p>

    </header>

)



export default Header
