import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/unicon/group.jpg'
import pic02 from '../assets/images/spotted/unicon/emcee.jpg'
import pic03 from '../assets/images/spotted/unicon/stage.jpg'
import bgPic from '../assets/images/spotted/unicon/bg.jpg'

class Unicon extends React.Component {

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
            <h1>UNICON 2019</h1>
            <h2>Asia's craziest student led conference for tech and entrepreneurship</h2>
            <p>
              UNICON2019 is Asia’s largest tech and entrepreneurship conference run entirely by students at NUS (National University of Singapore).
              For their 2019 conference, I was lucky enough to be given a key role as Sponsorship Manager, and emcee of the entire event.
            </p>
            <p>
              Planning and creating the event started 9 months in advance, with thousands of emails sent by my team alone to reach out to find sponsors.
              In the end, I was responsible for leading a team of public-relations managers and securing over $10,000 worth of funding.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              As emcee of the conference I had the privilege of speaking personally with the following incredible business men and women:
              <ul>
                <li>Chee Hong Tat, Senior Minister of State, MTI & MOE</li>
                <li>Ajey Gore, Group CTO Go-Jek</li>
                <li>Ng Aik Phong, Managing Director Fave</li>
                <li>Arrif Ziaudeen, CEO & Founder Chope</li>
                <li>Shanru Lai, Co-Founder Shopback</li>
                <li>Jeffery Chua, Associate Golden Gate Ventures</li>
                <li>Lim Teck Yong, Head of Operations Shopee</li>
                <li>Sakhee Dheer Head of Digital, Global Business Marketing, Facebook</li>
                <li>Danny Kim, APAC Central Strategy Planning Principal Google</li>
                <li>Kelvin Chua, Head of Product R&D and Infrastructure Circles.Life</li>
                <li>Sagar Sarbhai, Head of Government & Regulatory Relations Ripple</li>
                <li>Jupe Tan, Managing Partner Asia Pacific Plug and Play</li>
                <li>Yan Phun COO, 99.co</li>
                <li>David Fowler, Director PwC Singapore's Venture Hub</li>
                <li>Kelvin Teo, CEO & Co-Founder Funding Societies</li>
                <li>Mohan Belani, CEO & Co-Founder e27</li>
                <li>Doug Parker, COO nuTonomy</li>
                <li>Sarveen Chester, Growth Launcher Revolut</li>
                <li>Tj Tham, CEO GrabWheels</li>
                <li>ZP Lee, CEO & Founder UpCode Academy</li>
              </ul>
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              I found Sakhee Dheer’s (Head of Digital, Global Business Marketing, Facebook) talk most inspiring as one of the few female speakers and for her fearlessness in entering new career fields.
            </p>
            <p>
              As an organiser, the days of the UNICON conference itself was super intense and there were several times where I had to improvise on stage while a guest still arrived or there was a last minute change in speakers.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              UNICON was one of the highlights of my time in Singapore, and it was a fantastic opportunity to get an insight into how the tech and entrepreneurship scene of South East Asia shapes up compared to New Zealand.
              Differences in marketing, customer audience, cultural working structures, and even attitude towards money were very evident and gave me a lot to think about as we enter an age where multicultural businesses are more prominent than ever.
              Ideally the most effective business culture would take highlights from both Western and Eastern cultures; however many of these are simply down to what an individual is used to.
              I find these sorts of problems fascinating and am super grateful to have the opportunity to explore them with some of South East Asia’s most successful entrepreneurs.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Unicon
