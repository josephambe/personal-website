import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import NavHackathon from '../components/NavHackathon'
import HeaderHackathon from '../components/HeaderHackathon'
import act_in_space from '../assets/images/hackathons/act_in_space/talk.jpg'
import vr from '../assets/images/hackathons/virtual_realities/team.jpg'

class Hackathon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderHackathon />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <NavHackathon sticky={this.state.stickyNav} />

        <section id="createCamp" className="main">
          <div className="major">
            <header className="major" style={{paddingTop: "100px"}}>
              <h2>Create Camp...coming soon!</h2>
            </header>
          </div>
        </section>

        <section id="hackathon1" className="main">
          <header className="major" style={{paddingTop: "100px"}}>
            <h2>Act in Space Hackathon</h2>
          </header>
          <p>May, 2018. Christchurch. 24hours. </p>< br />
          <section id="content" className="main">
            <span className="image main"><img src={act_in_space} alt="" /></span>
          </section>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
          <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>
          <iframe src="https://player.vimeo.com/video/275002524?color=00bace" width="640" height="360"
                  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </section>

        <section id="hackathon2" className="main special">
          <header className="major" style={{paddingTop: "100px"}}>
            <h2>Virtual Realities</h2>
          </header>
          <p>May, 2017. Wellington. One weekend. </p>< br />
          <section id="content" className="main">
            <span className="image main"><img src={vr} alt="" /></span>
          </section>
          <p>
            Virtual Realities Hackathonn was held as part of TechWeek Wellington 2017. I was way underqualified, easily the youngest there in age and experience by at least five years, but was super excited because they basically gave you a load of sweet tech to play with for a weekend.
            < br />< br />
            The theme of the hackathon was VR/AR with a focus on combining the real world and the virtual world together to educate, experiment, and solve some big issues.
            < br />< br />
            The new Theta HoloLens was what immediately drew my attention and I ended up in a team with Jim Taylor from Theta who was responsible for bringing that particular HoloLens to the party. This was awesome because it meant that I could learn from an expert in the field. On our team was also Marianne Malmstrom of Newlands Intermediate School who had experience using virtual environments in her classes.
            < br />< br />
            This combination of experiences led us to our product of the weekend; a VR minecraft environment that enabled kids to build their worlds virtually, collaboratively, solving problems and exploring together beyond the screens.
            < br />< br />
            In the end, I pitched a portion of the idea on behalf of our team and the judges were convinced! We won! Whohoo! As far as first hackathons go, it was a success. The biggest learning curve for me was that in such a short frame of time, you can’t achieve everything you originally planned to do. But being able to create something, and explore new ideas, learn new skills, are all part of what makes it (in my mind) a successful weekend, winners or not.
          </p>
          < br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5d2PNfmvyu8" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </section>
      </Layout>
    )
  }
}

export default Hackathon
