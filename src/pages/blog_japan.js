import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/japan/golden.jpg'
import pic02 from '../assets/images/spotted/japan/arch.jpg'
import pic03 from '../assets/images/spotted/japan/crowd.jpg'
import bgPic from '../assets/images/spotted/japan/tower.jpg'

class Japan extends React.Component {

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
            <h1>Japan</h1>
            <h2>Christmas 2018</h2>
            <p>
              After the constant humidity of Singapore, winter in Japan was a welcome change. I could actually wear jeans!
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Japan was full of morning walks along the river and an incredible range of food.
              From tofu icecream that you can hold upside down in a cone, to octopus stuffed with quail egg on a stick, and massive bowls of udon noodles, there was no shortage of interesting food to try.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              We visited the Fushimi Inair shrine which is famous for the thousand gates.
              I can’t say for certain if there was exactly 1000, but the walk to the top of mountain certainly took most of the day.
              It was worth it though for the golden light on the way down.
            </p>

            <p>
              We spent most of our time in Kyoto, with a day trip to Nara feeding the deer and wandering around the simply huge temples.
              Ticked off visitng the Todai-ji, the biggest wooden structure in the world, and was fortunate enough to see some of the Japense gardens which have been filling up my pinterest board in person.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              I then took the bullet train (whohoo!) up to Tokoyo where I stayed a week over New Years.
              And yes, I did countdown to 2019 at Shibuya crossing.
              It was also really cool to be able to catch up with some friends from Outward Bound in Japan (see my Outward Bound blog post!).
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Japan
