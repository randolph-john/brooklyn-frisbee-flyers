import React, { useState } from 'react'

function Testimonials() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    testimonial: ''
  })

  const testimonials = [
    {
      text: "My daughter had a wonderful time — her first time playing! She came home each day tired, happy, and with a sense of accomplishment. Thanks for the awesome camp!",
      author: "Parent"
    },
    {
      text: "My son had a great time at Brooklyn Frisbee Flyers. He got to play with friends, make new ones, and learned a lot about the sport from supportive coaches. It was also great exercise. He came home tired (in the best way!) every afternoon.",
      author: "Parent"
    },
    {
      text: "Every day my kids came home happy and energized! The small group sizes and passionate staff really inspired them — they looked up to the coaches and are excited to stick with ultimate frisbee.",
      author: "Parent"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, we'll show an alert. This can be connected to a backend or email service
    alert('Thank you for your testimonial! We will review it and add it to our site soon.')
    setFormData({ name: '', testimonial: '' })
    setShowForm(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Parents Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="add-testimonial-section">
          <h3>Share Your Experience</h3>
          <p>Have a story to share about Brooklyn Frisbee Flyers? We'd love to hear from you!</p>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="add-testimonial-btn"
            >
              Add Your Testimonial
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="testimonial-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="testimonial">Your Testimonial</label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Share your experience with Brooklyn Frisbee Flyers..."
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
