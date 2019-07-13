import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/tea_tech/white.jpg'
import pic02 from '../assets/images/spotted/tea_tech/group.jpg'
import bgPic from '../assets/images/spotted/tea_tech/black.jpg'

class Hackathon extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bgPic} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/spotted" className="icon fa-long-arrow-left">SPOTTED</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>Tea and Tech</h1>
            <h2>Founding my own clothing company</h2>
            <p>
              At the start of every less, the world feels full of possibilites. Uni hasn't started, you have loads of free time, and you start to really think about what it is you would love to do this year.
              Completely disregarding the amount of time study will suck in, the other activities you've already committed to, you decided it would be awesome to start a clothing line that targets tech peps and donates all of its money to a different charity every month.
              And so 'Tea & Tech' clothing began.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <p>
              The original idea was to release a new t-shirt design every month with a different slogan.
              Some of my favourites lined up were 'Software and Smoothies', 'Python and Pancakes', and 'Hacking and Hummus'.
              In a kind of tribute to Wellington culture, I was trying to re-shape the energy drinks and dorito image of coders and remind people that programming is actually a very stylish and modern industry.
            </p>


            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>
              Unfortunately, our supplier literally ran out of our t-shirts just after we had taken orders and paid, so we had to wait 3 months for the new shirts to come in from India.
              This completely destroyed the 'release a new shirt every month' concept and with the hassle of refunding some people who didn't want to wait, and the introduction of uni work again (surprise!), I decided to just cap it after this one release.
            </p>

            <p>
              Overall, I raised just under $300 for the Women in Tech group at Victoria University whose work I love and support wholeheartedly, so in the end it was all worth it.
              And you never know, I might just order a few personalised t-shirts for a couple of my friends in the years to come.
              The biggest takeaway from this project however was that it really isn't that hard to make your own money on your own steam.
              This inspired me to do something creative to raise money to a different organisation every year. It's a great exercise in business, innovation, charity, and just a general good time.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
