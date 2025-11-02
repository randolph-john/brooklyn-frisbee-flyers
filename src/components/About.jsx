import React from 'react'
import photo2 from '../images/photo2.png'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2>Who we are</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={photo2} alt="Brooklyn Frisbee Flyers in action" />
          </div>
          <div className="about-text">
            <p>
              Brooklyn Frisbee Flyers is a great place to learn the fundamentals of Ultimate
              Frisbee in a playful supportive environment. Enjoy a week of frisbee fun with
              experienced counselors passionate about the game. We are located in the Prospect
              Park Parade Grounds and camps are held from 9am to 3pm daily for a week at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
