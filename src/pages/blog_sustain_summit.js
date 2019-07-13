import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/sustainability_summit/volunteers.jpg'
import pic02 from '../assets/images/spotted/sustainability_summit/selfie.jpg'
import bgPic from '../assets/images/spotted/sustainability_summit/conference.jpg'

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
            <h1>Summit on the Sustainable Development Goals</h1>
            <h2>2018, Volunteering Role</h2>
            <p>
              Before I volunteered for the Summit on the Sustainable Development Goals, I really had no idea what the SDG's were.
              And because I was a last minute call-in volunteer I was informed literally the night before that I had to memorise them all because we would be running workshops on them for the participants.
              So in that sense, I learnt about them pretty damn quickly.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              What I learnt was that this SDG's (Sustainable Development Goals) were 17 goals signed off by all governments in the United Nations in 2015 to accomplish by 2030.
              The thing is, these goals are huge. I'm talking, save the planet huge. They need to be there. They are important to have.
              But they are going to take way more than just governmental efforts to actually be achieved.
              The require the combined input of business, public, government, education, and academia.
              Just to give you an idea of the level of these goals, some of them include "No Poverty", "Affordable and Clean Energy", and "Zero Hunger."
              These aren't just boxes to be ticked. These are seriously ambitious. And for good reason.
            </p>

            <p>
              The purpose of the summit was to inspire people to take action on how they can contribute to achieving the SDG's and also to provide the participants an opportunity to brainstorm ideas amoungst themselves on how businesses they lead, teams they manage, or even their individual actions, can be adjusted or improved to work towards achieving these global objectives.
              As a volunteer, my role was to facilitate these discussions and help engage participants in activities to get them thinking about innovative solutions and strategies.
              Many of the participants were naturally passionate about the SDG's (hence them being there) so some of these conversations got pretty heated.
              However, it was all in the name of a good cause so eventually everyone was able to agree on a final idea.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>
              To make things a bit more interesting, a competition was held to decided on the best idea through a 3min pitch and audience vote.
              The winner (a website tracking business sustainability) received funding in order to help them actually implement their concept.
            </p>


            <p>
              Overall, I was really glad that I was given the opportunity to attend this Summit. I learnt a lot from it, and was inspired to think more about how I can make changes in my life and perhaps the career I choose to help move the world towards a time where all of the SDG's are reached.
              Because that would be a pretty darn good world to live in.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
