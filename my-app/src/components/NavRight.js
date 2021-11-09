import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavRight = () => {

  return (
    <div className="navright-container">

      <ul className="right-nav nav-contents">

        <li className="nav-item" id="interests-btn"><AnchorLink href="#interests">Interests</AnchorLink></li>
        <div className="nav-item empty"></div>
        <li className="nav-item" id="contact-btn"><AnchorLink href="#contact">Contact</AnchorLink></li>
        <div className="nav-item empty"></div>

        </ul>

    </div>
  )
}

export default NavRight