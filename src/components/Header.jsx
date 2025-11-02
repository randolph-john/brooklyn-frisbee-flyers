import React from 'react'

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">BrooklynFrisbeeFlyers</a>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Who we are</a></li>
            <li><a href="#sessions" onClick={() => setMobileMenuOpen(false)}>Sessions</a></li>
            <li><a href="#coaches" onClick={() => setMobileMenuOpen(false)}>Coaches</a></li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn">Contact Us</a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? '✕' : '☰'} Menu
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <button
            className="close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕ Close
          </button>
          <nav className="mobile-nav">
            <ul>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Who we are</a></li>
              <li><a href="#sessions" onClick={() => setMobileMenuOpen(false)}>Sessions</a></li>
              <li><a href="#coaches" onClick={() => setMobileMenuOpen(false)}>Coaches</a></li>
            </ul>
            <div className="mobile-contact">
              <p>About Us</p>
              <p><a href="mailto:brooklynfrisbeeflyers@gmail.com">brooklynfrisbeeflyers@gmail.com</a></p>
              <p><a href="tel:9175968725">(917) 596-8725</a></p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
