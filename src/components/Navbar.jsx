import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id) => {
        const section = document.getElementById(id)
        if (!section) return
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMenuOpen(false) // chiudi il menu su mobile dopo il click
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
                rootMargin: '-40% 0px -40% 0px',
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
                    <img src="/logo_horizontal_white.png" style={{ width: '10em' }} />
                </div>

                {/* toggle hamburger / X per mobile */}
                <button
                    className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span className="nav-toggle-line line1"></span>
                    <span className="nav-toggle-line line2"></span>
                    <span className="nav-toggle-line line3"></span>
                </button>


                {/* link nav */}
                <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
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
