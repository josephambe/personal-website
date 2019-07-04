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

        <div id="contactGrid">
          <section id="content" className="contactGrid">
               <div className="row">
                <div className="grid-item">
                 <div className="content">
                   <div className="icons">
                      <a href="https://github.com/josephambe" className="icon fa-github alt"><span className="label">GitHub</span></a>< br/>
                      <a href="mailto:jamber919@gmail.com?subject=Let's catch up!" className="icon fa-envelope alt"><span className="label">Mail</span></a>< br/>
                      <a href="https://www.linkedin.com/in/amber-joseph/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a>
                    </div>
                 </div>
                </div>
                <div className="grid-item">
                  <div className="content">
                    <img src={pic03} alt="" />
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
