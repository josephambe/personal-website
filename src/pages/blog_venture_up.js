import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic02 from '../assets/images/spotted/venture_up/flat.jpg'
import pic01 from '../assets/images/spotted/venture_up/interview.png'
import pic03 from '../assets/images/spotted/venture_up/lean_canvas.jpg'
import pic04 from '../assets/images/spotted/venture_up/pitch.jpg'

import bgPic from '../assets/images/spotted/venture_up/start.jpg'

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
            <h1>Venture Up</h1>
            <h2>2017 Cohort</h2>
            <p>
              Over the summer I took part in a business accelerator program called ‘Venture Up’ run by Creative HQ which focused on entrepreneurship and resulted in the creation of a business from scratch over six weeks.
              Only 35 participants aged 18 – 25 were selected from a pool of over 100 candidates nationwide.
              In our final week I pitched our resulting business to investors in a final presentation of 10min on behalf of my team.
            </p>

            <p>
              2017 was the first year Venture Up was held in Auckland. For me this meant moving out of home for the first time and living in Auckland for 6 weeks with a group of complete strangers.
              Our first introductory day was on December 8th where we heard from Bonnie Howland of Indigo & Iris on how she started her entrepreneurship journey along with tips on how to survive an accelerator for our young leaders.
              We then completed a personality Disc profiling session, wrapping up with a talk from Chris Clay on how to deliver a successful elevator pitch.
            </p>

            <p>
              Saturday was one of the most stressful parts of the entire Venture Up journey; forming teams.
              A super weird vibe of selling yourself while trying to interview others and form groups which worked well while having similar interests was a super intense experience.
              Nevertheless, I came out of it extremely happy with my team for the next 6 weeks; Angus, Tom, Steph, Nathan, and I.
              Our last day of the weekend, Sunday, was just as full on.
              Robert Bruce from “Got To Get Out” came to talk about personal brand, and Olivia wrapped up the day with an incredible talk on resilience.
            </p>



            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <p>
              The next time we all caught up was January 14th with the next 5 weeks spread out in front of us.
              In this crash course of a programme, we spent week 2 'GOOB'ing (Get Out Of the Building) to talk to real customers and people on the street.
              Honestly I've never been dismissed or ignored so much in one day. And this is coming from a life with two younger brothers.
              Our assumptions about what would be a good idea and bad idea were crushed, revived, then crushed again.
              We heard from Jenny & Kareena of The Misprint Co, social media guru DK, and finished off the week with a friendly (yet competitive) bowling game.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>
              Week 3 was all about product/ market fit and MVP demos, which was terrifying given our team was still unsure about what we were really doing.
              Still it was great to be inspired by people like Melanie Langlotz of Geo AR Games, Adriana Christie of The Pallet Kingdom, Samantha Jones of Little Yellow Bird, and Robett Hollis of ColabNZ.
              All in all it was a great week with loads more progress, brainstorming, laughs, and arguing. As is the business life.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <p>
              We were headed full steam into week 4 whether we were ready for it or not.
              This week the focus was on marketing and sales, which I personally really enjoyed learning about.
              Barry of the crowdfunding platform PledgeMe talked to us about the different ways to get money from various sources, Pete Russell founder of Ooooby talked about scaling into America, and Anne Walsh of Unilever helped us navigate the difficult world of pricing.
              Mid-week we also did a half-way pitch this week to a room of 50+ stakeholders and members of the public.
              The rest of the week was spent further refining our MVP (we had decided on a tourism expansion model for small NZ businesses).
              We took a field trip to AR/VR Garage, a co-working space, heard from Creative HQ’s Nick Churchouse about the art of good pitching, and finally from law firm Lowndes Jordan on the legal matters of starting your own business.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>
              Week 6 was the last week and really crunch time. In the end, I pitched on behalf of my time and in all honesty, after all the weeks of work and preperation, the pitch was a complete disaster.
              Thinking about it now still makes me cringe. I forgot completely what I was saying, stumbled through my lines, and paused for long periods of awkward silences.
              The next year, when I went to watch the 2018 pitching session I noticed that there were no individual pitchers. At least my legacy lives on somehow!
              But out of my train-wreck of a presentation, I was able to learn some valuable lessons about what works for me in terms of public speaking.
              Memorising lines is definitely not my way to go and I have more fun when I am just able to relax and be myself.
              It has not put me off public speaking at all; in many ways I am even more eager to find more opportunities to present, pitch, and host.
              The worst has already happened and I survived. Bring it on.
            </p>
            <p>
              My time with Venture Up has shown me that the fast-paced world of start up’s, specifically in the tech industry, is where I want to
              be.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
