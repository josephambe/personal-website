import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderContact from '../components/HeaderContact'
import pic04 from '../assets/images/pic04.jpg'
import pic03 from '../assets/images/pic03.jpg'

class Contact extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <HeaderContact/>

        <div id="projectList">
          <section id="content" className="projectList">
            <div className="grid-container">
               <div className="row">
                <div className="project-item">
                 <div className="content">
                    <ul className="icons">
                      <li><a href="https://github.com/josephambe" className="icon fa-github alt"><span className="label">GitHub</span></a></li>< br/>
                      <li><a href="mailto:jamber919@gmail.com?subject=Let's catch up!" className="icon fa-envelope alt"><span className="label">Mail</span></a></li>< br/>
                      <li><a href="https://www.linkedin.com/in/amber-joseph/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                    </ul>
                 </div>
                </div>
                <div className="project-item">
                  <div className="content">
                    <img src={pic03} alt="" />
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

export default Contact
