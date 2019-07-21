import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const NavHackathon = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['hackathon1', 'hackathon2'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="createCamp">
                    <a href="#">Create Camp</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="hackathon1">
                    <a href="#">Act in Space</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="hackathon2">
                    <a href="#">Virtual Realities</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default NavHackathon
