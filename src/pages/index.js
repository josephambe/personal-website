import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Nav from '../components/Nav'
import pic01 from '../assets/images/profile1.png'
import pic02 from '../assets/images/profile2.png'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>WHY SOFTWARE</h2>
                </header>
                <p>Originally, the plan was to <h2>study Fine Arts and Painting.</h2>Instead, one afternoon in 2016, I announced to a shocked family audience that I was headed to Victoria University of Wellington to pursue a degree in Software Engineering.
                  < br />I had realised coding is the most effective way to <h2>scale and share ideas with the world. </h2>
                And despite the perceived ‘I’m a coder’ image, I was thrilled to discover that computer science is not only a great creative outlet, but still let me work in teams, pitch ideas that excite me, and ultimately continue writing a lifelong plot to improve the world.
                </p>
                {/*<ul className="actions">*/}
                  {/*<li><Link to="/generic" className="button">Learn More</Link></li>*/}
                {/*</ul>*/}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>WHAT NOW</h2>
            </header>

            <p className="content">
              <header className="major">
                <p>STUDY</p>
              </header>
              • Studying towards a Bachelor of Software Engineering at Victoria University of Wellington. < br />< br />
              • Graduation date Nov, 2020.< br />< br />
              • Spent one year studying at Asia’s highest ranked University.  Read more.< br />
              <header className="major">
                <p>TECHNICAL</p>
              </header>
              Outside of my studies, I have been independently improving my technical skills by participating in various hackathons and personal projects.< br />< br />
              I have experience using languages such as Java, HTTP, C, Python, and React.< br />< br />
              <ul className="actions">
                <li><Link to="/project_mentor_me" className="button">My Hardest Project to Date</Link></li>
              </ul>
              <header className="major">
                <p>AWARDS</p>
              </header>
              2019 - Oceania Winner of Toptal Scholarship< br />< br />
              2018 - Prime Ministers Scholarship to Asia, valued $12,500< br />< br />
              2017 - Deans List Recipient< br />< br />
              2017 - GCSB Scholarship, valued $10,000< br />< br />
              2016 - VUW Excellence Scholarship, valued $5,000< br />< br />
              2016 - Julia Wallace Scholarship, valued $6,000< br />< br />
              2016 - Gold Duke of Edinburgh< br />< br />
              2016 - NZQA Painting Scholarship, valued $500< br />

            </p>
            <footer className="major">

            </footer>
          </section>

          <section id="cta" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>WHERE NEXT</h2>
                </header>
                <span className="image"><img src={pic02} alt="" /></span>
              </div>
              <div className="content">
                <header className="major">
                  <p>CAREER GOAL</p>
                </header>
                <p>Demystify technology and bridge the gap between IT and business strategy by providing innovative solutions that build better companies.</p><br />
                <header className="major">
                  <p>I'M EXCITED ABOUT</p>
                </header>
                <p>1. Salesforce! I founded NZs first student Salesforce group and am doing my Software Engineering thesis on it.<br /><br />
                  2. Becoming better at public speaking. Combining sales and tech? <br /><br />
                  3. Drones instead of fireworks ?! See the New Year celebration in China.</p>
              </div>
            </div>

            <footer className="major">
              <ul className="actions">
                {/*<li><Link to="/generic" className="button special">Get Started</Link></li>*/}
                {/*<li><Link to="/generic" className="button">Learn More</Link></li>*/}
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
