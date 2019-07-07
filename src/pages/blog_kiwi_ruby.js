import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/kiwi_ruby/header.png'
import bgPic from '../assets/images/spotted/kiwi_ruby/tepapa.jpg'

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
            <h1>Kiwi Ruby Conference</h1>
            <h2>November 2017</h2>
            <p>
              KiwiRuby is a 2 day event, split into a workshop on DRY Ruby Rails on Saturday and a conference of inspiration speakers on Sunday.
              This year it was held at the gorgeous venue of Te-Papa.
            </p>

            <header className="major">
              <h3>The Conference</h3>
            </header>
            <p>
              Below I've summarised the highlights of the conference in bullet points:
              <ol>
                <li>1st Speaker = Owen “Hello World”</li>
                <li>2nd Speaker = Lena “Choosing Failure”
                  <ul>
                    <li>Marshmallow tower. Pre-school children do the best! They try and fail, also known as the design process.</li>
                    <li>Solving problems, making people’s lives better, learn new things. That’s what keeps me coming back to work.</li>
                    <li>“My learning speed was directly proportional to my willingness to fail”</li>
                    <li>Railsn00bs and Rails Girls Wellington: Intro to Rails</li>
                    <li>“Problem solving over problem avoidance”</li>
                    <li>“The more competent you are, the more confident you are making mistakes”</li>
                    <li>@plaskina_lena</li>
                  </ul>
                </li>
                <li>Elenar Haggety. Technology = “study of making and creating”. Research greek meaning!</li>
                <li>
                  Last speaker = talked about how he used his skills in Engineering and software and coding to create an app that helped his mother in law cope with being bed-ridden in hospital.
                  An app that meant him and his partner could send photos and messages to each other on a group chat that would show up on the mother-in-laws hospital TV screen.
                  She was included in their everyday lives and when there wasn’t live messaging, it would scroll through the most recent photos.
                  <ul>
                    <li>
                      Super cool idea, donating your skills as an Engineer.
                      Instead of volunteering to build mud-houses or physical labour, volunteer your skills as an engineer.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>

            <header className="major">
              <h3>The Workshop</h3>
            </header>
            <p>
              In all honesty, this workshop went WAY over my head. Not only was I the youngest person in the room, I was also the only one still in University (and only my first year!).
              The next least-experienced person there had been working at Power Shop for five years. I was also the only non-Mac user in the room (including the workshop coordinators).
              Even so, I took as many notes as I could and absorbed the information like a sponge, even if I really had no idea what it meant. Here are the notes I took:
            </p>

            <p>
              What we did: Set up a database in ruby, cloned the app.
              <ul>
                <li>Working with blog example.</li>
                <li>Gems we are working with:
                  <ol>
                    <li>Dry types (Don’t Repeat Yourself)</li>
                    <li>Gives you Standard types (organised by modules, give you different behaviours)</li>
                    <li>Coercible Types (for shaping wider range of data) </li>
                    <li>Optional type (permits nil values)</li>
                  </ol>
                </li>
                <li>Article can be a dry::Struct as it can have different attributes e.g. must have a title, body, status,etc. Using library Struct you made</li>
                <li>
                  Mutable structs - handling change. Means it can change over time depending who has worked on it, etc...hard to keep track of?
                  Eliminate it entirely would make it so much easier.
                  Dry structs don’t allow you to change anything once you’ve made it. Not flexible?
                </li>
                <li>Coercions is changing values into something compatible.</li>
                <li>
                  Mutable structures are ones which get randomly changed over time by different things being done to the structure, so being able to keep an ‘article’ for example, the same and solid regardless of what’s done to it, can be super handy.
                  Otherwise you can get lost in where it got changed or altered or why things aren't working.
                </li>
                <li>Anywhere you accept external input, you use dry validation.</li>
                <li>Keys: required vs optional. Required has to be there so uses validation, optional nah</li>
                <li>“Filled” ensures required thing actually has something there (not nil)</li>
                <li>Dry logic predicates - exactly like 123 truth tables. Can build your own!(custom).</li>
                <li>Dry validation can validate nested, arrays, etc...whole range of things, able to take things out of a load of data and check individual parts...Handy for forums/surveys.</li>
                <li>Once you’ve passed validation, you’re dealing with ruby objects, not a load of strings.</li>
                <li>Build your own library of types! Specific to your app (haaaannndy). Keeps them dry (code them once, use them from the library).</li>
                <li>Functional objects: backbone of the app, make some sort of change happen. Functional objects are immutable. </li>
                <li>Service objects do some sort of job (kind of like servants) but aren't all that great because they are concrete classes and just become throwaway objects.</li>
                <li>Dependency Injection: constructed dependency injection…”passing stuff in, saving it, using it later on” uses abstract classes not concrete classes</li>
                <li>Routing tree = root route, articles, articles written by slug.</li>
                <li>Routes are a way of connecting requests to functional objects</li>
              </ul>

              Yeah, so hopefully this will make some more sense in a couple of years. Great introduction to the world of Ruby though, and the community seems super onto it and lovely.
              Will keep an eye on this space in the future.
            </p>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Hackathon
