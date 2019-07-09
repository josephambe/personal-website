import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic02 from '../assets/images/spotted/rasnz_2019/selfie.jpg'
import pic01 from '../assets/images/spotted/rasnz_2019/stage.jpg'

import bgPic from '../assets/images/spotted/rasnz_2019/beach.jpg'

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
            <h1>RASNZ 2019</h1>
            <h2>Royal Astronomical Society of NZ Conference</h2>
            <p>
              This year, the RASNZ conference was held in New Plymouth.
              We were lucky enough to experience stunning weather and have a beautiful venue close to the beach;
              close enough for lunchtime walks along the sand contemplating the state and existence of our universe.
              One of my favourite things I get from these conferences is the opportunity to have incredible conversations which a bunch of passionate, intelligent people.
              Just like in 2018, I left inspired, with about 20 new friends and contacts, and with great big grand plans of how to get more students into the space industry.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              The highlights of the conference definetly included seeing Megan, Anushka, and Aayushi do a presentation on the NZSSA Christchurch branch
              (which was inspired by Vee and I'l talk at last years conference!) and discussing the opportunities to study Astronomy at the University of Cantebury.
              I felt like a proud Mum! On top of all this, Aayushi did an amazing speech on her work at the St John Observatory and her studies of galaxies.
              It was so great and so inspiring, that she ended up winning the best talk of the conference!
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              On top of the incredible speakers, locations, and attendees, I have to mention the quality of the dinner.
              It was excellent, and the speech delivered during dessert on the scope of the galaxy really blew me away.
              I left that dinner with an extremely full mind and stomach.
            </p>
            <p>
              Some of the most exciting things to come out of this conference was tentative plans to open a NZSSA branch in Auckland and Queenstown.
              It's fantastic to see that the NZSSA exists for a reason; that it's fulfilling its purpose to give students an opportunity to continue to be inspired and learn how they can contribute to the future of the space industry.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
