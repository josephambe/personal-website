import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/pmsa/sing02.jpg'
import pic02 from '../assets/images/spotted/pmsa/sing03.jpg'
import bgPic from '../assets/images/spotted/pmsa/sing01.jpg'

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
            <h1>Prime Ministers Scholarship To Asia</h1>
            <h2>June, 2017</h2>
            <p>Applying for the Prime Ministers Scholarship to Asia (PMSA) was easily one of the best decisions I've made to date.
            The process is long, and there are many, many, many fields to fill out, but it pays off ten-fold.</p>

            <p>The deal was to propose a programe that would strengthen ties between Asia and New Zealand.
              I knew that Asia had a booming tech scene, responsible for some of the greatest innovations and tech minds of the last 20 years.
              I knew nothing of studying in Asia or what to expect when I got there. The furthest I'd been from home was Australia.
            </p>
          {/*<header className="major" style={{paddingTop: "100px"}}>*/}
            {/*<h2>< br />Virtual Realities</h2>*/}
          {/*</header>*/}
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
          </section>
            <p>Choosing a university to study at in Asia was simple. I didn't speak any other language aside from English, so that narrowed the field very quicly.
            I wanted a university where I was challenged more than I was in Wellington, so did a quick Google search of "Asia's top University".
            The National University of Singapore came up and after a bit of research I knew it had a incredible reputation for computer science as well. Perfect.</p>

            <p>From there, I spent over a month working on my application and really putting a lot of thought into why I was applying and what it would mean for my future.
              How would it benefit me? How would it make me a better Software Engineer? What would this mean for working in Wellington (or possibly Asia)?
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <p>I received the email saying that I got the scholarship while at University, and I vividly remember walking towards my friends in the corridor with this huge smile and tears running down my face.
              For the next year I would be studying, fully paid for, in Singapore. One of the top travel desitnations in the world with the opportunity to learn from some of the world's top minds in STEM.
            </p>

            <p>After spending a year in Singapore, I can say it is incredibly diverse in culture, food, and traditions.
              A true melting pot (literally, it is so hot there), Singaporeans seem to face an identity crisis because of the mix of cultures there.
              The things I will miss the most is the location for travel, the friendships between students, the food, and the friendliness of the people.
              I was surprised by the working and student culture there, which is so vastly different to New Zealand it sometimes seems world's apart.
              I can't recommend Singapore enough as a destination to experience a taster of different Asian cultures.
              I absolutely loved my time there and can't wait to explroe more of what Asia has to offer.
            </p>

            <p>See the media release <a href="https://www.beehive.govt.nz/release/talented-new-zealand-students-awarded-prime-minister%E2%80%99s-scholarships" style={{color: "#FFC417"}}>here.</a></p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
