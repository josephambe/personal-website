import React from 'react'
import home_duck from '../assets/images/home_duck.png'

const HeaderProjects = (props) => (

    <header id="header">
      <figure className="homo-logo">
        <a href="/#">
          <img className="home-logo" src={home_duck} alt=""/>
        </a>
      </figure>
      <h1>PROJECTS</h1>
        <h2>(plural noun)   /ˈprɒdʒɛkt’/ </h2>
        <h3>An individual or collaborative software related enterprise that is “carefully” planned to achieve a particular aim. Including “memorable” endeavours from University and a few personal tinkers.</h3>
    </header>

)

export default HeaderProjects
