import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/marathon/other_races.png'
// import pic03 from '../assets/images/spotted/marathon/2019.jpg'
import bgPic from '../assets/images/spotted/marathon/crowd.jpg'

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
            <h1>Running a Half Marathon</h1>
            <h2>2018, 2019</h2>
            <p>
              In 2018 I ran my first half marathon during Outward Bound with just three weeks of training.
              Crossing that finish line felt so good and it was such a personal achievement that I set myself on the campaign to run a half marathon every year.
              Until I die. Or at least until I can't run anymore.
            </p>

            <p>
              Although I don't have a photo of me after the Outward Bound half marathon, I've included my first official race photo after a 6km run for Around the Bays in Feb 2018 and one of me after my next race in Singapore (10km).
              That one was particularly difficult because of the heat. The race started at 6AM to finish before it got too hot and even then, it was like trying to breathe through 70% water.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <p>
              Time is not a factor for me; I don't care how long it takes me to finish, only that I run one every year without stopping.
              As part of training for the 2019 run, I began running up Polhill in the mornings to catch the sunrise over Wellington.
              This became something I really loved and will definitely continue to do all year round (maybe investing in a head torch for the run up there).
            </p>

            <p>
              Running is now something that I genuinely enjoy and look forward to. And as a super extra bonus, this year my Mum ran it with me!
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
