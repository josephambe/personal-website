import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            {/*<h2>AMBER JOSEPH</h2>*/}
            <ul className="icons">
              <li><span className="label">HOME</span></li>
              <li><span className="label">ABOUT</span></li>
              <li><span className="label">PROJECTS</span></li>
              <li><span className="label">HACKATHONS</span></li>
              <li><span className="label">SPOTTED</span></li>
              <li><span className="label">CONTACT</span></li>
            </ul>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-envelope alt"><span className="label">Mail</span></a></li>
                <li><a href="#" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Amber Joseph 2019. Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and React.</p>
    </footer>
)

export default Footer
