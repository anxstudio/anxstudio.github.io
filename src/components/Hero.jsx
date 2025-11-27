// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import headerBg from '../assets/header-bg.png'

const pills = [
  'AI',
  'Data storytelling',
  'Immersive media',
  'VR & XR',
  'Motion graphics',
  'Sound design',
  'Creative coding',
  'Animation',
  'Motion Graphic'
]

const Hero = () => {
  return (
    <section className="hero">

      {/* Background ANX */}
      <div className="hero-bg-wrapper">
        <img src={headerBg} alt="ANX Studio" className="hero-bg-image" />
      </div>

      {/* Overlay content */}
      <motion.div
        className="hero-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          A digital lab<br />
          where art and imagination meet<br />
          innovation and technology.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Un approccio che intreccia ricerca, emozione e linguaggi tecnologici.
        </motion.p>

        <motion.div
          className="hero-pill-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.3 }
            }
          }}
        >
          {pills.map((p) => (
            <motion.span
              key={p}
              className="hero-pill"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {p}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
