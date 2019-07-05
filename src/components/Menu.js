import React from "react";
import Popup from "reactjs-popup"

const contentStyle = {
  background: "rgba(255,255,255,0)",
  // width: "80%",
  padding: "30px",
  border: "none"
};

const Menu = (props) => (
  <Popup
    contentStyle={{ background: "rgb(251,252,253)", boxShadow: "none", marginTop: "-100px", height: "200px", width: "300px", marginLeft: "140px", paddingLeft: "10px", textAlign: "left", zIndex: "9996", border: "none" }}
    overlayStyle={{ background: "rgba(251,252,253,0)", width: "80%"}}
    arrowStyle={{ boxShadow: "none" }}
    // closeOnDocumentClick={false}
    trigger={
      <ul className="burger">
        <a href="#" className="icon fa-bars alt"><span className="label">Burger Menu</span></a>
      </ul>
    } menu
  >
    {close => (
      <div className="menu">
        <ul className="actions">
          <li><a href="/projects" className="effect-underline">PROJECTS</a></li>< br/>
          <li><a href="/hackathon" className="effect-underline">HACKATHONS</a></li>< br/>
          <li><a href="/spotted" className="effect-underline">SPOTTED</a></li>< br/>
          <li><a href="/contact" className="effect-underline">CONTACT</a></li>< br/>
          {/*<li onClick={close}>CONTACT</li>*/}
        </ul>
      </div>
    )}
  </Popup>
)

export default Menu

