import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import bg from '../assets/images/projects/nzssa_website/graphQL good.png'
import pic01 from '../assets/images/projects/nzssa_website/team.png'
import pic02 from '../assets/images/projects/nzssa_website/grapQL bad.png'
import pic03 from '../assets/images/projects/nzssa_website/graphQL good.png'
import pic04 from '../assets/images/projects/nzssa_website/style_guide.jpg'
import pic05 from '../assets/images/projects/nzssa_website/wireframe.jpg'

class Project_nzssa_website extends React.Component {

  render() {

    return (

      <Layout>

        <Helmet title="Generic Page Title" />

        <header id="header">
          <img className="blog" src={bg} alt=""/>
          <div className="home-logo">
            <ul className="icons" style={{paddingRight: "50px"}}>
              <a href="/projects" className="icon fa-long-arrow-left" style={{color: "white"}}>PROJECTS</a>
            </ul>
          </div>
        </header>

        <div className="major">
          <div className="article">
            <h1>NZSSA Website; Building a website in React</h1>
            <h2>The Summmary:</h2>
            <h3>STATUS: </h3><h4>Ongoing</h4>
            <div className="meter yellow"><span style={{width: "50%"}}></span></div>
            <label><left>Effortless</left><right>Very Difficult</right></label>
            <takeaway>Good planning is key - saves you time, energy, resources.</takeaway>
            <takeaway>How to use GitHub, and a bit of GraphQL, React, CSS, and HTML</takeaway>
            < br />< br />
            <h3>The Problem:</h3>
            <p>From a small space club founded in 2018 at my home university, to a national association with two strong branches and two more on the way, it became clear that the New Zealand Students’ Space Association (NZSSA) needed some unity at a higher level. A platform where the every growing number of branches can be brought together under the same identity, and where people outside of the association can see our mission, values, and purpose. The overall aim is to continue to facilitate the natural growth of the NZSSA in order to continue to grow the space industry and bridge the gap between students with a passion for space and professionals with a career in the industry.</p>

            <h3>The Why</h3>
            <p>It is important for more students to get involved in the space industry to help increase the innovative development of low-cost space technologies. This will encourage private business innovation, allowing previously restricted technology to become available to and be celebrated by the public, building the global space economy. More students will be provided with opportunities to be involved in developing space technology, supporting student contribution toward leading, international, space advances. With the space industry more accessible and cost-efficient than ever, NZ will be perfectly placed to become world leaders in empowering young people to contribute to the future of space.</p>

            <h3>The Game Plan</h3>< br />
            <h4>The Team</h4>
            <span className="image main"><img src={pic01} alt="" /></span>
            <h4>The “Roles”:</h4>
            <p>Our combined experience as coders and with software wasn’t huge, but it was enough to give us the confidence to take on this new project together. We were both keen to learn React but had lacked the motivation individually; together we decided we could get the job done. Because we were a two-person team, working on a problem that involved a lot of problem solving, we decided not to split the work into roles specifically. Instead, we’d work on it together and tackle the problems as they came. That way we’d both get the most out of the project and understand the entire code base as a result.</p>

            <h4>The Prep:</h4>
            <p>To begin with, we each worked our way through the Gatsby Tutorials to get an understanding of the basics. We then choose a website base from the Gatsby Starter Library which we cheerfully ripped apart in the most ineffective way possible. Which leads swiftly to the problems.</p>
            <span className="image main"><img src={pic05} alt="" /></span>

            <h3>Key Technical Challenges</h3>< br />
            <h4>Problem 1: GraphQL</h4>
            <p>The first major problem which stumped us both was understanding and using graphql. This was confusing for many reasons; the type of file had to be a .md (markdown file) and there was a lot of jargon to understand in the different ways to call the data. In one particular case we wanted to call the same data fields from two seperate folders. The way we got it working initially meant that there was a huge amount of code repeated. Appendix A. shows what one call would be like per folder. It didn’t make sense to write it all out twice.</p>
            <p>See below inefficient repeated code</p>
            <span className="image main"><img src={pic02} alt="" /></span>

            <p>Determined for an answer, we spent a week researching, asking friends around university, reaching out the StackOverflow community, and even meeting with some of our lecturers. Luckily, just over a week later, we found a suggestion buried on some obscure personal blog which led us back to a more mainstream way of setting this out. Our result, (see image below) was much cleaner and easier to understand.</p>
            <span className="image main"><img src={pic03} alt="" /></span>

            <h4>Problem 2: Consistent Design</h4>
            <p>After several weeks spent building this website, we realised that we were really just coding blind and making up the design decisions as we went along. This was wasting a lot of our time as we spent hours shifting images pixels to the left, and adjusting colours by minuscule amounts. After several hours spent mucking around with different fonts, we both decided it would be a good idea to set some base design standards.</p>
            <p>In a Human-Computer Interaction Design paper we were both taking, we were introduced to the tool Figma, which we choose to create our style guide. This was a new experience for me and took longer than I thought; considerable thought had to be put into these decisions, and I actually ended up calling in one of our committee members who is majoring in Marketing to help us out. Between the three of us, we came up with the style guide below which is now being rolled out across the branches to be used in promotional material.</p>
            <span className="image main"><img src={pic04} alt="" /></span>

            <h4>Problem 3: Overall website structure</h4>
            <p>This problem was one which could have been prevented with proper planning; unfortunately our “make-it-up-as-we-go” strategy lead us down a rather rocky road. We ended up renaming almost all the original folders and files multiple times which cause a lot of confusion when merging in Git. Our vision of the final website wasn’t exactly clear so we kept changing it along the way based on our current abilities. Since our learning curve was so steep, we found our vision changing almost daily which was...problematic.</p>
            <p>In the end, I wouldn’t say we ever truly fixed this problem, but instead just learnt to manage it best we could and improve it along the way. The main take away from this was that having a clear understanding of your capabilities through proper research and having a in-depth wireframe plan is key to efficient work and time management.</p>

            <h3>What I Gained From the Experience:</h3>
            <p>I learnt a lot from building this website in React which I know will be useful in future projects. Transferable skills such as understanding GitHub, the importance of good “book-keeping”, and the work that needs to go into planning before coding, are all valuable lessons which I look forward to applying in my next project. Most of all, I came away from this project inspired and proud of what I had achieved; even if the achievement was recognising what I don’t know. There’s a whole lot out there just waiting for me to explore.</p>
            <p>A final list of my key takeaways are as follows:
              <ol>
                <li>Good planning is key - saves you time, energy, resources.</li>
                <li>Working in a team on a project you’re both passionate about is fantastic.</li>
                <li>This stuff is fun! </li>
                <li>Began to understand the importance of making websites that can be updated easily</li>
                <li>Good naming and folder organisation makes a big difference</li>
                <li>How to use GitHub</li>
                <li>A little bit of GraphQL, React, CSS, and HTML.</li>
              </ol>
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Project_nzssa_website
