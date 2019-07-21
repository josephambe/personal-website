import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/ic_agile_foundations/group.jpg'
import pic02 from '../assets/images/spotted/ic_agile_foundations/iterativeCars.jpg'
import pic03 from '../assets/images/spotted/ic_agile_foundations/agileScrum.jpg'
import pic04 from '../assets/images/spotted/ic_agile_foundations/bnz_sign.jpg'
import pic05 from '../assets/images/spotted/ic_agile_foundations/uncertaintityGraph.png'
import pic06 from '../assets/images/spotted/ic_agile_foundations/mappingAssumptions.png'
import pic07 from '../assets/images/spotted/ic_agile_foundations/opportunityCanvas.png'
import pic08 from '../assets/images/spotted/ic_agile_foundations/backlog.png'
import pic09 from '../assets/images/spotted/ic_agile_foundations/storyMapping.png'
import pic10 from '../assets/images/spotted/ic_agile_foundations/sizing.jpg'
import pic11 from '../assets/images/spotted/ic_agile_foundations/box_benefits.jpg'
import pic12 from '../assets/images/spotted/ic_agile_foundations/scrum_boxes_benefits.png'

import bgPic from '../assets/images/spotted/ic_agile_foundations/work.jpg'

class IC_Agile extends React.Component {

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
            <h1>IC Agile Foundations Course</h1>
            <h2>19th July - 20th July 2019, BNZ</h2>

            <h3>Overview</h3>
            <p>
              The IC Agile Foundations Course is one offered by BNZ through Summer of Tech. The course is two days long, and you come out of it an IC Agile Certified Professional with a shiny certificate and a whole new agile mindset. This particular course was led by the wonderful Polly Storr and Lee Heath.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <h3>DAY 1</h3>
            <p>
              Today I learnt:
              <ul>
                <li>What agile actually means</li>
                <li>The four main values of agile</li>
                <li>The twelve principles of agile</li>
                <li>What exactly scrum is, where it came from, and how it’s used</li>
              </ul>
              ...which made me think…
              <ul>
                <li>That I really like this agile way of operating</li>
                <li>How can agile be used to improve my individual life? Uni? </li>
                <li>The advantages of using agile methodology in a team</li>
              </ul>
            </p>


            <h4>So what the hell is agile really?</h4>

            <p>
              Agile is a way of looking at the world, largely based on the growth mindset and its active appreciation of failure. Agile’s popularity comes from its ability to work really well in a wide range of complicated and complex spaces where our actions are largely reactive. Complicated and complex spaces can be defined through the Stacey Matrix (see Resources below).
              < br />< br />
              Agile was made in response to three simple truths of working on a project:
              <ol>
                <li>You can’t possibly know all the requirements at the beginning</li>
                <li>Requirements are guaranteed to change</li>
                <li>There will always be more to do than you have time to do it in</li>
              </ol>
              The problem was that current ways of working didn’t allow for change or feedback often during the entire project creation process. A famous example of this type of working is ‘the waterfall method’ which basically means you decide on an idea at the start and build it completely until it's finished. Then, and only then, do you actually check that it’s what your user wants. This method increases the risk of the final product not being successful or delivering value, where as agile methodology relies on constant testing, reacting, and changing.
              < br />< br />
              Agile = Iterative + Incremental
              < br />< br />
              Where iterative means to not try and get it all right from the beginning, and incremental means to not build it all at once.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

            <h4>The Four Values of Agile</h4>

            <p>These four values are not ‘instead of’ values. Rather, they can be read as completing the sentence “We value _________ over _________.”
              <ol>
                <li>Individuals and interactions over processes and tools</li>
                <li>Working software over comprehensive documentation</li>
                <li>Customer collaboration over contract negotiation</li>
                <li>Responding to change over following a plan.</li>
              </ol>
              The main things I got from these values was that over does not mean instead of. A plan is still super important, as is good documentation. But the documentation should be meaningful; lean, applying properties of minimalism, to only have the bare essentials and no more. This was where I first started to really see how an agile mindset might be applied to every aspect of life.
            </p>

            <h4>The 12 Principles of Agile</h4>
            <p>These are principles based on the mindset and values which you can put into action. These principles alone are not agile as such; remember, agile is a way of thinking, a culture. And a process will always, always overpower culture.
              <ol>
                <li>Early delivery of value</li>
                <li>Welcome change</li>
                <li>Deliver software frequently</li>
                <li>Business and IT work together daily</li>
                <li>Trust the people who do the work</li>
                <li>Talk face to face</li>
                <li>Working software = progress</li>
                <li>Make sure the work is sustainable</li>
                <li>Technical excellence</li>
                <li>Simplify: put the things of most value first</li>
                <li>Teams self-organise</li>
                <li>Regular retrospective and adjustments</li>
              </ol>
              This was a super interesting list to apply to my own projects; building an app in Ionic, managing my university projects, etc. I found principle 8 reassuring personally. In discussing what a sustainable work flow means we found that setting a baseline of how much you work you can do is super important. In essence, being able to say (to yourself and stakeholders), “...it doesn’t matter how much more work you give us, this is the amount that will get done. And that’s that.” Being honest to yourself in that aspect is something I am trying to do more of.
            </p>
            <p>It’s also important to notice that agile is not just about doing stuff faster. That is one tiny aspect of a huge list of agile principles, all of which should be considered and weighted for business value.</p>
            <p>Many of these principles are based on the idea of only doing what is immediately necessary. So how exactly does someone prioritize features or tasks? The answer is to give features value. In my engineering mind, this value is a number or percentage. For example, applying this to university assignments, an assignments value might be the result of the due date, my interest in the topic, how much I’ll learning from doing it, the percentage it’s worth, how much I care about the course, etc.” I found the quote “generally, it’s better to reduce scope than increase time” super valuable when thinking about numerous projects on the go. This prompted the discussion of output vs outcome.</p>
            <p>Output = the things< br />Outcome = feelings/satisfaction of the client.</p>

            <h4>Scrum</h4>
            <p>
              One of the best things I learnt today was why scrum is called scrum. Turns out, it does actually come from rugby. The creators of the scrum methodology were inspired by the unity of a rugby team; it doesn’t matter who puts the ball over the line, the win is for the whole team. This idea of the whole team being united behind a common goal is an extremely important part of agile working. If an agile team succeeds, they succeed together. Same goes for failure. There is never one single person responsible for the success or failure of the team.
              < br />< br />
              From a birds-eye perspective, scrum follows a 3-4-3 formation (keeping with the rugby theme):
              < br /><br />
              <dl>
                <li>3 roles = Product POwner, Scrum Master, Team</li>
                <li>4 events = Daily stand-up, Sprint Planning, Sprint Review, Retrospective.</li>
                <li>3 artifacts = Product backlog, Sprint backlog, Product Increment.</li>
              </dl>
              The process of scrum looks a little bit like this:
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              The process here is to start with the product backlog, then the sprint backlog, all of which is part of the sprint planning which involves everyone. Product owner, team, scrum master. Then once the plan is made and the team has decided to commit to it, no further changes can be made. Not until this sprint is over. Absolutely none. Once the sprint is complete, there is a sprint review which involves the product owner again who gives feedback and decides whether the product is shippable (main goal). At the very end, the team holds a sprint retrospective. Then the process begins again.
              < br />< br />
              Like any new skill, the concept “rules are a good start, break them when you know them and need to”, applies to scrum. Follow the rules to begin with, then decide what works best for you.
              < br />< br />
              Let’s go into the stages one by one:
              <ol>
                <li>
                  Sprint Planning< br/>
                  <h4>When:</h4> Start of iteration. <h4>Time:</h4> up to 2hrs. <h4>Who:</h4> Scrum Master + team + product owner.< br/>
                  The first objective here is to answer the WHAT by
                  <ul>
                    <li>Setting a sprint goal</li>
                    <li>Selecting product backlog items</li>
                    <li>Deciding what we can commit to as a team (base of evidence).</li>
                  </ul>
                  The second objective is to answer the HOW
                  <ul>
                    <li>Plan tasks</li>
                    <li>Agree on a sprint backlog</li>
                    <li>Update team board</li>
                    <li>DON’T CHANGE IT.</li>
                  </ul>
                </li>
                <li>
                  Daily Stand-up< br />
                  <h4>When:</h4> Start of each day. <h4>Time:</h4> 15min. <h4>Who:</h4> Scrum Master + team
                  <ul>
                    <li>What have I done?</li>
                    <li>What am I going to do?</li>
                    <li>What issues do I see?</li>
                  </ul>
                  General rule is if it takes more than 2 exchanges between group members, it shouldn’t be in the stand-up. Save it for the “after party”, post stand-up. An effective standup holds people accountable, doesn’t include words like “guess”, “want”, or “hopefully.” When you commit, you commit. Doing it around a physical board of to-do’s is ideal.
                </li>
                <li>
                  Sprint Review< br />
                  <h4>When:</h4> End of sprint. <h4>Time:</h4> 1 hour. <h4>Who:</h4> Scrum Master + team + product owner
                  Only things that are completed can be talked about in reviews. This is harsh but motivating. There’s no carry over work and if it’s not done, then it does straight back into the backlog to be re-prioritized. Purpose here is to:
                  <ul>
                    <li>Review product</li>
                    <li>Update release plan</li>
                    <li>Gather feedback and new opportunities</li>
                  </ul>
                </li>
                <li>
                  Retrospective< br />
                  <h4>When:</h4> End of sprint. <h4>Time:</h4> 2 hours. <h4>Who:</h4> Scrum Master + team + product owner
                  This is not a blame game. The purpose of a retrospective is to act. It means continuous improvement, working as a team, and agreeing on 2-3 actions that the team can implement to improve the way they work. The 5 steps of a retrospective are:
                  <ul>
                    <li>Set the stage; why are we here?</li>
                    <li>Gather the data</li>
                    <li>Generate the insight; go wide</li>
                    <li>Decide what to do; action 1, 2, 3. No more than 3.</li>
                    <li>Close the retrospective. End specific.</li>
                  </ul>
                </li>
              </ol>
              To really understand how scrum works, we did a group activity where we had to make a box selling scrum using the scrum 3-4-3 structure. The first sprint was terrible. The next one better. By the fifth sprint, we had it down packed.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic11} alt="" /></span>
            </section>
            <section id="content" className="main">
              <span className="image main"><img src={pic12} alt="" /></span>
            </section>
            <p>
              Roles:< br />
              <ol>
                <li>
                  Product Owner< br />
                  <ul>
                    <li>Makes sure we are building the right thing. </li>
                    <li>Turns vision to backlog.</li>
                    <li>Prioritises features and adjusts scope</li>
                    <li>Accepting or rejecting the work</li>
                  </ul>
                </li>
                <li>
                  Scrum Master< br />
                  <ul>
                    <li>Shields the team from external interferences</li>
                    <li>Helps resolve impediments</li>
                    <li>Keeping team honest; everyone has work</li>
                    <li>Facilitates scrum meetings</li>
                    <li>Ensures that the process is followed</li>
                  </ul>
                </li>
                <li>
                  The Team< br />
                  <ul>
                    <li>Self organised</li>
                    <li>Direct contact with users and stakeholders</li>
                    <li>Autonomous</li>
                    <li>Succeeds or fails together</li>
                    <li>Co-located</li>
                    <li>Cross functional</li>
                    <li>Owns quality and ensures “the thing is right”</li>
                  A good team needs:
                    <li>Compelling work goal</li>
                    <li>5-9 members (too many increases communication paths)</li>
                    <li>Shared work</li>
                    <li>Shared history</li>
                    <li>All skills necessary to deliver product</li>
                  </ul>
                </li>
              </ol>
            </p>

            <p>
              In summary, what I learnt today is that agile is a combination of mindset, values, principles, and unlimited practices.
              < br />
              There is certainly a strict structure and number of rules to agile methodology which I didn’t expect. On some level however, I am relieved to see that all these fantastically huge companies and people I admire talking about “agile” aren’t just winging it completely. There is proof behind this. Reason. Logic. And, by the sounds of it, a hell of a lot of fun.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic04} alt="" /></span>
            </section>

            <h3>DAY 2</h3>
            <p>
              Today I learnt:
              <ul>
                <li>What kanban is</li>
                <li>How to create and maintain a product backlog</li>
                <li>Techniques for sizing amounts of work</li>
              </ul>
              ...which made me think...
              <ul>
                <li>Kanban is much more about the flow of work than to-do lists</li>
                <li>It’s super tricky to size work on time so why do we constantly try to do it?</li>
                <li>A backlog is way more detailed than I thought</li>
              </ul>
            </p>

            <h4>Kanban</h4>
            <p>
              Kanban is one of the many agile practices. It’s originally from Japan, a result of the Toyota manufacturing line. It’s important to note that Kanban is not a process but a way of looking at the work you do. It’s a set of practices that you apply to a process. Translated to English, it roughly means “a card you can see.” In the workflow, this means an indication from the process that something is required.”
            </p>

            <h4>4 Principles of Kanban</h4>
            <p>
            <ol>
              <li>Start with what you already know</li>
              <li>Respect the current process</li>
              <li>Leadership at all levels; accountability, quality at every level.</li>
              <li>Agree to pursue incremental, evolutionary change. This means not changing everything at once, but instead building on change by changing one small thing at a time and carefully testing and reviewing its impact. </li>
            </ol>
            </p>

            <h4>6 Practices of Kanban</h4>
            <p>
            <ol>
              <li>Visualise</li>
              <li>Limit</li>
              <li>Define - make policies explicit by having a definition of “ready” and “done”.</li>
              <li>Feedback loops - build, measure, learn</li>
              <li>Improve collaboratively - retrospective</li>
              <li>Manage flow - moving work through the process as smoothly as possible by taking initiative. </li>
            </ol>
              It’s pretty clear than the Kanban practice is about the flow of work. It can help, then, to define throughput as how many things move across a Kanban board over a certain amount of time. Bonus knowledge, the Lead Time is the time from the very beginning of an idea to the hands of a customer. Bonus bonus knowledge is a cumulative flow diagram (see Resources below), which can be used as a retroactive tool.
            </p>

            <p>
              <table>
                <tr>
                  <th>SCRUM</th>
                  <th>KANBAN</th>
                </tr>
                <tr>
                  <td>
                    Cares about timebox; how much can we get done in a timebox< br />
                    About finishing the sprint and delivering goals< br />
                    Framework< br />
                    Size work according to how big the thing is< br />
                    Follows rules
                  </td>
                  <td>
                    Cares about the length of time one thing takes to go through the process.< br />
                    Taking work which is the right size for the flow and how quickly it flows through the process< br />
                    Mental concept< br />
                    Cares about waste< br />
                    No rules
                  </td>
                </tr>
              </table>
              To really learn about how Kanban works, we were tasked with making a Pizza Parlor production line in our tables. Ours was called “Panic Pizzas” which was pretty representative of the entire exercise.
            </p>

            <h4>Agile Projects</h4>
            <p>
              Most traditional projects start green; everything is well defined, everything is on track, everything is green. As the project goes on, more uncertaintity comes in and slowly things turn to orange. Slipping quickly out of control, the project usually ends in a flood of panicked red with alarms blaring, stress levels to the max, and too many ‘unforseen’ or ‘unknown’ variables.
              < br />< br />
              Agile projects take the opposite approach. They start in red and make it clear that to begin with, no-one knows anything.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic05} alt="" /></span>
            </section>
            <p>
              So how do we actually find out anything? The first step is to find out what you don’t know. This can also be called identifying your assumptions. For these purposes, assumptions are things that must be true for the product to be successful. As we identify assumptions it can be super useful to map them onto a graph. This helps us to visualise how our assumptions are ranked in terms of risk (the stuff we are worried about) and unknown-ness.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic06} alt="" /></span>
            </section>
            <p>
              One approach is to use an Opportunity Canvas. We did an exercise on this by filling out an Opportunity Canvas for a fictional app called ‘MiniMoney’. The key takeaway was to save the solution till the very end.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic07} alt="" /></span>
            </section>

            <h4>Product Backlog</h4>
            <p>
              What is a product backlog? Basically, its an ordered list, from high priority to low priority. The higher the priority the item, the more finely grained, detailed, and broken down it is. It can be filled with user stories, assumptions, ideas, bugs...basically anything that counts as work!
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic08} alt="" /></span>
            </section>
            <p>
              To make a product backlog, we used the example of waking up in the morning to first create a story map and then narrow it down into a backbone and ribs (on which the items were ordered by priority). This can look something like this:
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic09} alt="" /></span>
            </section>

            <h4>User Stories</h4>
            <p>
            We finished up the day by talking about user stories. A user story follows the structure “As a ...I want ...So that…” The important thing here is that user stories are conversation starters which we can use to create acceptance criteria. What is acceptance criteria?
             <ul>
               <li>Acceptance criteria defines boundaries so the team knows when to stop.</li>
               <li>Helps derive additional test scripts</li>
               <li>Acceptance criteria is binary. Either it passes or it doesn’t.</li>
             </ul>
              Defining acceptance criteria means high level user acceptance tests and is only possible with fantastic user stories. But what defines a user story?
              < br />A user story:
              <ol>
                <li>Is a conversation</li>
                <li>Produces criteria</li>
                <li>Can be put on a card that captures conversation and criteria. A user story is a record of a conversation already had, not a starting point.</li>
              </ol>
              Great! So now we know what defines a user story, how about defining what makes a good one? There’s a handy little tool here we can use, called I.N.V.E.S.T. We know a user story is good when it meets the INVEST criteria:
              <ul>
                <li>I = Independent</li>
                <li>N = Negotiable</li>
                <li>V = Valuable</li>
                <li>E = Estimable</li>
                <li>S = Small/sized appropriately</li>
                <li>T = Testable.</li>
              </ul>
              If a user story gets too big, we can split it by perhaps sub-segmenting the users, reducing the outcome, or making the output more simple.
            </p>

            <h4>Sizing work</h4>
            <p>
              Sizing the amount of work is something that I personally always struggle with. I really enjoyed the techniques that Polly and Lee introduced here on how to size work. Instead of trying to produce an exact time frame of how long a piece of work will take and using that to estimate its size, the new technique is to measure the work compared to other work. Here the focus is on categorizing, not being exactly right.
              < br />< br />
              John Maynard Keynes said “It’s better to be roughly right than precisely wrong” and that’s what this technique is all about. Instead, you can size work in t-shirt sizes; S,M,L. Or perhaps dog types; “...seems about a chihuahua sized feature to me.” Or even by dinosaurs!
              < br />< br />
              The variables of size were introduced as Effort + Complexity + Doubt.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic10} alt="" /></span>
            </section>

            <h3>Summary:</h3>
            <p>
              I got a lot more out of this course than I initially thought I would . There is a lot more structure and technique involved in agile than I originally thought, and I was pleasantly surprised by how many of the values and principles I could implement into managing personal projects or my own life. I think it is very in step with other modern mindsets such as minimalism, the Marie Kondo lifestyle, and entrepreneurship. I look forward to applying this in my own life and hopefully seeing it become more integrated into education and the way we learn/teach at schools.
            </p>

            <h3>Resources:</h3>
            <p>
              <ul>
                <li><h4><a href={'http://adaptknowledge.com/wp-content/uploads/rapidintake/PI_CL/media/Stacey_Matrix.pdf'}>Stacey Matrix</a></h4></li>
                <li><h4><a href={'https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram/'}>Cumulative Flow Diagram </a></h4></li>
                <li>All of Henrick Kniberg’s diagrams</li>
                <li>Jim Highsmith</li>
                <li><h4><a href={'https://www.youtube.com/watch?v=9AM6QQlgLSQ'}> Des Traynor on Product Strategy </a></h4></li>
              </ul>
            </p>


            <h3>My ‘TO-DO’ list from today:</h3>
            <p>
              Be honest with yourself about your maximum work rhythm and speed. Learn to say “no” to yourself.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IC_Agile
