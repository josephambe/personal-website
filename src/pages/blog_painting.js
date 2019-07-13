import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/painting/landscape.jpg'
import pic02 from '../assets/images/spotted/painting/wine.jpg'
import pic03 from '../assets/images/spotted/painting/pomegranate.jpg'
import pic04 from '../assets/images/spotted/painting/leaves.jpg'
import bgPic from '../assets/images/spotted/painting/leaves.jpg'

class Hackathon extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bgPic} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/spotted" className="icon fa-long-arrow-left">SPOTTED</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>Personal Painting</h1>
            <h2>Just for fun.</h2>
            <p>This is a collection of paintings which I do in my own time (usually in the holidays when I'm working and have loads of free time in the evenings).
            Most of them I've given away to the people I'm flatting with at the time or as presents to family.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
