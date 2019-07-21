import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/space_panel/apollo.jpg'
import bgPic from '../assets/images/spotted/space_panel/milkyway.jpg'

class Space_Panel extends React.Component {

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
            <h1>Apollo 11, 50th Anniversary – Panel Discussion</h1>
            <h2>Space Place Wellington, 20th July, 2019</h2>
            <p>
              Last night Daniel (NZSSA Wellington President) and I (NZSSA National President) brought down the average age of the room in a panel discussion on how Apollo 11 impacted our lives.
              This was part of the 50th Anniversary for the moon landing, easily one of the most uniting and memorable technological achievements of all time.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              It was a really great event to be a part of, and we were both extremely grateful for the chance to be able to share our thoughts on how the space landing has changed technology and, for a brief period, united humanity.
              < br />< br />
              One of the highlights was another panelist, Frank, bringing along an actual piece of the lunar module that we could pass around at touch.
              It was incredibly light, and just reminded you what an achievement the entire event was.
              < br />< br />
              After the panel, we all headed to a NZSSA ‘Party like it’s 1969’ event with pizza, space music, drinks, balloons, chips, and footage of the actual moon landing playing in the background.
              It was a super spacey evening filled with talk about travelling to Mars, conspiracy theories, Elon Musk, and I loved it.
            </p>


          </div>
        </div>
      </Layout>
    )
  }
}

export default Space_Panel
