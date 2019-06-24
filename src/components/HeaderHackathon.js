import React from 'react'
import home_duck from '../assets/images/home_duck.png'

const HeaderHackathon = (props) => (

    <header id="header">
      <figure className="homo-logo">
        <a href="/#">
          <img className="home-logo" src={home_duck} alt=""/>
        </a>
      </figure>
      <h1>HACKATHONS</h1>
        <h2>(noun)   /ˈhakəθɒn/ </h2>
        <h3>An event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming. Used by non-techy people to get attention and sound cool. Because let’s be real, it’s a cool word.</h3>
    </header>

)

export default HeaderHackathon
