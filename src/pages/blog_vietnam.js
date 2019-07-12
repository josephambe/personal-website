import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/vietnam/flag.jpg'
import pic02 from '../assets/images/spotted/vietnam/hands.jpeg'
import bgPic from '../assets/images/spotted/vietnam/door.jpg'

class Vietnam extends React.Component {

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
            <h1>Vietnam</h1>
            <h2>Hanoi, Sapa</h2>
            <p>
              Hanoi, Vietnam surprised me for its French influence, gorgeous buildings and side streets, and absolute obsession with coffee.
              If Wellington was in Asia, it would be Hanoi.
            </p>
            <p>
              We spent a week in Hanoi, exploring cafes, trying egg coffee, stuffing ourselves with spring rolls, then took an overnight train to Sapa where we began a three day trek through the rice fields.
              Every night we stayed at a different home-stay, finishing with a hot shower and buffet breakfast in our hotel.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Our guide, Co, was incredile and did the whole trek in bright yellow gumboots, cheerfully chatting to us about her life, local traditions, and Vietnam in general.
              Who knew there are 54 different languages spoken in Vietnam?
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              Two days, one motorbike ride, one hot herbal tub, and many, many slides bum first down mountains, and we had finished our time in Vietnam.
              Next stop, Japan!
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Vietnam
