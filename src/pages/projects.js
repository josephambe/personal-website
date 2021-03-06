import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby"
;

import Layout from '../components/layout'
import rubber_duck from '../assets/images/projects/rubber_duck/brand_brainstorm_cut.jpg'
import nzssa_website from '../assets/images/projects/nzssa_website/home_page.png'
import academic_papers from '../assets/images/projects/academic_papers/paper_heading.png'
import hydrate from '../assets/images/projects/hydrate_to_own_it/single_tv.jpg'
import software_management from '../assets/images/projects/software_management/modules_in_system.png'
import sunfire from '../assets/images/projects/udp/sunfire.png'
import cap from '../assets/images/projects/cap_tracker/team.jpg'
import nzssa from '../assets/images/projects/nzssa_website/logo.png'
import mm_group from '../assets/images/projects/mentorme/trailhead_tues.png'



import HeaderProjects from '../components/HeaderProjects'


class Projects extends React.Component {


  render() {

    return (
    <Layout>
      <Helmet title="Generic Page Title"/>
      <HeaderProjects/>
      <div id="projectList">
        <section id="content" className="projectList">
          <div className="grid-container">

              <div className="row">
                <div className="project-item">
                  <div className="content">
                    <Link to="/project_mentor_me/">
                      <h1>Mentor:Me Salesforce</h1>
                      <h3>STATUS:</h3><p>Complete</p>
                      <p>First introduction to Salesforce through client project.</p>
                      <div className="meter yellow"><span style={{width: "70%"}}></span></div>
                      <label><left>Effortless</left><right>Very Difficult</right></label>
                      < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                      <takeaway>Biggest takeaway is to check the App Exchange first! </takeaway>
                      <takeaway>Increased skills in Salesforce, Gitlab, CI/CD, Project Management, Agile.</takeaway>
                    </Link>
                  </div>
                </div>
                <div className="project-item">
                  <div className="content">
                    <Link to="/project_mentor_me/">
                      <img src={mm_group} alt="" />
                    </Link>
                  </div>
                </div>
              </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_rubber_duck/">
                    <h1>Rubber Duck Project</h1>
                    <h3>STATUS:</h3><p>Ongoing</p>
                    <p>Fine tunning my React skills after the NZSSA website by creating my own personal portfolio and website.</p>
                    <div className="meter yellow"><span style={{width: "15%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Biggest takeaway is that planning makes a huge difference. Design process is great. </takeaway>
                    <takeaway>Increased skills in JavaScript, CSS. Used AdobeXD to prototype.</takeaway>
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_rubber_duck/">
                    <img src={rubber_duck} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_nzssa_website/">
                  <img src={nzssa_website} alt="" />
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_nzssa_website/">
                    <h1>NZSSA Website</h1>
                    <h3>STATUS:</h3><p>Complete</p>
                    <p>Luce and I wanted to learn React so used the opportunity to create a website for the NZSSA which I founded in 2018</p>
                    <div className="meter yellow"><span style={{width: "60%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Good planning is key - saves you time, energy, resources.</takeaway>
                    <takeaway>How to use GitHub, and a bit of GraphQL, React, CSS, and HTML</takeaway>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_academic_papers/">
                    <h1>Academic Papers</h1>
                    <h3>STATUS:</h3><p>Complete</p>
                    <p>Contributed to the completion and publication of three acadmic papers on space technology, including Artificial Intelligence Implementation, Multi Media System Architecture, and a Ultrasonic Wireless Sensor Network.</p>
                    <div className="meter yellow"><span style={{width: "90%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Biggest takeaway is that writing academic papers is super difficult and time consuming</takeaway>
                    <takeaway>You learn more teaching yourself something you're interested in than being lectured on something you're not</takeaway>
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_academic_papers/">
                    <img src={academic_papers} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_hydrate/">
                    <img src={hydrate} alt="" />
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_hydrate/">
                    <h1>Hydrate To Own It</h1>
                    <h3>STATUS:</h3><p>Ongoing</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores, in nam natus officiis quae. Eligendi laboriosam pariatur perspiciatis? Beatae ea harum illum incidunt iste sed! Ad blanditiis mollitia non.</p>
                    <div className="meter yellow"><span style={{width: "50%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Biggest takeaway is blah blah blah</takeaway>
                    <takeaway> takeaway 2 is blah blah blah</takeaway>
                  </Link>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_software_manage/">
                    <h1>Software Management</h1>
                    <h3>STATUS:</h3><p>Complete</p>
                    <p>Estimating the time it would take to complete a software project based on an annoyingly vague brief</p>
                    <div className="meter yellow"><span style={{width: "80%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Applied Function Point Analysis to estimate time of Software Project</takeaway>
                    <takeaway>Studied and presented multi-cultural management practices</takeaway>
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_software_manage/">
                    <img src={software_management} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_udp/">
                    <img src={sunfire} alt="" />
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_udp/">
                    <h1>Securing UDP</h1>
                    <h3>STATUS:</h3><p>Complete</p>
                    <p>Creating a chatbot in UDP and then manually fixing the UDP weaknesses enable secure message sending</p>
                    <div className="meter yellow"><span style={{width: "70%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Biggest takeaway is blah blah blah</takeaway>
                    <takeaway> takeaway 2 is blah blah blah</takeaway>
                  </Link>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_cap_tracker/">
                    <h1>CAP Goal Tracker</h1>
                    <h3>STATUS:</h3><p>Ongoing</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores, in nam natus officiis quae. Eligendi laboriosam pariatur perspiciatis? Beatae ea harum illum incidunt iste sed! Ad blanditiis mollitia non.</p>
                    <div className="meter yellow"><span style={{width: "50%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>Biggest takeaway is blah blah blah</takeaway>
                    <takeaway> takeaway 2 is blah blah blah</takeaway>
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_cap_tracker/">
                    <img src={cap} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="project-item">
                <div className="content">
                  <Link to="/project_nzssa/">
                    <img src={nzssa} alt="" />
                  </Link>
                </div>
              </div>
              <div className="project-item">
                <div className="content">
                  <Link to="/project_nzssa/">
                    <h1>NZSSA</h1>
                    <h3>STATUS:</h3><p>Ongoing</p>
                    <p>Our mission is to inspire and empower students to realise their potential to contribute to the future of the space industry. Founded Feb 2018, now operating in 2 locations across the country.</p>
                      <div className="meter yellow"><span style={{width: "20%"}}></span></div>
                    <label><left>Effortless</left><right>Very Difficult</right></label>
                    < br/><h3>BIGGEST TAKEAWAYS:</h3>< br/>
                    <takeaway>There is a HUGE passion and excitement to work in space amoung students.</takeaway>
                    <takeaway>Too many students don't believe that they can contribute to the space industry.</takeaway>
                  </Link>
                </div>
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



