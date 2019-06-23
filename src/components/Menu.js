import React from "react";
import Popup from "reactjs-popup"

const Menu = (props) => (
  <Popup
    modal
    overlayStyle={{ background: "rgba(255,255,255,0.98" }}
    closeOnDocumentClick={false}
    trigger={<ul className="burger">
      <a href="#" className="icon fa-bars alt"><span className="label">Burger Menu</span></a>
    </ul>}
  >
    {close => (
      <div className="menu">
        <ul>
          <li onClick={close}>Home</li>
          <li onClick={close}>Getting Started</li>
          <li onClick={close}>Component API</li>
          <li onClick={close}>Use Case - Tooltip</li>
          <li onClick={close}>Use Case - Modal</li>
          <li onClick={close}>Use Case - Menu</li>
          <li onClick={close}>Contributing</li>
        </ul>
      </div>
    )}
  </Popup>
)

export default Menu

