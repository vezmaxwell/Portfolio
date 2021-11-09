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
              <p className="project-summary">A fully responsive full stack application that I worked on solo for my final project at General Assembly. The whale base is a website that accesses my local API in the backend of the application and displays information about different types of whale. Implementing authentication, users can sign up for an account, login, and then post blogs to the website. The owners of the blogs may then later delete and edit their posts.</p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/TheWhalebase" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://youtu.be/BpsV2BT1wVc" target="_blank" rel="noreferrer">
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
              <p className="project-summary">This project was a group project that we worked on for about a week. In a team of 3, we built a recipe web application from scratch. We began by putting together photoshop mock-ups of our ideas, we then coded the backend and built our API, before moving onto the front end which made use of React JS. The recipe site allows a user to sign up and login, allowing for more access with an account such as adding a recipe, leaving a review, and editing their profile user page. The design is also responsive across different sized screens.  </p>
            </div>
          </div>
        </div>

        <div className="project-info">
            <a className="icon-links" href="https://github.com/vezmaxwell/Homemade" target="_blank" rel="noreferrer">
              <img className="icon" src={GithubLogo} alt="github logo" />
            </a>
            <a className="icon-links" href="https://youtu.be/e1UYFEKf35A" target="_blank" rel="noreferrer">
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
              <p className="project-summary">This second project was a quick 48-hour pair-programming challenge where me and my partner utilized an API within a piece of work for the first time. Using React JS for the front-end, we built an artist search application that live searches as you type and pulls up an artists’ photograph, biography, and discography. This was done by diving into nested data using the Audio DB API.</p>
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
              <p className="project-summary">A fully responsive full stack application that I worked on solo for my final project at General Assembly. The whale base is a website that accesses my local API in the backend of the application and displays information about different types of whale. Implementing authentication, users can sign up for an account, login, and then post blogs to the website. The owners of the blogs may then later delete and edit their posts.</p>
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