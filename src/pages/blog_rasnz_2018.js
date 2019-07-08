import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic02 from '../assets/images/spotted/rasnz_2018/group.jpg'
import pic01 from '../assets/images/spotted/rasnz_2018/amber.jpeg'

import bgPic from '../assets/images/spotted/rasnz_2018/rasnz.jpg'

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
            <h1>RASNZ 2018</h1>
            <h2>Royal Astronomical Society of NZ Conference</h2>
            <p>
              Vee and I approached the RASNZ 2018 conference full of anticipation, excitement, and a hint of trepidation.
              The cost was putting a decent dent in our untouched club budget; as we had never been to a RASNZ conference before, we were taking what we believed to be a substantial leap into the dark.
              Fortunately the local Wellington Astronomical Society, run by the fantastic Antony Gomez, was able to contribute to the cost of flights down to Christchurch.
              Still, there remained the $250 tickets (per person) and the accommodation to cover.
              We ran a sausage sizzle at the Kelburn Campus to help, but the majority of it came out of the club budget ...we certainly felt the weight of the investment on the way down!
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Much to our joy, the conference was well worth the trip, time, and money.
              We arrived a day early and left a day late to score the cheapest flight + accommodation combo, so were able to fully immerse ourselves in the Christchurch astronomy scene for the weekend.
              We were fortunate enough to be the first speakers of the whole conference; opening night on Friday found Vee and myself shakily delivering our speech to a packed hall of strangers.
              Little were we to know that later that weekend we would win the prize for best speakers of the conference!
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              The conference brought together a huge range of speakers, from extremely technical talks presented by PHD students studying astrophysicists at Canterbury University, to a fabulous speech on the four ways the universe could end by Katie Mack from North Carolina State University.
              Despite the extremely high level of speeches, my personal highlight from the whole conference was really the culture.
              The community feel of the weekend was warm, inviting, and inclusive.
              Although there is admittedly still a decent way to go in diversity (both in age and culture), there is a distinct sense of optimism moving forward into the future.
              The SWAPA students (high school students sponsored by the society) were especially celebrated.
              It is a rare experience to feel this sort of inclusion between professionals and novices in such a niche area; especially in something as academic as astronomy.
            </p>
            <p>
              Overall, I left the weekend feeling slightly nostalgic and already looking forward to meeting with newly made friends at next year’s conference in 2019.
              If you have a passion for astronomy and the future of New Zealand’s dark skies then I would highly recommend this conference...for those looking for a supportive environment to develop your passion in Space, I can think of no better place to start.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
