import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/spotted/head_girl/prefects.jpg'
import pic02 from '../assets/images/spotted/head_girl/shake_hand.jpg'
import pic03 from '../assets/images/spotted/head_girl/prize_giving.jpg'
import bgPic from '../assets/images/spotted/head_girl/walk.jpg'

class Head_Girl extends React.Component {

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
            <h1>Head Girl and Head of the Student Body</h1>
            <h2>PNGHS, 2016</h2>
            <p>
              During my last year at Palmerston North Girl’s High School, I was fortunate enough to be voted and selected as Head Girl of the Student Body and Council.
              This role involved organising and talking weekly in school assemblies, interviewing and hiring a committee of student representatives, and leading the entire prefect body (over 30 prefects).
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic01} alt="" /></span>
            </section>
            <p>
              It did mean that I was part of several awesome events such as prefect netball and soccer between Girls High and Boys High,
              the infamous Junior Dances which we themed Disney,
              and meeting John Key, the NZ Prime Minister at the time.
            </p>

            <section id="content" className="main">
              <span className="image main"><img src={pic03} alt="" /></span>
            </section>
            <p>
              This role added a lot to my final year in terms of workload, but I am extremely proud of the work my team managed to pull off.
              One major achievement was the re-introduction of the Year 13 Leaving Performance which we were the last year to have seen.
              This meant that if we left without doing it, the legacy of the Leaving Performance would have disappeared forever. Luckily the performance was a huge success and I’ve thoroughly enjoyed watching successor years pull off their own performances in the following years.
            </p>
            <section id="content" className="main">
              <span className="image main"><img src={pic02} alt="" /></span>
            </section>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Head_Girl
