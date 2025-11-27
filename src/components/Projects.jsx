import React from 'react'
import { motion } from 'framer-motion'


const fakeProjects = [
    {
      title: 'Intro Logo',
      tag: 'Animations',
      status: 'Coming soon',
      desc: 'Animazioni in 3D sulla composizione del nostro logo.',
      img: new URL('../assets/projects/intro-logo.png', import.meta.url).href,
    },
    {
      title: 'Particellar Systems',
      tag: 'VFX',
      status: 'Coming soon',
      desc: 'Sistemi particellari generativi che esplorano movimento, forma, audio e trasformazione.',
      img: new URL('../assets/projects/particellare.png', import.meta.url).href,
    },
    {
      title: 'Mr. Toff',
      tag: 'Stop Motion',
      status: 'Coming soon',
      desc: 'Un character animato in stop motion che prende vita.',
      img: new URL('../assets/projects/Mr-Toff.png', import.meta.url).href,
    },
  ]
  


const Projects = () => {
    return (
        <section className="section projects">
            <motion.div
                className="projects-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="projects-heading">
                    <h2 className="projects-title">Projects</h2>
                    <p className="projects-tagline">Sperimentazioni e lavori in arrivo.</p>
                </div>

                <div className="projects-grid-new">
                    {fakeProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card-new"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <div className="project-top">
                                <span className="project-tag-new">{project.tag}</span>
                                <span className="project-status-new">{project.status}</span>
                            </div>

                            <h3 className="project-title-new">{project.title}</h3>
                            <div className="project-image-wrapper">
                                <img src={project.img} alt={project.title} className="project-image" />
                                <div className="project-image-overlay" />
                            </div>
                            <p className="project-desc-new">{project.desc}</p>
                        </motion.div>

                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
