import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavLeft = () => {

  return (
    <div className="navleft-container">

      <ul className="left-nav nav-contents">

        <div className="nav-item empty"></div>
        <li className="nav-item" id="portfolio-btn"><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
        <div className="nav-item empty"></div>
        <li className="nav-item" id="skills-btn"><AnchorLink href="#skills">Skills</AnchorLink></li>
      
      </ul>
    </div>
  )
}

export default NavLeft