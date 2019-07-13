import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/outward_bound/amber_sail.jpg'
import pic02 from '../assets/images/spotted/outward_bound/group_tramp.jpg'
import pic03 from '../assets/images/spotted/outward_bound/group_sail.jpg'
import bgPic from '../assets/images/spotted/outward_bound/view.jpg'

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
            <h1>Outward Bound</h1>
            <h2>June 2018</h2>
            <p>
              Outward Bound is something I would recommend to any person of any age at any stage in their life.
              It will challenge you physically, mentally, and emotionally.
              It is a fantastic experience and I cannot believe how lucky I am to have done it.
            </p>

            <p>
              A huge shout out to the most amazing Batten watch I could have asked for; Blake, Claudia, Isla, Logan, Issac, Melissa, Helen, Alice, Leroy, and Hugo.
              And of course to Tui and Greg, the most fantastic role models and instructors ever.
              For now I'll just leave my favourite quote of the trip: "You can be cold, wet, and miserable, or you can be cold and wet. The miserable part is completely optional."
              If you want all the dirty details on values, life goals, what is important to me, and my letter to future Amber, you won't find it here; that's all carefully stored away in my Outward Bound pack.
            </p>
            <p>
              The main takeaway here is that Outward Bound is three of the most intense and fun weeks of my life.
              It introduced me to gratefulness, stoicism, and just reminded me of the importance of adventure in the outdoors.
              Remember stress is an emotion not a reaction, and don't forget to paint "There is more in you" on the back of your toliet door.
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

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
