import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic02 from '../assets/images/spotted/rasnz_2019/selfie.jpg'
import pic01 from '../assets/images/spotted/rasnz_2019/stage.jpg'

import bgPic from '../assets/images/spotted/rasnz_2019/beach.jpg'

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
            <h1>RASNZ 2019</h1>
            <h2>Royal Astronomical Society of NZ Conference</h2>
            <p>
              Why I went; great group of people, networking, inspired by Auckland programme, trying to get more students into the space industry.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Highlights: my girls, talking about nzssa, winning
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              Dinner, SWAPA students
            </p>
            <p>
              Plans for Auckland and Queenstown ?
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
