import React from 'react'

import freedive from '../images/freedive1.jpg'

const Interests = () => {

  return (
    <div className="interests-container pages" id="interests">

        <div className="interest-container">

          <div className="interest-info-container interest-section">
            <h4 className="interest-title">Creativity</h4>
            <p className="interest-info creativity">
            Coming from a music and art background, I largely consider myself a creative. I write songs, produce music, love to paint and illustrate, and dabbled in some very basic animation during one of our lockdowns. What drew me in to coding was the avenue of something that could be both intellectually challenging as well as creatively stimulating. I also love psychology, and thinking about how other people think. I’m excited to explore this in a career that finds such harmony between technology, design, and user interaction.
            </p>
          </div>

          <div className="interest-section">
            <iframe className="hobby" width="560" height="315" src="https://www.youtube.com/embed/kNc1gSxtR2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>

        <div className="interest-container travel">

          <div className="interest-section">
            <img width="560" className="freedive-img hobby" src={freedive} alt="freediving" />
          </div>

          <div className="interest-info-container interest-section">
            <h4 className="interest-title">Travel</h4>
            <p className="interest-info travel">
            Another love of mine is travelling. I spent 6 months freediving in Thailand before backpacking Australia, and have done other backpacking trips around Asia as well. Covid has been hard for the travel bug but I’m grateful to finally have a better appreciation of how beautiful the UK can be too! 
            </p>
          </div>

          

        </div>


    </div>
  

  )
}

export default Interests