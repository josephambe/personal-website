import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import NavHackathon from '../components/NavHackathon'
import HeaderHackathon from '../components/HeaderHackathon'
import pic04 from '../assets/images/pic04.jpg'
import home_duck from '../assets/images/home_duck.png'
import HeaderProjects from '../components/HeaderProjects'

class Contact extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <HeaderContact/>


        <div className="major">

          <div className="article">
            <h1>jamber919@gmail.com</h1>
            <li><a href="https://github.com/josephambe" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            {/*<li><a href="mailto:jamber919@gmail.com?subject=Let's catch up!" className="icon fa-envelope alt"><span className="label">Mail</span></a></li>*/}
            <li><a href="https://www.linkedin.com/in/amber-joseph/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
