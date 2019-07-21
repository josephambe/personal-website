import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import bg from '../assets/images/projects/nzssa_website/home_page.png'
import pic04 from '../assets/images/projects/nzssa_website/style_guide.jpg'

class Project_nzssa_website extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bg} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/projects" className="icon fa-long-arrow-left">PROJECTS</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>NZSSA Website</h1>
            <h2>The Summmary:</h2>
            <h3>STATUS: </h3><h4>Ongoing</h4>
            <div className="meter yellow"><span style={{width: "50%"}}></span></div>
            <label><left>Effortless</left><right>Very Difficult</right></label>
            <takeaway>Biggest takeaway is blah blah blah</takeaway>
            <takeaway> takeaway 2 is blah blah blah</takeaway>

            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
            <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>

            <span className="image main"><img src={pic04} alt="" /></span>

            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
            <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Project_nzssa_website
