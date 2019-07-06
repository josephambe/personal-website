import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/art_board/painting01.png'
import pic02 from '../assets/images/spotted/art_board/painting02.jpg'
import pic03 from '../assets/images/spotted/art_board/painting03.jpg'
import pic04 from '../assets/images/spotted/art_board/painting04.png'
import bgPic from '../assets/images/spotted/art_board/painting06.jpg'

class Hackathon extends React.Component {

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
            <h1>Level 3 Art Board</h1>
            <h2>Genetic enhancement of food.</h2>
            <p>This art board was an exploration of ideas surrounding the genetic enhancement of food and societies attitude towards its growing integration into our everyday lives.
              I painted almost all my works in oils, developing my painting style and ability as I went on. This was my first year using oil paint.
              This first image is of my final piece on my Art Board, and the one which I was most proud of.
              I painted this in 2016 at the age of 18 to show a user's fall into the hands of the pharmaceutical industry who designs food filled with chemicals that could be potentially dangerous for us, yet we still continue to buy them.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <p>Part of the reasoning behind these pieces was to begin to integrate food and machinery/chemicals, but also to develop my painting abilities.
              This is why a lot of my subject matter is shiny or glossy; it makes for great painting practice and effects.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <p>I submitted my art board working and explanations for NCEA Scholarship Painting and was fortunate enough to be one of two people in my class to be awarded the scholarship.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>I really enjoyed the process of creating my Level 3 Art Board and can safely say that it ended up being one of my favourite NCEA subjects.
              I definitely improved over the year and will hopefully continue to develop my skills and enjoy painting in my own time for the remainder of my life.
            </p>
              <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
