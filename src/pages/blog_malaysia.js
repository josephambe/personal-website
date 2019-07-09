import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/malaysia/mural.jpg'
import pic02 from '../assets/images/spotted/malaysia/stairs.jpg'
import pic04 from '../assets/images/spotted/malaysia/batu.jpg'
import pic03 from '../assets/images/spotted/malaysia/cafe.jpg'
import pic05 from '../assets/images/spotted/malaysia/hawker.jpg'
import bgPic from '../assets/images/spotted/malaysia/stairs.jpg'

class Malaysia extends React.Component {

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
            <h1>Malaysia</h1>
            <h2>Half in a bus, half on the streets</h2>
            <p>
              The four of us decided that Chinese New Year would be fantastic time to cross Singapore's border to its closest neighbour; Malaysia.
              An overnight bus to Penang, George Town, then a couple of days later another bus to Kuala Lumpur, then the day after that bus to Malacca, and on our final day of break, bus back to Singapore.
              Sounds great right? Those buses would be on time right? It's not like we are travelling on the biggest public holiday of the year...right?
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Despite spending some 14 hours non-stop on a bus, Malaysia turned out to be stunning.
              The weather was flawless (aside from being trapped in the most gorgeous little street tea shop in George Town in a rain storm), and the food was some of the best I've had from around South East Asia.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>
            <p>
              I particulary enjoyed the places we stayed; the backpackers were all super unique and trendy. Geroge Town was my favourite stop of the entire trip; every wall had a mural or piece of interactive wall art.
              The whole town becomes a playground.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>
              The street food was the real stand out for me though. From authentic Laksa, to Chendol on a hot afternoon, to Indian stalls of sweets and bright pink fudge, to sticky rice caramel (a dish only served on Chinese New Year),
              the food of Malaysia is definetly worth travelling for.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>
              Overall, I look back on my time in Malaysia with adventure and joy. It's a place to wander by foot, although next time I would hire a car or just fly.
              OH, District 21 (a giant indoor playground for adults complete with flying fox and ninja warrior course) in Kuala Lumpur is also worth a visit if you have the energy.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>



          </div>
        </div>
      </Layout>
    )
  }
}

export default Malaysia
