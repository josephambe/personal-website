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
    contentStyle={{ background: "rgb(238,238,238)", borderRadius: "50%", height: "800px", width: "800px", paddingTop: "100px", textAlign: "center", zIndex: "9999"}}
    overlayStyle={{ paddingTop: "80px"}}
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

