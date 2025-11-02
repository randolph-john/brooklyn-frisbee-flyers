import React from 'react'
import benImage from '../images/ben.avif'
import schiffImage from '../images/schiff.avif'
import maggieImage from '../images/maggie.avif'

function Coaches() {
  const coaches = [
    {
      name: "Coach Ben",
      bio: "Meet Coach Ben, a student of the game for 7 years and counting. Ben's specialty is booming backhand and flick hucks. He has a passion for all things offense but especially airbending. He is a member of the Cornell Buds, a former captain of Brooklyn Tech Support, and has spent the past two summers playing with Brooklyn Heatwave.",
      image: benImage
    },
    {
      name: "Coach Schiff",
      bio: "Meet Coach Schiff, he has been playing since 2019 and he's known around the city for his can do attitude and his commitment to the game. Watch him on Ultiworld captaining the feared #3 ranked Umass Zoodisc.",
      image: schiffImage
    },
    {
      name: "Coach Maggie",
      bio: "Meet Coach Maggie, a dedicated player since 2021 and co-founder of her high school team, Brooklyn Disco Tech. She's played two summers with Third Rail and is currently competing with Devyl Ultimate. Maggie has led frisbee activities at her sleepaway camp and is always excited to help more young players get into the sport.",
      image: maggieImage
    }
  ]

  return (
    <section id="coaches" className="coaches">
      <div className="container">
        <h2>Meet Our Coaches</h2>
        <div className="coaches-grid">
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <div className="coach-image">
                <img src={coach.image} alt={coach.name} />
              </div>
              <h3>{coach.name}</h3>
              <p>{coach.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coaches
