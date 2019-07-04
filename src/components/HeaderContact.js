import React from 'react'
import home_duck from '../assets/images/home_duck.png'

const HeaderContact = (props) => (

    <header id="header">
      <figure className="homo-logo">
        <a href="/#">
          <img className="home-logo" src={home_duck} alt=""/>
        </a>
      </figure>
      <h1>FIKA</h1>
        <h2>(noun or verb)   /fi:ka/ </h2>
        <h3>A Swedish concept which means making time for friends and colleagues to share a cup of coffee (or tea) and a little something to eat. Seems to suit Wellington pretty well. </h3>
    </header>

)

export default HeaderContact
