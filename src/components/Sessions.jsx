import React, { useState } from 'react'

function Sessions() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="sessions" className="sessions">
      <div className="container">
        <h2>Our Sessions</h2>
        <p className="sessions-subtitle">Choose between Full Day and Half Day sessions</p>

        <div className="sessions-grid">
          <div className="session-card">
            <h3>Full Day 9am - 3pm</h3>
            <p>
              This is our full day session intended for rising 5th graders through rising 9th graders.
              Dropoff is at 9am and pickup is at 3pm. Some snacks will be provided but campers should
              bring their lunch with them and any favorite snacks. Targeted at beginners you will learn
              the fundamentals of the game and improve skills throughout the week. Each camper gets their own frisbee!
            </p>
          </div>

          <div className="session-card">
            <h3>Half Day 9am - 12pm</h3>
            <p>
              Our Camp is designed to be a full day session, but if that doesn't work for your camper
              there is a morning only option. Pick up your camper at 12pm for a 3-hour morning ultimate
              experience where they'll be able to learn the fundamentals all before lunch! Each camper gets their own frisbee!
            </p>
          </div>
        </div>

        <div className="pricing">
          <h3>Full Day Week: $550</h3>
          <h3>Half Day Week: $400</h3>
          <button
            onClick={() => setShowForm(true)}
            className="signup-btn"
          >
            Sign-Up
          </button>
        </div>

        <div className="location-info">
          <p>
            Our camps are conveniently located at Prospect Park Parade Grounds Field 5. Just look for flying
            frisbees, that's where you'll find us!
          </p>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=M22M+QG,Brooklyn,New+York&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prospect Park Parade Grounds Field 5"
            ></iframe>
          </div>
          <p>
            As we do not have access to an indoor facility, camp will be canceled if the forecast
            predicts significant rain or any risk of thunder and lightning. In the event of a cancellation,
            all enrolled participants will be notified the evening prior and will receive a full refund
            for that day's fee.
          </p>
        </div>
      </div>

      {showForm && (
        <div className="form-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="form-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="form-modal-close" onClick={() => setShowForm(false)}>
              ✕
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScpagmOQTxEXWKzf5gy5GBbCgB4oqq6PU-MSJMx4QcBYwM6rg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default Sessions
