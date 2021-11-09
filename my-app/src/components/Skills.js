import React from 'react'

import css from '../images/Icons/css.svg'
import django from '../images/Icons/django.svg'
import git from '../images/Icons/git.svg'
import github from '../images/Icons/github.svg'
import html from '../images/Icons/html5.svg'
// import illustrator from '../images/Icons/illustrator.svg'
import js from '../images/Icons/javascript.svg'
import node from '../images/Icons/node-js.svg'
import npm from '../images/Icons/npm.svg'
import photoshop from '../images/Icons/photoshop.svg'
import python from '../images/Icons/python.svg'
import react from '../images/Icons/react.svg'
import sass from '../images/Icons/sass.svg'
import vs from '../images/Icons/vs-code.svg'

const Skills = () => {


  return (
    <div className="skills-container pages" id="skills">
      <h3 className="skills-title"> Skills </h3>
      <div className="icons-container">
        <img src={html} alt="html" className="skills-icons" />
        <img src={css} alt="css" className="skills-icons" />
        <img src={sass} alt="sass" className="skills-icons" />
        <img src={js} alt="javascript" className="skills-icons" />
        <img src={python} alt="python" className="skills-icons" />
        <img src={react} alt="react" className="skills-icons" />
        <img src={node} alt="node" className="skills-icons" />
        <img src={django} alt="django" className="skills-icons" />
        <img src={git} alt="git" className="skills-icons" />
        <img src={github} alt="github" className="skills-icons" />
        <img src={npm} alt="npm" className="skills-icons" />
        <img src={vs} alt="vs code" className="skills-icons" />
        <img src={photoshop} alt="photoshop" className="skills-icons" />
      </div>

    </div>
  )
}

export default Skills