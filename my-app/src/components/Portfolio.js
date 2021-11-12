import React from 'react'

// Images
import GithubLogo from '../images/Icons/github2.svg'
import NewTab from '../images/Icons/newtab.svg'

import Ernesto from '../images/Screenshots/ernesto_land.png'
import ArtistIndex from '../images/Screenshots/artistindex_home.png'
import Homemade from '../images/Screenshots/homemade_land.png'
import TheWhaleBase from '../images/Screenshots/whalebase_land.png'

const Portfolio = () => {

  return (
    <div className="portfolio-page pages" id="portfolio">

    <h2 className="portfolio-heading">Portfolio</h2>

    <div className="portfolio-container portfolio-left">

    {/* Whalebase */}
      <div className="project-container whalebase">

        <div className="card-container">
          <div className="card">
            <div className="front shake">
              <img className="project-image" src={TheWhaleBase} alt="The WhaleBase" />
            </div>
            <div className="whale-back back">
              <h3 className="project-name">The WhaleBase</h3>
              <p className="project-summary">A fully responsive full stack application that I worked on solo. With the backend built using Python and Django, The WhaleBase displays information about different species of whale. Implementing authentication, users can sign up for an account, login, and then post blogs to the website. The owners of the blogs may then later delete and edit their posts.</p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/TheWhalebase" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://thewhalebase.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="icon" src={NewTab} alt="open in new tab" />
            </a>
        </div>
      </div>

{/* Homemade */}
      
    <div className="project-container homemade">

        <div className="card-container">
          <div className="card">
            <div className="front shake">
              <img className="project-image" src={Homemade} alt="Homemade" />
            </div>
            <div className="homemade-back back">
              <h3 className="project-name">Homemade</h3>
              <p className="project-summary">A group project that took place over a week. In a team of 3, we built a recipe web application. Working from our photoshop mock-ups, the front end is built using React JS. The back end was built using Node and Express JS. The site displays recipes accessed through our local API and allows users to sign up and post their own.</p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/Homemade" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://recipes-homemade.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="icon" src={NewTab} alt="open in new tab" />
            </a>
        </div>
      </div>

    </div>


    <div className="portfolio-container portfolio-right">

      {/* ArtistIndex */}
      <div className="project-container artist-index">
        <div className="card-container">
          <div className="card">
            <div className="front shake">
              <img className="project-image" src={ArtistIndex} alt="ArtistIndex" />
            </div>
            <div className="artist-back back">
              <h3 className="project-name">ArtistIndex</h3>
              <p className="project-summary">A 2 day hackathon-style pair programming project utilising React JS. We built an artist search application that live searches as you type and pulls up an artist's photograph, biography, and discography implementing the Audio DB API.</p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/Artist_Index" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://artistindex.netlify.app/" target="_blank" rel="noreferrer">
              <img className="icon" src={NewTab} alt="open in new tab" />
            </a>
        </div>
      </div>

      {/* Ernesto */}
      <div className="project-container ernesto">

        <div className="card-container">
          <div className="card">
            <div className="front shake">
              <img className="project-image" src={Ernesto} alt="Ernesto's Escape" />
            </div>
            <div className="ernesto-back back">
              <h3 className="project-name">Ernesto's Escape</h3>
              <p className="project-summary">A frogger-style game built using HTML, CSS, and vanilla JavaScript built over a week.</p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/ernestos_escape" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://vezmaxwell.github.io/Ernestos_Escape/" target="_blank" rel="noreferrer">
              <img className="icon" src={NewTab} alt="open in new tab" />
            </a>
        </div>
      </div>

    </div>

  </div>
    
  )

}

export default Portfolio