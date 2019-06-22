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

          {/*<section id="first" className="main special">*/}
            {/*<header className="major">*/}
              {/*<h2>WHERE NEXT</h2>*/}
            {/*</header>*/}
            {/*<ul className="features">*/}
              {/*<li>*/}
                {/*<span className="icon major style1 fa-code"></span>*/}
                {/*<h3>Ipsum consequat</h3>*/}
                {/*<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<span className="icon major style3 fa-copy"></span>*/}
                {/*<h3>Amed sed feugiat</h3>*/}
                {/*<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<span className="icon major style5 fa-diamond"></span>*/}
                {/*<h3>Dolor nullam</h3>*/}
                {/*<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>*/}
              {/*</li>*/}
            {/*</ul>*/}
            {/*<footer className="major">*/}
              {/*<ul className="actions">*/}
                {/*<li><Link to="/generic" className="button">Learn More</Link></li>*/}
              {/*</ul>*/}
            {/*</footer>*/}
          {/*</section>*/}

          <section id="second" className="main special">
            <header className="major">
              <h2>WHAT NOW</h2>
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
                <li><Link to="/generic" className="button">My Hardest Project to Date</Link></li>
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
                <p>1. The future of Space! In 2018 I co-founded…..oh you want to know more? Read about it here.<br /><br />
                  2. UI and UX design process is my current obsession. Yummy designs and intuitive use. See my latest project in this area!<br /><br />
                  3. Also Microsoft recently announced they are storying big data in DNA?!</p>
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
