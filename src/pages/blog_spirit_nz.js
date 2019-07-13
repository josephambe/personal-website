import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/spirit_nz/boat.jpg'
import pic02 from '../assets/images/spotted/spirit_nz/comb1.png'
import pic03 from '../assets/images/spotted/spirit_nz/nina.jpg'
import pic04 from '../assets/images/spotted/spirit_nz/combGroup.png'
import pic05 from '../assets/images/spotted/spirit_nz/rigging.jpg'
import pic06 from '../assets/images/spotted/spirit_nz/sleeping.jpg'


import bgPic from '../assets/images/spotted/spirit_nz/bums.jpg'

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
            <h1>Spirit of NZ</h1>
            <h2>2015</h2>
            <p>
              I remember being super nervous about signing up for Spirit of NZ.
              Not only was it very expensive (using almost all my savings), but the idea of spending 10 days living on board a full on pirate ship with a bunch of complete strangers?!
              Terrifying. Obviously, this actually turned out to be a fantastic trip. And yes, I did come back wanting to sail around the world for a year.
              It's inspiring okay?
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              I loved being out in the sea every day. We started in Auckland and sailed down to Coromandle, doing the trip back in basically one final day where all of us teenagers had to sail the boat entirely ourselves.
              Every morning we had to get up super early before the sun rose and jump off the side for a couple of laps around the boat.
              It was super cold putting on wet togs every morning but those sunrises were something else entirely.
              Every forth night, we had to do a night watch where we stayed up in groups of two for two-three hours at some point during the night to make sure all was well with the ship.
              To pass the time during these often long hours, there was a doodle book which quickly became an ongoing inside joke with various anonymous entries being talked about the next day.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              As well as our night watch duties, every day we were literally scrubbing the deck. Washing down boats and equipment, cleaning the kitchen, tidying our living quarters.
              We were kept to a very tight schedule which involved a lot of cleaning and organisation.
              On rare moments of downtime, we were sometimes (depending on where we were) allowed to get out the yardie.
              The yardie is this giant swing which goes out over the water from a super high mast and allows for maximum swing.
              There was a super strict rule that you absolutely had to let go of the yardie; broken only once by Alex who decided the drop was a tad higher than he anticipated and came swinging back to the side of the boat to the screams and yells of the rest of the crew.
              He let go on his next swing out. Frankly I think we were scarier than the drop.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <p>
              A few times, we actually went to shore. The first time I believe was roughly 6 days in and we all had jelly legs from being on a boat so long.
              We did a hike up a large hill, then had a camp fire on land. We paddled back to the ship that night through the most stunning glowing water.
              The night was super still and you could see the ripples of your paddles in the phosphorescence in the water.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>
              Easily the greatest shower of my life was on our last day aboard. Up until then, we were all not allowed to have showers which for the most part, was actually fine given the amount of swimming we were doing.
              Because there were so many of us, our showers were strictly timed to two minutes each. I came into that shower with shampoo in one hand, body wash in the other, and came out feeling like an entirely new person.
              It was glorious.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>
            <section id="content" className="main">
              <span className="image main"><img src={pic06} alt="" /></span>
            </section>
            <p>
              If you want to see more, my friend Nina made an absolute stella of a video about it. See below.
            </p>
            <section id="content" className="main">

              <iframe width="640" height="390"
                    src="http://www.youtube.com/embed/LnodgjmKtTs"
                    frameborder="0"/>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
