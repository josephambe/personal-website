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


import HeaderSpotted from '../components/HeaderSpotted'
import logo from '../assets/images/logo.png'
import logoWink from '../assets/images/logo_wink.png'


class Spotted extends React.Component {


  render() {

    return (
    <Layout>
      <Helmet title="Generic Page Title"/>
      <HeaderSpotted/>
      <div id="gallery">
        <section id="content" className="gallery">
          <div className="grid-container">
            <div className="grid-item">
              <div className="content">
                <img src={pic01} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">PIC01</a></button></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={pic02} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">SINGAPORE</a></button></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={pic04} alt="" />
                <overlay><a href="/hackathon" className="icon" title="User Profile"><button>SKYDIVING</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={pic03} alt="" />
                <overlay><button><a href="#" className="icon" title="User Profile">SINGAPORE</a></button></overlay>
              </div>
            </div>
            <div className="grid-item">
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

