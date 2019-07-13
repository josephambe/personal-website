import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/bali/arms.jpeg'
import pic02 from '../assets/images/spotted/bali/monkey.jpeg'
import pic03 from '../assets/images/spotted/bali/fancy.jpeg'
import bgPic from '../assets/images/spotted/bali/view.jpeg'

class Bali extends React.Component {

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
            <h1>Bali</h1>
            <h2>Monkey's, sunrise hikes, and waterfalls</h2>
            <p>
              Our time in Bali was spent exclusively in Ubud.
              This was definitely my ‘splurge’ trip, with super fancy accommodation and loads of coconut ice-cream.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Some of my favourite parts of Bali included visiting the Monkey Forest, trying the most expensive coffee in the world, hiking Mt Batur at midnight and watching the sunrise from the summit, and touring rice fields and waterfalls around the area.
              Next time, I think I’d hire a scooter to travel on as Ubur isn’t available and the cost of a private driver is quite high.

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

export default Bali
