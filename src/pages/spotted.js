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
import webstock from '../assets/images/spotted/webstock/webstock02.jpg'
import tea_tech from '../assets/images/spotted/tea_tech/group.jpg'
import powerco from '../assets/images/spotted/powerco/interns.jpeg'
import kiwiRuby from '../assets/images/spotted/kiwi_ruby/room.jpg'
import marathon from '../assets/images/spotted/marathon/2019.jpg'
import outward_bound from '../assets/images/spotted/outward_bound/group_sail.jpg'
import spirit_nz from '../assets/images/spotted/spirit_nz/nina.jpg'
import venture_up from '../assets/images/spotted/venture_up/pitch.jpg'
import sustainability_summit from '../assets/images/spotted/sustainability_summit/conference.jpg'
import game_threats from '../assets/images/spotted/game_threats/screen.jpeg'



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
            <div className="grid-item">
              <div className="content">
                <img src={webstock} alt="" />
                <overlay><a href="./blog_webstock" className="icon" title="User Profile"><button>Webstock 2019</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={tea_tech} alt="" />
                <overlay><a href="./blog_tea_tech" className="icon" title="User Profile"><button>Tea & Tech</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={powerco} alt="" />
                <overlay><a href="./blog_powerco" className="icon" title="User Profile"><button>PowerCo</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={kiwiRuby} alt="" />
                <overlay><a href="./blog_kiwi_ruby" className="icon" title="User Profile"><button>KiwiRuby</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={marathon} alt="" />
                <overlay><a href="./blog_marathon" className="icon" title="User Profile"><button>Half Marathon</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={outward_bound} alt="" />
                <overlay><a href="./blog_outward_bound" className="icon" title="User Profile"><button>Outward Bound</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={spirit_nz} alt="" />
                <overlay><a href="./blog_spirit_nz" className="icon" title="User Profile"><button>Spirit of NZ</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={venture_up} alt="" />
                <overlay><a href="./blog_venture_up" className="icon" title="User Profile"><button>Venture Up</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={sustainability_summit} alt="" />
                <overlay><a href="./blog_sustain_summit" className="icon" title="User Profile"><button>SDG Summit</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={game_threats} alt="" />
                <overlay><a href="./blog_game_threats" className="icon" title="User Profile"><button>Game of Threats</button></a></overlay>
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

