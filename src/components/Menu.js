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
    contentStyle={{ background: "rgb(251,252,253)", boxShadow: "none", marginTop: "-100px", height: "200px", width: "300px", marginLeft: "160px", paddingLeft: "10px", textAlign: "left", zIndex: "9999", border: "none" }}
    overlayStyle={{ background: "rgb(251,252,253)", width: "30%" }}
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
            <li>PROJECTS</li>< br/>
            <li>HACKATHONS</li>< br/>
            <li>SPOTTED</li>< br/>
            <li>CONTACT</li>
          {/*<li onClick={close}>CONTACT</li>*/}
        </ul>
      </div>
    )}
  </Popup>
)

export default Menu

