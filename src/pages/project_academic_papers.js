import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import bg from '../assets/images/projects/academic_papers/spaceRadiation.jpg'
import pic01 from '../assets/images/projects/academic_papers/Page_1.jpg'
import pic02 from '../assets/images/projects/academic_papers/Page_2.jpg'
import pic03 from '../assets/images/projects/academic_papers/Page_3.jpg'
import pic04 from '../assets/images/projects/academic_papers/Page_4.jpg'
import pic05 from '../assets/images/projects/academic_papers/Page_5.jpg'
import pic06 from '../assets/images/projects/academic_papers/Page_6.jpg'
import pic07 from '../assets/images/projects/academic_papers/Page_7.jpg'

class Project_academic_papers extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bg} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/projects" className="icon fa-long-arrow-left" style={{color: "white"}}>PROJECTS</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>Academic Papers</h1>
            <h2>The Summmary:</h2>
            <h3>STATUS: </h3><h4>Complete</h4>
            <div className="meter yellow"><span style={{width: "90%"}}></span></div>
            <label><left>Effortless</left><right>Very Difficult</right></label>
            <takeaway>Biggest takeaway is that writing academic papers is super difficult and time consuming</takeaway>
            <takeaway>You learn more teaching yourself something you're interested in than being lectured on something you're not</takeaway>

            <p>
              Over the course of my time in Singapore, I was fortunate enough to be given the opportunity to learn and contribute towards several academic papers on space related technologies. This was due to the incredible guidance and mentoriship of Hendra Kesuma, from the University of Bremen Germany, whose support throughout the project was invaluable.
            </p>
            <p>
              My contribution was towards three separate papers:
              <ol>
                <li>Artificial Intelligence Implementation on Voice Command and Sensor Anomaly Detection for Enhancing Human Habitation in Space Mission</li>
                <li>Multi Media System Architecture for Enhancing Human Habitation in Space Mission</li>
                <li>Ultrasonic Wireless Sensor Network for Human Habitation in Deep Space Mission</li>
              </ol>

              Paper 1, relating to AI in space, has been published at RAST2019 and explore the development of an artificial intelligence kit for human habitat in space. Due to certain restrictions, I can only publish this paper online for now. Stay tuned for more!
            </p>
            <p>
              This was the first academic paper that I had been involved in producing, and I found it much more challenging and time consuming than I originally anticipated. Despite this, I was personally super interested in the topics which made working on it very interesting and I found that by doing my own research I was able to learn and understand a lot more than being lectured the same content.
            </p>

            <span className="image main"><img src={pic01} alt="" /></span>
            <span className="image main"><img src={pic02} alt="" /></span>
            <span className="image main"><img src={pic03} alt="" /></span>
            <span className="image main"><img src={pic04} alt="" /></span>
            <span className="image main"><img src={pic05} alt="" /></span>
            <span className="image main"><img src={pic06} alt="" /></span>
            <span className="image main"><img src={pic07} alt="" /></span>


          </div>
        </div>
      </Layout>
    )
  }
}

export default Project_academic_papers
