import React from 'react'
import Helmet from 'react-helmet'
// import { render } from 'react-dom';
// import Gallery from 'react-grid-gallery'
// import PropTypes from 'prop-types';
;

import Layout from '../components/layout'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'


import logo from '../assets/images/logo.png'
import logoWink from '../assets/images/logo_wink.png'
import HeaderProjects from '../components/HeaderProjects'


class Projects extends React.Component {


  render() {

    return (
    <Layout>
      <Helmet title="Generic Page Title"/>
      <HeaderProjects/>
      <div id="projectList">
        <section id="content" className="projectList">
          <div className="project-container">
            <div className="project-item">
              <div className="content">
                <img src={pic01} alt="" />
                <overlay><button><a href="./blog1" className="icon" title="User Profile">PIC01</a></button></overlay>
              </div>
            </div>
            <div className="project-item">
              <div className="content">
                <img src={pic02} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">SINGAPORE</a></button></overlay>
              </div>
            </div>
            <div className="project-item">
              <div className="content">
                <img src={pic04} alt="" />
                <overlay><a href="/hackathon" className="icon" title="User Profile"><button>SKYDIVING</button></a></overlay>
              </div>
            </div>
            <div className="project-item">
              <div className="content">
                <img src={pic03} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">SINGAPORE</a></button></overlay>
              </div>
            </div>
            <div className="project-item">
              <div className="content">
                <img src={pic05} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">SINGAPORE</a></button></overlay>
              </div>
            </div>
          </div>
        </section>
      </div>
  </Layout>
  )
  }
}
export default Projects

