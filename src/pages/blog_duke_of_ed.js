import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/duke_of_ed/group.jpg'
import pic02 from '../assets/images/spotted/duke_of_ed/powel.jpg'
import pic03 from '../assets/images/spotted/duke_of_ed/tkd.jpg'
import bgPic from '../assets/images/spotted/duke_of_ed/sunrise.jpg'

class Duke_of_Ed extends React.Component {

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
            <h1>Duke of Edingburgh</h1>
            <h2>Bronze, Silver, Gold</h2>
            <p>
              The Duke of Edinburgh programme is a global certificate which requires participants (aged 14-24) to complete a set number of regular hours learning a skill, doing a physical activity, volunteering, and going on an adventurous journey.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              In my case, this meant that I learnt piano up to Grade 8, did TaeKwon Do to Blue Belt, red stripe (earning the title of ‘Best Blue Belt in Oceania’ in 2016), volunteering at the SPCA, Trade Aid, and as a babysitter to struggling parents over five years.
              I also have completed Bronze, Silver, and Gold Outdoor Survival Training, and helped organise over nine tramps around the North Island which I participated in.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              Duke of Ed taught me a lot about what we really need to survive, how much there is to be grateful for, and just that the outdoors can be a whole lot of fun with a group of friends.
              Some highlights included going on Spirit of NZ (see blog post!), and tramping the Tararua ranges for up to five days in a row.
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

export default Duke_of_Ed
