import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section about">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Titolo + tagline */}
        <div className="about-heading">
          <h1 className="about-title">About</h1>
          <p className="about-tagline">
            Creiamo esperienze digitali dove immaginazione, suono e tecnologia
            dialogano in un unico linguaggio visivo.
          </p>
        </div>

        {/* Tre blocchi / colonne */}
        <div className="about-grid">
          <div className="about-block">
            <h3>Cosa siamo</h3>
            <p>
              ANX Studio è un laboratorio di digital media art e design
              dove la ricerca incontra la sperimentazione visiva.
              Lavoriamo su progetti che mescolano estetica, narrazione
              e tecnologia in modo fluido.
            </p>
          </div>

          <div className="about-block">
            <h3>Cosa facciamo</h3>
            <p>
              Dal <strong>data storytelling</strong> agli{' '}
              <strong>immersive media</strong>, fino al{' '}
              <strong>creative coding</strong>, progettiamo esperienze
              che trasformano concetti complessi in storie chiare,
              sensoriali e memorabili.
            </p>
          </div>

          <div className="about-block">
            <h3>Come lavoriamo</h3>
            <ul>
              <li>ascolto e analisi dei contenuti</li>
              <li>prototipi rapidi e iterazione</li>
              <li>cura di ritmo, spazio e suono</li>
              <li>attenzione al dettaglio visivo</li>
            </ul>
          </div>
        </div>

        {/* Piccola frase manifesto sotto */}
        <p className="about-manifesto">
          Tecnologia come estensione dell’immaginazione, non sua sostituzione.
        </p>
      </motion.div>
    </section>
  )
}

export default About
