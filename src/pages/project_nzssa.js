import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import bg from '../assets/images/projects/nzssa/audience.jpg'
import pic01 from '../assets/images/projects/nzssa/clubsweek.jpg'

class Project_nzssa extends React.Component {

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
            <h1>Founding the NZSSA</h1>
            <h2>The Summmary:</h2>
            <h3>STATUS: </h3><h4>Ongoing</h4>
            <div className="meter yellow"><span style={{width: "20%"}}></span></div>
            <label><left>Effortless</left><right>Very Difficult</right></label>
            <takeaway>There is a HUGE passion and excitement to work in space amoung students.</takeaway>
            <takeaway>Too many students don't believe that they can contribute to the space industry.</takeaway>
            <p>
              What would the world look like if every student on the planet knew they could improve the Space Industry? Or perhaps, a better question to ask would be ‘What would the universe look like if every student on the planet knew they could improve the Space Industry?’
              < br />< br />
              This is a question we long to answer (HINT: We think it would look pretty spectacular). And since there is no current answer (except what we envision!) to this question, we have decided to do our best to create one (in real life).
              < br />< br />
              Our goal is to inspire and empower students to realise their potential to contribute to the future of the NZ Space Industry. We do that through events that show students of all disciplines that the Space Industry is a possible career choice for them.
              None of this would be possible without the most fantastic, fabulous, and kick-ass committee on the planet. Thank you to Nevin Jojo, Daniel Wrench, Amelia Meredith, Ashley Mahar, Dylan Ewens, Evie O’Connor, Mason Brill, Nikolai Bain, Philip Oliver, Sam Ong and Vaishnavi Anand for their hard work and passion in kicking this whole thing off. Who knows where it will lead!
              < br />< br />
              (BELOW: a photo of one of our very first meetings)
            </p>
            <span className="image main"><img src={pic01} alt="" /></span>
            
          </div>
        </div>
      </Layout>
    )
  }
}

export default Project_nzssa
