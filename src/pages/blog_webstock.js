import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/webstock/webstock02.jpg'
import bgPic from '../assets/images/spotted/webstock/webstock01.jpg'

class Hackathon extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bgPic} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/spotted" className="icon fa-long-arrow-left" style={{color: "white"}}>SPOTTED</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>Webstock 2019</h1>
            <h2>A conference with flair</h2>
            <p>In June this year I was fortunate enough to be awarded a sponsored ticket from the Webstock team to their 2019 winter conference, one of New Zealand’s most highly regarded design and tech events.
              The conference opened at the Michael Fowler centre in Wellington with laser lights into the audience, and booming dance music;
              combined with the incredible food, stellar speaker line-up, free coffee, and endless biscuits, it’s not hard to see where the money went (straight into my belly).
            </p>
            <p>
              The theme of the conference quickly established itself as empowering tech people and designers to do more than code advertising algorithms;
              to really put their skills towards solving some of the world’s most pressing issues.
            </p>


            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <header className="major">
              <h3>What I Learnt:</h3>
            </header>
            <p>
              What establishes our core needs at work? Lara Hogan introduced B.I.C.E.P.S; belonging, improvement and progress, choice, equality and fairness, predictability (balance), significance and status.
              Using this tool can help us to understand human behaviour within the workplace and why individuals react so strongly when you may not.
              Lara also touched on the oh-so-important technique of giving good feedback. This is something that I take particular interest in, as I am constantly looking to improve my own feedback receiving and giving.
              Lara provided a beautifully simply equation for good feedback; good feedback = observation/facts + impact of behaviour that they care about + open question (eg. “what are you optimising for?”).
            </p>
            <p>
              Kim Goodwin’s speech on design systems taught me that design is made up only fractionally of decision systems and decisions. The majority of design choices come from the rest of a companies values and rules.
              The industry and society combined with the organisations values, principles, and team make up, combined with the teams methods and principles and then their component library…there is so much more than a designers decision going into designing good products.
              Kim also provided a definition of  what it means to design “human centred”. Reference Moscow’s hierarchy of human needs, Kim defined human centred design as moving people closer to self-actualisation, ie. achieving your best as a human.
            </p>

            <header className="major">
              <h3>Adding to my tool box:</h3>
            </header>
            <p>
              1. Use BICEPS to ask yourself why other people at working are acting in a way you don’t understand, from Lara Hogan’s talk on Optimising for team health. < br/>
              2. The nuremberg code are a set of ethics that research has to abide to, great for guidelines on collecting data, from Kim Goodwin’s talk on how to improve design systems.< br/>
              3. Be sure to include ‘Consequence scanning’ as a vital step in your design process to minimise the casualties of design in the public.
            </p>

            <header className="major">
              <h3>Top "INSPIRED" moments:</h3>
            </header>
            <p>
              <ul>
                <li>“Software is creating our experience of the world…our experience of each other” - Kim Goodwin</li>
                <li>“Technologists can do more than just build stuff”, Raffi Krikorian. </li>
                <li>Kim Goodwin, on setting your individual goals and decisions, “…measure two things: the goal you want to achieve, and the values you won’t sacrifice to get there.”</li>
                <li>Liz Jackson’s talk on disability, lego story “Who were they designing for?” Stop designing for, start designing with. Eg. Designers coming in, asking people with disabilities their life hacks, then taking and monetising their ideas to sell back to them. ?!</li>
              </ul>

            </p>


            <header className="major">
              <h3>What I will implement:</h3>
            </header>
            <p>
              <ul>
                <li>Every Friday dedicate an hour to answering the question “What have I learnt this week?” Inspired from Lara Hogan’s talk on Optimising team health.</li>
                <li>Think about real world problems I can contribute towards fixing when designing personal projects eg. Make my next personal project on calculating your plastic puddle. (carbon footprint equivalent for plastic), inspired by Raffi Krikorian’s speech on working for Twitter and the Democratic Party in America.</li>
                <li>“Attention is a gift and whatever we give it to gets stronger” - Wilson Miner. Keep that in mind for relationships, work, focus.</li>
              </ul>
            </p>

            <header className="major">
              <h3>Books and Resources:</h3>
            </header>
            <p>
              <ul>
                <li>How to do nothing - Jenny Odell</li>
                <li>Ruined design - Mike Monterio</li>
                <li>Weapons of Math Destruction - Cathy O’Neil</li>
                <li><a href="https://www.webstock.org.nz/talks/when-we-build/"> When we build - Wilson Miner</a></li>
              </ul>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
