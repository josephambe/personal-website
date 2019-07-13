import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/powerco/interns.jpeg'
import pic02 from '../assets/images/spotted/powerco/bike.jpg'
import bgPic from '../assets/images/spotted/powerco/river.jpg'

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
            <h1>PowerCo Internship</h1>
            <h2>Summer 2017-18</h2>

            <header className="major">
              <h3>Summary</h3>
            </header>
            <p>
              I was recently employed at PowerCo for 12 weeks as an IT Intern. During this time, I was involved in a variety of work from hardware installation and improvement, to data/software analytics, networking, desktop engineering, and identifying/fixing server errors.
              My degree at Victoria University is Software Engineering and I found that many of the skills I learnt during my time at PowerCo, while not directly transferable to my studies, provided a deeper level of understanding into the tech industry and insight into the use of software skills in real world scenarios.
            </p>
            <p>
              PowerCo is a New Zealand’s second largest Electricity and Gas distributer, providing most of the North Island with power to heat their homes and work places.
              They specialise in Networking and large-scale communication, drawing on strong Software and Networking talent to serve as the core for the company.
              Their ability to respond and adapt instantly to situations in the field, from storms to power cuts to electrical maintenance, is paramount to the success of the business.
            </p>
            <p>
              While I learnt a wide range of technical skills specific to PowerCo, I can conclude that the real lessons were around team management and the importance of good planning.
              I quickly discovered that working relationships are the biggest variable in a projects outcome, and the ability to work together as a team is far more important than any individual’s skill level.
            </p>

            <p>
              I would like to acknowledge the help of mentor and manager Mike Gibbs, for his reassuring presence in difficult situations and cheerful encouragement of our team.
              I would also thank Rachel Hopskin for her friendship and problem solving in projects we worked on together.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <header className="major">
              <h3>Why PowerCo?</h3>
            </header>
            <p>
              My internship at PowerCo began in November 2017 as a result of my own research into IT related jobs in New Zealand.
              At the time of my research, I was in my first year of university. This internship appealed to me because it provided a range of work across Software and Network Engineering, and broadened my own knowledge of future career’s in Engineering.
              This is important for me moving forward as I want to be exposed to as many different strands of Engineering work as possible before narrowing down my subjects at University.
            </p>

            <header className="major">
              <h3>Overview</h3>
            </header>
            <p>
              PowerCo exists as the bridge between Electricity suppliers (the “miners”) and the suppliers who deal with the customers (the “shop owners”).
              Their job is to distribute the electricity across New Zealand so that it actually gets to where it needs to go.
              As a result, PowerCo deals a lot with linesmen who fix and repair the electrical lines all over the country.
              Communication with these contractors in the field is vital to their safety; often they are dealing with live wires.
            </p>
            <p>
              PowerCo has several offices around the country; three in New Plymouth, and one each in Wellington, Palmerston North, Tauranga, Hastings, and Masterton.
              They are split based on area of work. For example, the biggest office in PowerCo is one of the three New Plymouth which hosts all of the IT team.
              This consists of some 300 staff who are arranged in an open plan office into areas of internal IT, NOC teams, GIS teams, Graphical Engineers, and Health and Safety.
              Another office in New Plymouth houses the Financial and Law side of the company, while the Wellington office is focused on Gas.
            </p>

            <header className="major">
              <h3>PowerCo Culture</h3>
            </header>
            <p>
              The culture at PowerCo was definitely the highlight of my time there.
              Although the area of work PowerCo is involved in is not of high interest to me, working there was enjoyable for the people and supportive culture.
              The workplace encourages team discussion and more often than not people are seen wandering over to another team for a chat or coffee break.
              PowerCo provides free fruit for it’s employees as well as a wide selection of hot beverages. During lunchtimes a selection of food carts arrive to provide workers with Sushi, pies, or Pita Pit.
              Outdoor eating areas are lovely to use during the hot weather, and a pool and table tennis table provide a welcome relief after work.
            </p>
            <p>
              There was a strong emphasis on the well being of staff, from weekly newsletters with health tips to regular visits from Health and Safety on the condition of your desk.
              A nurse is available on certain days free of charge, and a fully catered lunch is provided at the end of every month.
              Twice a day, colleagues are invited to meet outside for a ten-minute Yoga stretch.
            </p>
            <p>
              I found that this culture increased productivity and reduced stress among individuals.
              Often during breaks, employees were able to discuss the nature of their work with others and gain perspective into their problem;
              the sense of “being in it together” was definitely a strong theme.
            </p>
            <p>
              Professional development was also of high priority and during my time there I attended several workshops on Cyber Security as that was an area of interest to me.
              Employees are encouraged to work on personal projects as long as they are meeting their original deadlines,
              although the busy nature of the company means I am yet to see a personal project being worked on during office hours.
            </p>


            <header className="major">
              <h3>My work</h3>
            </header>
            <p>
              My internship at PowerCo covered a range of jobs and areas of Engineering; there was no one job or role for me to fill, and I often spent a week with a completely different team depending on work load.
              Primarily, I worked on Software/Hardware management, designing a system which the IT Service Desk could use to track the use of Software across all employee devices.
              Doing this took considerable effort and research into the development of the software and the nature in which it was used.
              This provided insight into areas of the business I wasn’t assigned to such as Engineering Modelling and Cloud Services.
              I also spent a large amount of time assisting in the testing of Radio Network’s across the lower North Island.
              This involved trouble-shooting server issues, and helped to develop my limited knowledge of switches from ENGR110.
              I was also Project Manager for a Hardware Audit which involved managing a team of four contractors in Wellington, Palmerston North, Tauranga, and Wanganui, instructing them on setting up Hardware and implementing the software management system I designed.
            </p>
            <p>
              Towards the end of my time at PowerCo, as I became more familiar with their systems and software, I was often requested to help others who are not as confident with software or code.
              This was a fantastic way to meet other people in the company, and through this job, I joined a weekly New Plymouth mountain biking club, and was able to make contacts for future jobs in Wellington.
            </p>
            <p>
              Work was allocated to me on “by-demand” basis, which I enjoyed as it gave me a range of jobs and projects.
              When I had several jobs on the go at once, I drew inspiration from my original team and manager, and used the PowerCo priority system to ensure that my time was being used as effectively as possible.
              Our team was in constant contact via a shared email inbox where we were able to tag each other to emails and track the progress of customer requests.
              This improved my customer service experience as I was often dealing with highly stressed customers.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <header className="major">
              <h3>Reflecting on the experience</h3>
            </header>
            <p>
              My experience at PowerCo was challenging and full of learning opportunities.
              Often, I was left to my own devices after being briefed on a project, which proved to be the biggest learning curve of all.
              Unlike University where every assignment, activity, even question has resources you can look to for help, at PowerCo the project was often so open ended that I’d spend a whole morning just brainstorming the different ways I could approach it.
              I found that discussing my project with fellow interns and colleagues, especially when I was unsure of the software being used, was particularly useful.
            </p>
            <p>
              An example of this was a project I was given to audit all of the Hardware for every employee in PowerCo (some 300+ employees) in several locations across New Zealand.
              I was shown an example of the end product and that was that. My approach to this was to set a timeline for myself and include mini-goals within.
              I also immediately set up progress meetings with my Manager to ensure that I was on track during the execution of the project.
              This saved me from getting to the end and realising that everything I’d done was wrong. Despite this, after just over a week working on this project, I had my first progress meeting with Mike and realised I had been collecting the software data completely wrong.
              Luckily, this was before I had organised for contractors to work on the other sites, so I simply re-wrote my management instructions and re-did the work from the past week.
              In the next week, I managed three contractors from all over New Zealand. We were often on the phone to each other problem solving Software issues in command prompt, and even remote connecting to their computer from my desk.
              Looking back, the progress meeting I had organised with Mike was vital to my success as project manager for those few weeks.
            </p>
            <p>
              This project showed me the importance of time management and asking questions during a project.
              As an intern, it can feel like a constant challenge to prove yourself and there is this absurd notion that asking questions means you are somehow less impressive.
              I soon found out that although it may feel stupid to ask questions, you look a lot more stupid if you didn’t ask questions and then get it wrong.
            </p>
            <p>
              In terms of technical skills, I developed my understanding of networks, servers, and switches immensely.
              I learnt the most from writing the testing software for the radios, and then finishing that project off with a PowerPoint presentation to explain how the radio’s worked to future employees.
              I was extremely inspired by my manager for this project, John Rimmer, who showed me that being a manager doesn’t excuse you from the often-dreary tasks of repetitive testing and editing documents.
              I was surprised to find that someone in his position still did these sort of tasks, but quickly learnt that it is better to check twice and get it right, than check once and execute it badly.
            </p>
            <p>
              I also learnt a lot about the relationships between team members. A united team front, even if times are stressful within the team, is important for our team to work alongside others in PowerCo.
              At first, I thought that the daily yoga stretches or team shared lunches were excessive but as time went on, I realised that it can been seen as an investment into better productivity.
              Getting the best work from people takes a mixture of pressure and encouragement, and finding that balance can be very tricky.
              However, I know that had I not had the support and encouragement of the other interns, it could have been very tricky to stay motivated when things started to slip a bit out of control (see Appendix A).
              They often brought things back into perspective, something which I will endeavour to do to other work colleagues in my years to come.
            </p>
            <p>
              There was a strong emphasis on Cyber Security which I really enjoyed, and I attended several Cyber Security workshops as an employee and then as a Software Intern.
              I was surprised how much focus was on the social engineering aspect, and most of what we learnt was based around simply being aware of the danger.
              I was pleased to see that upskilling is an integrated part of being in IT and that large cooperate companies recognise its importance.
              This taught me again that a unified team, and most importantly, clear communication is the most important thing in a successful business.
              Not just to succeed and create fantastic products, but also for the safety of the company and its employees.
            </p>
            <p>
              Working at the service desk taught me a lot about customer relations. I found the trickiest part was keeping myself and the customer calm.
              Whether this was by phone or in person, I was often faced with problems I couldn’t fix and a stressed employee who needed it solved straight away.
              I quickly developed an excellent phone voice and by the end of my time there, was able to trouble shoot problems on the spot.
              This meant I was able to fix many more issues before passing them on to the more experienced team than originally.
              Most of the improvement came from familiarising myself with the PowerCo Admin system and learning all of the paths to password resets, common bugs, etc.
              I was dealing with employees from all over PowerCo; some with no technological knowledge at all, others who had degrees in Electrical Engineering.
              This meant I got very used to explaining problems clearly and precisely.
              Customer communication was almost always the key to getting a problem solved quickly.
            </p>

            <header className="major">
              <h3>Relevance of University lessons</h3>
            </header>
            <p>
              As I have only completed one year of my Engineering degree, in terms of technical skills there was little that I used directly learnt from my courses.
              However, I did rely heavily on my general knowledge of a wide range of technology, form servers to software management.
              Because my job at PowerCo was on a range of projects, each quite different to the last, it was perhaps useful that I have no academic speciality yet.
              This meant I approached every task from the same level and was able to explore what areas of work I really enjoyed or had a natural tenancy to.
              I did not expect to use so much of my knowledge from ENGR110 but I’m extremely glad I did as a basic understand was extremely useful when being explained new concepts.
              Like University, the ability to pick up new concepts quickly was important in the work force. However, at university there is more time and resources to go to in order to establish and strengthen your understanding.
              In PowerCo, Google became my best friend, followed by trial and error on the job.
              I was relieved to see other full-time employees applying the same strategy; I found this strangely exciting because it meant that even after working in the industry for 20 years, you are still forced to learn new things every day.
            </p>
            <p>
              All in all, upon reflection, this internship was a good match for my current skills; broad and not very deep in specialisation yet.
              However, in the next internship I for, I would like for there to be more of a focus on the coding itself.
              The industry connections I made, and overview I got for working in a large cooperate tech company were invaluable and I will defiantly carry my experience at PowerCo with me into future ventures.
            </p>

            <header className="major">
              <h3>Conclusions</h3>
            </header>
            <p>
              Working at PowerCo taught me some powerful lessons. The top ones being:
              <ul>
                <li>Good working relations should be valued the same (if not more) than the intelligence of any individual. </li>
                <li>With good time management, any project can be completed to a high standard.</li>
                <li>Ask questions if you are not sure! You can’t have a solid and reliable product based on unsure foundations. </li>
              </ul>
              These are lessons which are applicable to any job in my working future; I am glad I have learnt them early and will continue to develop them throughout my career.
              The biggest improvements in my personal skill set were:
              <ul>
                <li>Network understanding and trouble shooting</li>
                <li>Large scale software and hardware management planning.</li>
                <li>Hardware and software trouble shooting under pressure; how to keep yourself and your customer calm.</li>
              </ul>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
