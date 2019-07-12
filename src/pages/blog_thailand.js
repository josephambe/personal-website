import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/thailand/boat.jpg'
import pic02 from '../assets/images/spotted/thailand/market.jpg'
import pic03 from '../assets/images/spotted/thailand/beach.jpg'
import bgPic from '../assets/images/spotted/thailand/phiphi.jpg'

class Thailand extends React.Component {

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
            <h1>Thailand</h1>
            <h2>Bangkok, Phuket</h2>
            <p>
              Looking back on Thailand brings memories of charred corn on the cob, flooded streets in Bangkok, wet markets filled with seafood, and temples galore.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Our trip consisted of 2 days in Bangkok, then a flight to Cambodia (see ‘Cambodia’ blog post), and finally 3 days at Phuket Beach.
              I really enjoyed my time in Bangkok, although it’s not somewhere I’d stay for a long period of time.
              We took at private longboat tour down Chao Phraya River and visited Wat Pho (Temple of the Reclining Buddha), my favourite temple out of the lot.
              We also spent a very long day exploring Chatuchak, the world’s largest market where you can find anything and everything.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              Patony Beach was super touristy but not entirely my cup of tea.
              However, the day tour around Phi Phi Islands and authentic Thai massage were both things I ticked off my bucket list and would recommend to any friend.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              Overall, the stand out in Thailand for me was abundance of street food and markets; easily the best way to spend a day, trying local fruits, and window shopping the hundreds of tiny stalls.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Thailand
