import React from 'react'

import Vez from '../images/portfolio_illustration.png'

const Landing = () => {

  return (
    <div className="home-container section pages">      

      <div className="home-contents">
        <div className="illustration-container">
          <img className="illustration" src={Vez} alt="" />
        </div>

        <div className="name-info">
          <h1 className="name ">Vez Maxwell</h1>

          <div className="about">
            <p>Hello, I’m Vez. I’m a web developer, self proclaimed creative of sorts and musician transitioning into tech. Join my journey!</p>
          </div>
          
        </div>
      </div>

    </div>
    
  )
}

export default Landing