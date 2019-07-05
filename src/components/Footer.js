import React from 'react'
import { Link } from 'gatsby'


const Footer = (props) => (
    <footer id="footer">
        <section>
            {/*<h2>AMBER JOSEPH</h2>*/}
            <ul className="icons">
              <li><a href="/#" className="effect-underline"><span className="label">HOME</span></a></li>
              <li><a href="/#" className="effect-underline"><span className="label">ABOUT</span></a></li>
              <li><a href="/projects" className="effect-underline"><span className="label">PROJECTS</span></a></li>
              <li><a href="/hackathon" className="effect-underline"><span className="label">HACKATHONS</span></a></li>
              <li><a href="/spotted" className="effect-underline"><span className="label">SPOTTED</span></a></li>
              <li><a href="/contact" className="effect-underline"><span className="label">CONTACT</span></a></li>
            </ul>
            <ul className="icons">
                <li><a href="https://twitter.com/amberkjoseph?lang=en" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/josephambe" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="mailto:jamber919@gmail.com?subject=Let's catch up!" className="icon fa-envelope alt"><span className="label">Mail</span></a></li>
                <li><a href="https://www.linkedin.com/in/amber-joseph/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Amber Joseph 2019. Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and React.</p>
    </footer>
)

export default Footer
