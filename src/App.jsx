import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <Hero />
        </section>

        <section id="about" className="section about">
          <About />
        </section>

        <section id="team" className="section team">
          <Team />
        </section>

        <section id="projects" className="section projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
