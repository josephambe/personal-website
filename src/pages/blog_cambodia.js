import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/cambodia/walk.jpg'
import pic02 from '../assets/images/spotted/cambodia/lake.jpg'
import pic03 from '../assets/images/spotted/cambodia/view.jpg'
import bgPic from '../assets/images/spotted/cambodia/view.jpg'

class Cambodia extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bgPic} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/spotted" className="icon fa-long-arrow-left" style={{color: "white"}}>SPOTTED</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>Cambodia</h1>
            <h2>Angkor Wat</h2>
            <p>
              My time in Cambodia was probably one of the highlights of my entire year in Asia.
              Cambodia was just filled with stunning, stunning temples; the detail and scale of Angkor Wat and surrounding groups was incredible.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              I loved riding around in our little tuk tuk, exploring Angkor Wat and navigating the mazes of corridors.
              Siem Reap really hit a spot with me emotionally and I will absolutely be back to see what more has been discovered in this amazing country.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Cambodia
