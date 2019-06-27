import React from 'react'
import home_duck from '../assets/images/home_duck.png'

const HeaderHackathon = (props) => (

    <header id="header">
      <figure className="homo-logo">
        <a href="/#">
          <img className="home-logo" src={home_duck} alt=""/>
        </a>
      </figure>
      <h1>SPOTTED</h1>
        <h2>(verb)     /spɒt/</h2>
        <h3>To see, notice, or recognize someone or something (me). Including but not limited to travel destinations, speaking engagements, conferences, and workshops.
        ‘Amber was spotted in…’</h3>
    </header>

)

export default HeaderHackathon
