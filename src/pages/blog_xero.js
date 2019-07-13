import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/xero/speakers.jpg'
import pic02 from '../assets/images/spotted/xero/participants.jpg'
import bgPic from '../assets/images/spotted/xero/blue.jpg'

class Xero extends React.Component {

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
            <h1>Xero's Product Design</h1>
            <h2>“If I had a problem and an hour to solve it, I’d spend 59 minutes thinking about the problem.”</h2>
            <p>
              Xero was kind enough to send Nicki, Sophie, and Julie, three of their fantastic product designers to Vic today to discuss what it means to be a product designer.
              I really appreciated that to demonstrate this, they got the audience to participate in a mini-design exercise; designing a form of public transport for tui’s, moa’s, and bats, with the ultimate goal of forming friendships and arriving at the users destination safely.
            </p>
            <p>
              I felt like I learnt a lot more about the role of a product designer through this process as we were guided on first learning about the users, then going through a rapid fire ideation phase (and by rapid I mean one minute per idea), and finally discussing our individual ideas in a group to decide on ‘THE IDEA’.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              Our groups idea was not only sustainable, but also great for the environment, reduced traffic, and gave the moas a free cleaning service. Ride sharing for birds has begun.
              With the introduction of a phone that is useable by birds and bats, ride sharing has introduced itself into the winged world. With our slowest service ‘Moa Time’ bats have the option to hail a moa and attach themselves to it’s underbelly over which the moa would drape a company blanket, sheltering the bats from the sun.
              The express service is provided by tui’s, the fastest of our customers, who will collectively latch onto the moas back and then fly the moa (with bats underneath) to the desired destination.
            </p>
            <p>
              Although the idea itself may still have a few wrinkles to iron out (moa’s being extinct, one of the larger bumps we decided), the exercise itself was useful for several reasons:
              <ul>
                <li>It got us talking and interacting with each other.</li>
                <li>It gave us a chance to be creative and get feedback on the fly from the speakers</li>
                <li>It gave us a taste of what the design process is like.</li>
              </ul>
              For these reasons and the general creativity of the secession, I’m really glad that speakers decided to choose to show us, rather than tell us, what a product designer’s job is like.
            </p>

            <p>
              Following that exercise, Nicki, Sophie, and Julie discussed more of the details of product design.
              They defined a product designer as a problem solver. First they actually find problems through analytics, evidence, tickets of user’s issues, and actually talking to people.
              These aren’t problems that the designers think people have; there is a whole lot of research done behind the scenes to make sure that these problems really impact the customers.
              Tools such as Google Analytics, taking advantage of the library of help-desk requests from customers, and communicating with the customers themselves, all helps to build a business case which can then be used as proof that this problem exists and is worth fixing.
            </p>

              <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>
            <p>
              From there comes the ideation stage, which Julie stressed is made largely out of “sanity checking” ideas with the resources of experts around them from different teams.
              The trio also spent time talking about continuous improvement and how the different iterations give not only customers a chance to provide feedback, but also give Xero the proof that this new feature is useful.
              Despite the desire to perhaps release one great big feature at the end of every year, it turns out it is far more beneficial to everyone if smaller iterations are released over time.
            </p>
            <p>
              My own questions for Nicki, Sophie, and Julie were around maintaining projects so other teams can pick up where they might have left off and continue their work, even if its years later.
              This relates a lot to what I’m learning in my Software Engineering courses, and I was curious to see what tools and strategies they used.
              What I learnt was processes like blogging were incredibly useful as a resource for future teams.
              Also categorizing folders on Drive or the Cloud well was super important.
              They also mentioned using Figma, which was super cool to hear as I have experience in that from my time in Singapore.
            </p>
            <p>
              The main takeaway I left with from the whole workshop was the importance of communication.
              When asked what skills were most relevant now from university, they unanimously agreed that communication was “...one of the skills that has been the most important.”
              Whether it’s communicating an idea or talking to customers or persuading higher up managers that this problem is worth solving, having those communication skills is vital to good product design.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Xero
