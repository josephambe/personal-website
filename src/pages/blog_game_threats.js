import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic02 from '../assets/images/spotted/game_threats/g1.jpg'
import pic01 from '../assets/images/spotted/game_threats/g2.jpg'
import pic03 from '../assets/images/spotted/game_threats/g3.jpg'

import bgPic from '../assets/images/spotted/game_threats/background.png'

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
            <h1>Game of Threats</h1>
            <h2>Cyber Security Workshop</h2>
            <p>
              Game of threats was a Cyber Security workshop hosted by PowerCo through PWC which I was fortunate enough to attend as an intern.
              It was set up in a spare conference room with two screens and panels that can’t see each other (battle ships style) where one side is the company (PowerCo) and the other side is the hackers (National Intelligence or Organized Crime).
              Our group was then split roughly into 2 teams, around 6 each.
              One team was the hackers, the other team the company. It was then the job of the hackers to (you guessed it) hack into PowerCo.
              The company team's job was to defend themselves against the hackers (ie. be on the responsive).
              In both rounds, the teams who were PowerCo lost which did not bode well for reality.
            </p>

            <p>
              From this workshop I learnt about the Social Engineering that goes into hacking.
              They talked about one simulation where they test a company’s security by dropping a load of USB sticks branded with the company’s logo in a car park.
              People pick them up and plug them into their computer intending to return it to their “user”.
              On the USB is one file, with a 100% success rate of being opened. It’s named “CEO monthly salary rates.”
              Once that file is open, security is breached.
              I found this super interesting as it included a human element and education into security that I didn't anticipate.
              Of course, now that it has been pointed out, it seems obvious that the weakest link in any tech system is the human aspect and the best way to combat that (aside from removing it all together) is to educate the humans on how to be safe online habits.
            </p>

            <p>
              This was a job that I hadn't really considered before so obviously I spent the rest of the day looking up job description/salary/career options of security analyst.
              Needless to say, the prospects are pretty good.
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
