import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/sculpture/fruit01.jpg'
import pic02 from '../assets/images/spotted/sculpture/fruitMaking01.png'
import pic03 from '../assets/images/spotted/sculpture/fruitOld_04.png'
import pic04 from '../assets/images/spotted/sculpture/cherryMaking.png'
import pic05 from '../assets/images/spotted/sculpture/cherry01.jpg'
import pic06 from '../assets/images/spotted/sculpture/cherryArt.png'
import pic07 from '../assets/images/spotted/sculpture/cakes.png'




import bgPic from '../assets/images/spotted/sculpture/fruit02.jpg'

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
            <h1>Sculpture</h1>
            <h2>Genetic enhancement of food.</h2>
            <p>This was a mural I did in my own time in my last year of High School (2016).
              During this time, I was also Head Girl of Palmerston North Girl's High School, and working on my final Level 3 Art Board which I recieved a NCEA Excellence Scholarship for.
              I was inspired by works I had seen in Australia and at the time of starting, struggled with painting with realism so wanted another way to paint people which was fun and appealing.
            </p>
          {/*<header className="major" style={{paddingTop: "100px"}}>*/}
            {/*<h2>< br />Virtual Realities</h2>*/}
          {/*</header>*/}
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
          </section>
            <p>To paint this mural I first went out during a lunchtime and photographed a bunch of students until I found a photo which I really liked.
              I enjoyed the laughter and joy caught in this photo, so went with that.
              I flirted with the idea of adding a fourth person to represent the four house colours, but in the end decided that I just liked this photo too much.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>Physically painting this was very time consuming and absorbed almost all my weekends and evening. Each triangle had to be taped on all sides to ensure straight lines and then painted with several layers of paint to be thick enough.
              This meant that the mural came together in a rather disjointed way. I used a heat gun to dry the paint quicker and also semi gas myself in the small shed I was working in.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <p>I'm very proud of the final result, and still aim to paint more large scale works like this one. I was working on this mural with one of my fellow art students, Kate, who mentioned once we had finished the entire mural "Oh, THAT'S what it's meant to look like."
              Turns out she had no idea of the vision I had in my head...I'm forever grateful for her trust in my crazy ideas! Also huge thanks to the Art Department for trusting me with such a large work, all of the materials I used, and basically letting me live in the shed out the back.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>I'm very proud of the final result, and still aim to paint more large scale works like this one. I was working on this mural with one of my fellow art students, Kate, who mentioned once we had finished the entire mural "Oh, THAT'S what it's meant to look like."
              Turns out she had no idea of the vision I had in my head...I'm forever grateful for her trust in my crazy ideas! Also huge thanks to the Art Department for trusting me with such a large work, all of the materials I used, and basically letting me live in the shed out the back.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>

            <p>I'm very proud of the final result, and still aim to paint more large scale works like this one. I was working on this mural with one of my fellow art students, Kate, who mentioned once we had finished the entire mural "Oh, THAT'S what it's meant to look like."
              Turns out she had no idea of the vision I had in my head...I'm forever grateful for her trust in my crazy ideas! Also huge thanks to the Art Department for trusting me with such a large work, all of the materials I used, and basically letting me live in the shed out the back.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic06} alt="" /></span>
            </section>

            <p>WAYNE THIEBAUD</p>


            <section id="content" className="main">
              <span className="image main"><img src={pic07} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
