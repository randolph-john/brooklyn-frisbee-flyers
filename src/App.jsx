import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Sessions from './components/Sessions'
import Coaches from './components/Coaches'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero />
        <About />
        <Sessions />
        <Coaches />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
