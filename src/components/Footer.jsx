import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-copyright">
            © {new Date().getFullYear()} ANX Studio · All rights reserved.
          </p>
          <p>Digital Lab where Art and Imagination meet Innovation and Technology.</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/anxstudio" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://instagram.com/anxstudio_digitallab" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:anxstudio.digitallab@gmail.com">anxstudio.digitallab@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
