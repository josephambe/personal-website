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
            <p>For my Level 3 NCEA Art Board I decided to pursue an interest in the genetic enhancement of food. What was our obsession with perfect food?
            What are the consequences of having food from all countries, from all seasons, available in our supermarkets all year round?
            When does food stop becoming food and start becoming the result of lab work? Is that line already crossed? Does that line even exist?
              What chemicals are in our foods and how is that affecting our health?
            </p>

            <p>To explore this idea I turned to sculpture. This was not really part of my course (which was Painting by name), but my teachers were very supportive of me trying new things outside of the realm/medium of paint.
              My first idea with sculpture was to try and visually show the amount of fabrication and stitching together of materials to make our seemingly 'natural' fruits.
              To try and show the human influence that goes into food from sprays, chemical enhancements, and other unnatural methods. What may seem natural has not always had a natural growing process.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <p>I photographed these new fruits in natural environments to highlight their un-naturalness. I made them by peeling oranges, lemons, and even watermelons (not very successful), and then hand stitching the skins back together around polystyrene balls.
              Finally, I finished off my 'frankin-fruit' with nails, pins, staples, and string.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>The next stage of my research into genetically perfect foods was exploring societies obsessive disgust with mould.
              Mould can be smelly, gross, and poisonous. It is generally associated with waste and dirty/unclean environments.
              But I remember reading an article about a McDonalds burger left in car for 6 years with no signs of mould or decay.
              6 years! The idea that this was less repulsive than a mouldy piece of naturally grown fruit baffled and intrigued me.
              Perhaps I could leave my 'frakin-fruit' which are meant to be a symbol of genetically enhanced food and let them go mouldy.
              Perhaps that would confront my viewers and really force them to ask themselves why it is that they are so uncomfortable with the idea of mould, but will eat food they know contains chemicals that could be dangerous for them without question.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>

            <p>Inspired and motivated by my frankin-fruit, I decided that I wanted to continue my exploration of sculpture to show how crazily obsessed we have become with perfect food.
              Hundreds of tons of food that is still fine to eat is discarded because of simple blemishes or deformities that are completely natural. And in a bizzare turn of events, food that is more natural (organic) and has these deformities has become more expensive.
              To try and show the excessive nature of this trend, I made a giant cherry out of a swiss ball. The idea was for it to be too big, too perfect, too round, too shiny. Basically to emphasise its unnaturalness.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <p>I photographed this cherry by bundling it into a friends car during our Art period and sneaking out of school to a nearby park to take some quick photos.
              Unfortunately it was also semi raining at this time so we really had to be quick.
              I'm happy with the final images but upon reflection would have liked to try photograph it in a kitchen setting as well.
              I made the stalk our of an old hose pipe.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>

            <p>I also used the photographs of the cherry I had taken in some painting and pencil collages, as I was very inspired by similar artists at the time who used multi-media.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic06} alt="" /></span>
            </section>

            <p>The final play I had with sculpture while exploring this topic was inspired by Wayne Thiebaud's paintings. I enjoyed painting in his style so much that I decided to try and visually create his work in 3D.
            The idea was to have rows and rows of cakes in a room, much like his paintings, however I ran out of time and materials.
            I experimented with several ways of making cakes (that wasn't actual cake) but in the end found that plastering putty and a palette knife worked best.
            </p>
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
