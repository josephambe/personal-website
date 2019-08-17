import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/singapore/foodTour.jpg'
import pic06 from '../assets/images/spotted/singapore/long_campus.jpeg'
import pic07 from '../assets/images/spotted/singapore/nus.JPG'

import pic02 from '../assets/images/spotted/singapore/flag.jpg'
import pic04 from '../assets/images/spotted/singapore/ubun.jpg'
import pic03 from '../assets/images/spotted/singapore/marina.jpg'
import pic05 from '../assets/images/spotted/singapore/universal.jpg'
import bgPic from '../assets/images/spotted/singapore/long_campus.jpeg'

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
            <h1>Singapore</h1>
            <h2>Studying at Asia's Highest Ranked University</h2>
            <p>
              Funded by the Prime Minister's Scholarship to Asia, I studied for one academic year at the National University of Singapore, Asia's highest ranked university.
              This was by far my hardest academic challenge to date; it wasn't so much of a Singapore life-culture shock, but more of their work-life culture that really surpised me.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              What I thought was hard work in New Zealand had nothing on the way these students were studying. Till the earliest hours of the morning, running on prata and coffee, student life in Singapore is competitive, stressful, and difficult.
              However, I learnt more than I ever have and have come back to my studies in New Zealand far more confident in my own technical abilities.
              I've started taking on personal projects which I didn't think were in my scope of capabilities and have learnt that, given enough time, I can pretty much learn anything.
              Even Linear Algebra II (whose textbook cover is now framed on my wall as tribute to the hardest paper I've ever done).
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic07} alt="" /></span>
            </section>
            <section id="content" className="main">
              <span className="image main"><img src={pic06} alt="" /></span>
            </section>

            <p>
              Outside of the student culture, the country of Singapore itself is amazing. It is an incredible place to explore, full to the brim of difference cultures, architectures, food, traditions, and events.
              There is always something on, some new club opening, or some tech talk to go to.
              The weather is humid to the point where I sometimes feel like I'm breathing my water than air but I never once wore long pants the entire time I was there which, from a winter Wellington perspective now, seems hard to imagine.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>
              The biggest advantage of living in Singapore as an exchange student however, was the opportunities it gave you to travel.
              It's not often that I had really thought about just how isolated New Zealand really is. We are pretty much a dead-end in terms of travel destinations.
              In contrast, South East Asia seems to have no end.
              Being in Singapore gave you a great chance to meet people of all different cultures and learn about a wide variety of countries.
              From there you could decided where you would like to travel; and if you're lucky, grab a $25 flight to Malaysia for the weekend.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>
              Being in Singapore taught me a lot. It taught me about my own strengths, weaknesses, values, beliefs, and what I can really achieve if I put my mind to it.
              University at Wellington now seems more fun than tasking, and my mentality has gone from being overwhelmed by information to 'bring it on, I'm excited to learn something new.'
              I will forever miss the friends I made in Singapore and the wide variety of food. $4 was really treating yourself to a special meal at the student canteen.
              Thank you Singapore for the most incredible ten months. I'll be back to visit soon.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
