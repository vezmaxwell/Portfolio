import React from 'react'

import emailIcon from '../images/Icons/email.svg'
import linkedinIcon from '../images/Icons/linkedin.svg'
import githubIcon from '../images/Icons/github2.svg'

const Contact = () => {


  return (
    <div className="contact-container pages" id="contact">

      <a href="mailto:vezmaxwell@gmail.com" target="_blank" rel="noreferrer">
        <img className="icon contact-icon" src={emailIcon} alt="" />
      </a>

      <a href="http://www.linkedin.com/in/vezmaxwell" target="_blank" rel="noreferrer">
        <img className="icon contact-icon" src={linkedinIcon} alt="" />
      </a>

      <a href="http://github.com/vezmaxwell" target="_blank" rel="noreferrer">
        <img className="icon contact-icon" src={githubIcon} alt="" />
      </a>

    </div>


  )


}

export default Contact