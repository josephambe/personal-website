import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import NavHackathon from '../components/NavHackathon'
import HeaderHackathon from '../components/HeaderHackathon'
import act_in_space1 from '../assets/images/hackathons/act_in_space/talk.jpg'
import act_in_space2 from '../assets/images/hackathons/act_in_space/table.jpg'
import vr from '../assets/images/hackathons/virtual_realities/team.jpg'
import cc_team from '../assets/images/hackathons/create_camp/team_photo.png'
import cc_working from '../assets/images/hackathons/create_camp/working.png'
import cc_mentors from '../assets/images/hackathons/create_camp/mentors.png'

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
                <h2>Create Camp</h2>
            </header>
            <p>August, 2019. Wellington. One weekend. </p>< br />
            <p>
                Create Camp is a 2-day Hackathon held annually by Summer of Tech. This year (2019), it was hosted at Flux Federation. With over 4,000 students registered with Summer of Tech, and an impressive track record of 90% of participants of Create Camp being offered jobs at the end of the year, getting a spot in this event is highly competitive.
                < br />< br />
                <section id="content" className="main">
                    <span className="image main"><img src={cc_working} alt="" /></span>
                </section>
                The 40 developers and 10 design students worked for 2 days on a product that met the one, extremely brief, requirement; use a NZ API. At the time, Wellington on a Plate was taking over the city with cafes, bars, and restaurants all offering up their best burgers for locals to rank. Due to the novelty of these burgers, they are often quite expensive. Unfortunately for students with the high enthusiasm and low income, this is a problem. Browsing the website can be tiresome and lengthy. And so comes our product; BURGER BRICK ROAD. The website that shows students where to find the cheapest burgers within walking range of their location.
                < br />< br />
                For this hackathon, I was determined to be on the back end. In other similar events, I’ve always been the engineer to work on the front end or even business pitch. And as much as I enjoy those roles, this time I wanted to put what I was learning at university to the test. Our team was made up of 4 engineers and one brilliant designer who did a fantastic job at pushing us engineers to make quality design decisions.
                < br />< br />
                <section id="content" className="main">
                    <span className="image main"><img src={cc_team} alt="" /></span>
                </section>
                Some highlights of the entire event included:
                <ul>
                      <li>Trent, the Summer of Tech representative, ringing a handheld bell while walking round the rooms yelling at everyone to get out at the end of the day (Seriously, I think this is the first hackathon I’ve been to where everyone HAD to stop work at 5.30PM).</li>
                      <li>Presenting our teams product to the rest of the teams and mentors.</li>
                      <li>Hearing what the other teams had produced in such a small amount of time</li>
                      <li>Working with an amazing range of mentors from Xero, Trade Me, Flux, and beyond. </li>
                      <li>Having fun with my team in one of the most relaxed (and successful) hackathons I’ve ever attended. </li>
                      <li>Winning the BEST COLLABERATION Award for our awesome team work and business plan of integrating with Wellington on a Plate.</li>
                </ul>
                < br />< br />
                <section id="content" className="main">
                    <span className="image main"><img src={cc_mentors} alt="" /></span>
                </section>
              Create Camp was a really well-run event with special attention to student well-being which I am very appreciative of. It helped to show a growing side of tech that I am starting to notice – the acknowledgment that a job can just be a job. There is more to life than the code on your computer.
            </p>
            < br />
          </div>
        </section>

        <section id="hackathon1" className="main">
          <header className="major" style={{paddingTop: "100px"}}>
            <h2>Act in Space Hackathon</h2>
          </header>
          <p>May, 2018. Christchurch. 24hours. </p>< br />
          <section id="content" className="main">
            <span className="image main"><img src={act_in_space1} alt="" /></span>
          </section>
          <p>
            Wow. It is currently the Monday following New Zealand’s first Act in Space Hackathon and I am still playing catch-up with what we achieved. In my mind, the 24 hours spent in the GreenHouse at Christchurch was at least a month’s worth of work. Surely, we couldn’t have chosen one of the world’s biggest Space Challenges, identified a specific problem, come up with a solution, performed market research, undertaken product testing, designed a prototype, calculate a financial plan, execute the beginning of marketing strategy, and succeed in delivering a fantastic pitch to a judging panel of 5? Fortunately, or unfortunately in several cases, the photos prove otherwise.
            < br />< br />
            Our Act in Space experience began with Nevin Jojo, Evie O’Connor, and myself, flying down to Christchurch early Friday morning. A ‘24 Hour’ Hackathon wasn’t something I ever saw myself realistically completing, simply because staying awake for 24 hours was something I had never, ever, achieved. Not for lack of attempts.
            < br />< br />
            At 3pm we arrived at the GreenHouse, a start-up incubator space for young businesses in Canterbury. We were greeted by the amazing team of volunteers who handed us THE BEST goodie bags we had ever received. There was a t-shirt, glass keg cups, a drink bottle, stickers, notebooks, contacts, $300 voucher for cloud storage, COFFEE VOUCHERS, pens, and numerous pamphlets with helpful resources. The t-shirts were on within minutes, initial photos were snapped, and we waited eagerly for the event to kick off.
            < br />< br />
            Our MC for the weekend was no other than Mike Riversdale who quickly pushed us through a team building exercise. We ended up joining with Rosalind Smith (Roz) and John Holdaway who were invaluable with their enthusiasm, eye for detail, and constant energy. I don’t think I ever heard a whisper of complaint despite the long hours and stressful hours before pitching. They were fantastic in their support and team contribution; we really couldn’t have been luckier.
            < br />< br />
            From there the Hackathon truly began. I would say the next 24 Hours were made up of equal parts amazing food, fantastic team moments, endless mentor lightbulb moments, and questioning what the hell we were actually doing.
            <section id="content" className="main">
              <span className="image main"><img src={act_in_space2} alt="" /></span>
            </section>
            We charged through a lean canvas which proved vital in narrowing down our problem, idea, and market audience. When I say ‘charged’ I mean we had sort of, almost, finished it by 2.30AM when we decided it was time for a nap. Thourghouly happy with the progress we had made, we stumbled to our backpackers down the road, slept for around 2 and a half hours, then staggered back to the Grennhouse for a 6.30AM breakfast at a cafe around the corner. Breakfast was AMAZING. Pancakes with bacon, banana, coconut, maple syrup….chia pudding with fresh fruit….huge burgers worthy of any drunk night snack….and most importantly a free caffine drink of choice. I don’t think I’ve ever had so much caffeine in my bloodstream. In fact, i wouldn’t be surprised if the  shakes I have today are withdrawals. By 10AM we were focused solely on our pitch. Evie was on putting our pitch deck together, Nevin on building our prototype, John on research “WHOA” facts, Roz on getting some awesome quotes from our target market, and I was sorting out our “to-be” financial situation before writing a pitch script to match the slides.
            < br />< br />
            One pitch practice at 1.10PM, the other at 3.20PM and then suddenly it was internet off, pens down, we are pitching in 10min at 5.15PM. Luckily we were second up out of nine teams which meant we could sit back and enjoy the other teams presentations. And what a range of ideas were presented! From social art ideas, to monitoring oil spills, to reducing space balloon waste. The winning team combined VR/AR with robotics to fix hardware problems in Space from the ground. By then, we were completely dead on our feet, but were fortunate enough to be approached by the fantastic Centre for Space Science Technology who loved our idea...perhaps this is something you will be reading more about in the months to come!
            < br />< br />
            A huge thank you to the following people who made a massive difference to our Hackathon experience:
            <ul>
              <li>Rafael Kargren</li>
              <li>Valentín Merino Villeneuve</li>
              <li>Jon Sandbrook</li>
              <li>Eduard Liebenberger</li>
              <li>Pallas Hupe Cotter</li>
              <li>Eric Dahlstrom</li>
              <li>Stewart Fleming</li>
              <li>Clémence Vannier</li>
              <li>Tim Uckun</li>
              <li>Mike Riversdale</li>
            </ul>
          </p>
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
