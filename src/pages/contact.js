import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderContact from '../components/HeaderContact'


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
                     <a href="mailto:jamber919@gmail.com?subject=Let's catch up!" className="icon fa-envelope alt"><span className="label">Mail</span></a>< br/>
                     <a href="https://github.com/josephambe" className="icon fa-github alt"><span className="label">GitHub</span></a>< br/>
                      <a href="https://www.linkedin.com/in/amber-joseph/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a>
                    </div>
                 </div>
                </div>

                <div className="grid-item">
                  <div className="content">
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "100%"}}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8134.1810411581855!2d174.77353115793437!3d-41.28978125245025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd36fddefd1%3A0x387378be6038d3c4!2sWellington+Waterfront!5e0!3m2!1sen!2snz!4v1562284979379!5m2!1sen!2snz"
                        frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
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
