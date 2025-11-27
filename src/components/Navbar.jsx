import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // attiva quando sta al centro dello schermo
        threshold: 0,
      }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => sections.forEach((sec) => observer.unobserve(sec))
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <div className="logo" onClick={() => scrollTo('home')}>
          <img src='/logo_horizontal_white.png' style={{width:"10em"}}/>
        </div>

        <nav className="nav-links">
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollTo('about')}
          >
            About
          </button>

          <button
            className={activeSection === 'team' ? 'active' : ''}
            onClick={() => scrollTo('team')}
          >
            Team
          </button>

          <button
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollTo('projects')}
          >
            Projects
          </button>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
