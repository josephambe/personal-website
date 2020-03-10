import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import pic01 from '../assets/images/projects/mentorme/group.png'
import pic02 from '../assets/images/projects/mentorme/team.png'
import pic03 from '../assets/images/projects/mentorme/background.png'

class Project_mentor_me extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={pic03} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/projects" className="icon fa-long-arrow-left">PROJECTS</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>MENTOR:ME SALESFORCE PROJECT</h1>
            <h2>The Summmary:</h2>
            <h3>STATUS: </h3><h4>Ongoing</h4>
            <div className="meter yellow"><span style={{width: "70%"}}></span></div>
            <label><left>Effortless</left><right>Very Difficult</right></label>
            <takeaway>Biggest takeaway is to check the App Exchange first!</takeaway>

            <p>
            I joined the Mentor:Me project halfway through it’s lifespan, at the beginning of Semester 2 2019. Fresh from exchange in Singapore, I was ready to get back into uni life at Wellington, where the ratio of work: life balance is significantly more even.
            </p>
            <p>
            I remember approaching my lecturer after class and asking to join an existing project. After a quick glance at my grades, he admitted that there were 2 projects he was most concerned about – project 15 and project x. In the second of indecision, the thought, “what impact would this decision make?” flew through my mind. But then the second was over and a choice had to made. Project 15 it is.
            </p>
            <p>
            Turns out, that was one of the best academic decisions I made that year. Project 15’s task was to create a mentor/mentee matching application for Engineering NZ. This had already been achieved by the group using Python. But much to their dismay, upon presenting their shiny new solution to the client, they were informed that the whole system needed to be built in Salesforce instead. Start over. Learn Salesforce. This was a week before I joined.
            </p>

            <span className="image main"><img src={pic01} alt="" /></span>

            <p>
            My role in the project started with learning about Salesforce like the rest of the team. Somewhat disguised by the Developer Console for such a large project, I decided to try get it running in Visual Studio Code. From there I took up the role of Dev Ops Lead, spending weeks learning about the CI/CD pipeline and learning the many ways to do it before realising that we were working in a Sandbox. CI/CD pipelines are not possible in a Sandbox.
            </p>
            <p>
            The project continued with our team finding a nice flow and separation of roles; UX, backend, matching algorithm, onboarding, automated emails. It wasn’t until 4 weeks from our deadline that we all hit a real problem. A week later and the problem was still in the way of progress. A week more and we were desperate. I started to look in the wider Wellington community and found the Salesforce Wellington Community group and Trailhead Tuesdays. With my encouragement, we all trooped along to one such Tuesday event to ask for help. And help we found!
            </p>

            <span className="image main"><img src={pic02} alt="" /></span>

            <p>
            Together, our team managed to put together an amazing application which I am incredibly proud of. I also found a strong network of inspiring women and role-models who have encouraged me to pursue a career in Salesforce. This has arguably been the biggest outcome of Project 15 and is shaping my career as I look for grad roles to apply for. Let’s see where this goes from here…
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Project_mentor_me
