import React from 'react'
import Helmet from 'react-helmet'
// import { render } from 'react-dom';
// import Gallery from 'react-grid-gallery'
// import PropTypes from 'prop-types';
;

import Layout from '../components/layout'
import gcsb from '../assets/images/spotted/gcsb/gcsb.jpg'
import pmsa from '../assets/images/spotted/pmsa/pic01.jpg'
import mural from '../assets/images/spotted/mural/mural03.jpg'
import sculpture from '../assets/images/spotted/sculpture/fruitMaking02.jpg'
import artBoard from '../assets/images/spotted/art_board/painting06.jpg'
import painting from '../assets/images/spotted/painting/leaves.jpg'


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
                <img src={gcsb} alt="" />
                <overlay><a href="./blog_gcsb" className="icon" title="User Profile"><button>GCSB Scholarship</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={pmsa} alt="" />
                <overlay><a href="./blog_pmsa" className="icon" title="User Profile"><button>PMSA Scholarship</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={mural} alt="" />
                <overlay><a href="./blog_mural" className="icon" title="User Profile"><button>Outdoor Mural</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={sculpture} alt="" />
                <overlay><a href="./blog_sculpture" className="icon" title="User Profile"><button>Sculpture</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={artBoard} alt="" />
                <overlay><a href="./blog_art_board" className="icon" title="User Profile"><button>Art Board</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={painting} alt="" />
                <overlay><a href="./blog_painting" className="icon" title="User Profile"><button>Painting</button></a></overlay>
              </div>
            </div>
          </div>
        </section>
      </div>
  </Layout>
  )
  }
}
export default Spotted

