import React from 'react'
import bannerImage from '../images/D135203C-9DF9-4B6C-9488-8B666C09A6C7.JPG'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={bannerImage} alt="Brooklyn Frisbee Flyers" className="banner-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
