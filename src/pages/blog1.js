import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/gcsb_group.jpg'
import bgPic from '../assets/images/gcsb_base.jpg'

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
            <h1>GCSB Women in STEM Scholarship</h1>
            <h2>November, 2017</h2>
            <p>In November 2017, I was fortunate to be selected as one of the four finalists for the GCSB Women STEM Scholarship, valued at $10,000.
              After being invited for an interview by a panel of intimidatingly successful people from the GCSB, including Director General Andrew Hampton, the four finalists were invited downstairs for some catered lunch and nibbles.
              To our shock, a cheerful Mr Hampton announced over cucumber sandwiches that they would be telling us all the winning recipient of the scholarship before lunch was over. To the entire room. Full of employees. Respected people. And the panel of interviewers.
            </p>
          {/*<header className="major" style={{paddingTop: "100px"}}>*/}
            {/*<h2>< br />Virtual Realities</h2>*/}
          {/*</header>*/}
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
          </section>
            <p>And so it was that the next ten minutes passed in rather tense conversation between the finalists. The time came to announce the winner and we all stood maintaining smiles and small fidgets as the moment built.
            "And so we've decided to award our first year of the GCSB Women in STEM scholarship to...all of you!"</p>

            <p>Each of us recieved $10,000 worth of funding towards our studies.
              A few months following the interviews and announcement, the top 12 finalists were invited back for networking and a tiny glimpse of what working at the GCSB could be like.
              It was a fantastic experience and a great chance to meet an amazingly talented group of other girls, several of who I knew from my time at High School. </p>

            <p>You never know where an application will take you and I encourage every student (female or not) to apply for as much as you can. There's no saying where it could lead you.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
