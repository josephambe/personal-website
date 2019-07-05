import React from 'react'
import home_duck from '../assets/images/home_duck.png'

const HeaderContact = (props) => (

    <header id="header" className="alt" style={{paddingTop: "15%", paddingBottom: "5%"}}>
      <figure className="homo-logo">
        <a href="/#">
          <img className="home-logo" src={home_duck} alt=""/>
        </a>
      </figure>
      <h3 style={{display: "inline", float: "left", paddingRight: "2%", paddingLeft: "27%"}}> Let's catch up for</h3>
      <h1 style={{display: "inline", float: "left"}}>FIKA</h1>< br/>< br />< br/>
        <h2>(noun or verb)   /fi:ka/ </h2>
        <h3>A Swedish concept which means making time for friends and colleagues to share a cup of coffee (or tea) and a little something to eat. Seems to suit Wellington pretty well. </h3>
    </header>

)

export default HeaderContact
