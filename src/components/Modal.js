import React from 'react'
import Popup from 'reactjs-popup'
import Header from './Header'
import logo from '../assets/images/logo.png'
import logoWink from '../assets/images/logo_wink.png'

const Modal = (props) => (
  <Popup       contentStyle={{ background: "rgb(238,238,238)", borderRadius: "50%", height: "800px", width: "800px", paddingTop: "100px", textAlign: "center", zIndex: "9999"}}
               overlayStyle={{ paddingTop: "80px"}}
               trigger={
                 <figure className="swap-on-hover">
                   <img className="swap-on-hover__front-image" src={logo} alt=""/>
                   <img className="swap-on-hover__back-image" src={logoWink} alt=""/>
                 </figure>
                 // <button className="button"> Open Modal </button>


               } modal>
    {close => (
      <div className="modal">
        <div className="header"><h2>WHY THE DUCK?</h2></div>
        <div className="content" style={{paddingLeft: "60px", paddingRight: "60px", paddingTop: "10px"}}>
          In Software Engineering, rubber duck debugging is a method used by programmers to identify issues in code. It references  a programmer explaining their code, line by line, to a rubber duck which sits on their desk (also saving their co-workers from a painful 30min).
          <br /><br />
          When I started university in Singapore, I brought with me a rubber duck; the National University of Singapore is Asia’s highest ranked University and the work certainly reflects it. That duck put up with a lot.
          I now see the rubber duck as a symbol of my own abilities and academic growth over time.
          <br /><br />
        </div>
        <div className="actions">
          {/*<Popup*/}
            {/*trigger={<button className="button"> Rubber Duck Project </button>}*/}
            {/*position="top center"*/}
            {/*closeOnDocumentClick*/}
          {/*>*/}
            {/*<span>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae*/}
              {/*magni omnis delectus nemo, maxime molestiae dolorem numquam*/}
              {/*mollitia, voluptate ea, accusamus excepturi deleniti ratione*/}
              {/*sapiente! Laudantium, aperiam doloribus. Odit, aut.*/}
            {/*</span>*/}
          {/*</Popup>*/}
          {/*<button*/}
            {/*className="button"*/}
            {/*onClick={() => {*/}
              {/*// console.log('modal closed ')*/}
              {/*close()*/}
            {/*}}*/}
          {/*>*/}
            {/*My Exchange*/}
          {/*</button>*/}
          <button
            className="button"
            onClick={() => {
              // console.log('modal closed ')
              // close()
            }}
          >
            Rubber Duck Project
          </button>
        </div>
      </div>
    )}
  </Popup>
)

export default Modal
