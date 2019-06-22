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
        {/*<a className="close" onClick={close}>*/}
          {/*&times;*/}
        {/*</a>*/}
        <div className="header"> WHY THE DUCK? </div>
        <div className="content" style={{padding: "60px"}}>
          {' '}
          Because it's cute
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              // console.log('modal closed ')
              close()
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
)

export default Modal
