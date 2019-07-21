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
import rasnz_2018 from '../assets/images/spotted/rasnz_2018/group.jpg'
import rasnz_2019 from '../assets/images/spotted/rasnz_2019/exec.jpg'
import singapore from '../assets/images/spotted/singapore/nus.jpg'
import malaysia from '../assets/images/spotted/malaysia/map.jpg'
import bali from '../assets/images/spotted/bali/rice_fields.jpeg'
import cambodia from '../assets/images/spotted/cambodia/window.jpg'
import duke_of_ed from '../assets/images/spotted/duke_of_ed/ice.jpg'
import head_girl from '../assets/images/spotted/head_girl/shake_hand.jpg'
import japan from '../assets/images/spotted/japan/temple.jpg'
import thailand from '../assets/images/spotted/thailand/temple.jpg'
import unicon from '../assets/images/spotted/unicon/emcee.jpg'
import vietnam from '../assets/images/spotted/vietnam/hike.jpg'
import xero from '../assets/images/spotted/xero/speakers.jpg'
import ic_agile from '../assets/images/spotted/ic_agile_foundations/bnz_sign.jpg'




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
                <img src={ic_agile} alt="" />
                <overlay><a href="./blog_ic_agile" className="icon" title="User Profile"><button>Agile Foundations</button></a></overlay>
              </div>
            </div>
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
            <div className="grid-item">
              <div className="content">
                <img src={rasnz_2018} alt="" />
                <overlay><a href="./blog_rasnz_2018" className="icon" title="User Profile"><button>RASNZ 2018</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={rasnz_2019} alt="" />
                <overlay><a href="./blog_rasnz_2019" className="icon" title="User Profile"><button>RASNZ 2019</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={singapore} alt="" />
                <overlay><a href="./blog_singapore" className="icon" title="User Profile"><button>SINGAPORE</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={malaysia} alt="" />
                <overlay><a href="./blog_malaysia" className="icon" title="User Profile"><button>MALAYSIA</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={bali} alt="" />
                <overlay><a href="./blog_bali" className="icon" title="User Profile"><button>BALI</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={cambodia} alt="" />
                <overlay><a href="./blog_cambodia" className="icon" title="User Profile"><button>CAMBODIA</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={duke_of_ed} alt="" />
                <overlay><a href="./blog_duke_of_ed" className="icon" title="User Profile"><button>Duke of Ed</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={head_girl} alt="" />
                <overlay><a href="./blog_head_girl" className="icon" title="User Profile"><button>Head Girl</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={japan} alt="" />
                <overlay><a href="./blog_japan" className="icon" title="User Profile"><button>JAPAN</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={thailand} alt="" />
                <overlay><a href="./blog_thailand" className="icon" title="User Profile"><button>THAILAND</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={unicon} alt="" />
                <overlay><a href="./blog_unicon" className="icon" title="User Profile"><button>UNICON 2019</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={vietnam} alt="" />
                <overlay><a href="./blog_vietnam" className="icon" title="User Profile"><button>VIETNAM</button></a></overlay>
              </div>
            </div>
            <div className="grid-item">
              <div className="content">
                <img src={xero} alt="" />
                <overlay><a href="./blog_xero" className="icon" title="User Profile"><button>Xero Event</button></a></overlay>
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

