import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/profile1.png'

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
                  <p> Originally, the plan was to study Fine Arts and Painting. Instead, one afternoon in 2016, I announced to a shocked family audience that I was headed to Victoria University of Wellington to pursue a degree in Software Engineering.</p>
                  <p>I had realised coding is the most effective way to scale and share ideas with the world.</p>
                  <p>And despite the perceived ‘I’m a coder’ image, I was thrilled to discover that computer science is not only a great creative outlet, but still let me work in teams, pitch ideas that excite me, and ultimately continue writing a lifelong plot to improve the world.</p>
                {/*<ul className="actions">*/}
                  {/*<li><Link to="/generic" className="button">Learn More</Link></li>*/}
                {/*</ul>*/}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>WHERE NEXT</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>WHAT NOW</h2>
              <p>STUDY</p>
            </header>
            {/*<ul className="statistics">*/}
              {/*<li className="style1">*/}
                {/*<span className="icon fa-code-fork"></span>*/}
                {/*<strong>5,120</strong> Etiam*/}
              {/*</li>*/}
              {/*<li className="style2">*/}
                {/*<span className="icon fa-folder-open-o"></span>*/}
                {/*<strong>8,192</strong> Magna*/}
              {/*</li>*/}
              {/*<li className="style3">*/}
                {/*<span className="icon fa-signal"></span>*/}
                {/*<strong>2,048</strong> Tempus*/}
              {/*</li>*/}
              {/*<li className="style4">*/}
                {/*<span className="icon fa-laptop"></span>*/}
                {/*<strong>4,096</strong> Aliquam*/}
              {/*</li>*/}
              {/*<li className="style5">*/}
                {/*<span className="icon fa-diamond"></span>*/}
                {/*<strong>1,024</strong> Nullam*/}
              {/*</li>*/}
            {/*</ul>*/}
            <p className="content">
              • Studying towards a Bachelor of Software Engineering at Victoria University of Wellington. < br />< br />
              • Graduation date Nov, 2020.< br />< br />
              • Spent one year studying at Asia’s highest ranked University.  Read more.< br />< br />
              <header className="major">
                <p>TECHNICAL</p>
              </header>
              Outside of my studies, I have been independently improving my technical skills by participating in various hackathons and personal projects.< br />
              I have experience using languages such as Java, HTTP, C, C+, Python, and React.< br />< br />
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
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
