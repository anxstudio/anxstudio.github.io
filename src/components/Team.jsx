import React from 'react'
import { motion } from 'framer-motion'
import alex from '../assets/alex.png'
import alice from '../assets/alice.png'
import { Instagram, Github, Linkedin, Globe2 } from 'lucide-react'

const team = [
    {
        name: 'Alice Cavasino',
        role: 'Cinema and Digital Media Engineer',
        claim: 'Creativity with digital approach',
        details: 'Visual storytelling · VR & XR · Photography',
        img: alice,
        links: {
            portfolio: "https://alicecavasinoportfolio.wordpress.com/",
            instagram: "https://instagram.com/alice_cavasino_",
            linkedin: "https://www.linkedin.com/in/alice-cavasino-086a52260/"
        }
    },
    {
        name: 'Alex Argese',
        role: 'Data Science & Cinema and Digital Media Engineer',
        claim: 'Digital approach with creativity',
        details: 'Data storytelling · Immersive media · Creative coding',
        img: alex,
        links: {
            portfolio: "https://alexargese.github.io/",
            instagram: "https://instagram.com/alex_argese",
            github: "https://github.com/AlexArgese",
            linkedin: "https://www.linkedin.com/in/alex-argese-870228276/"
        }
    },
]

const Team = () => {
    return (
        <section className="section team">
            <motion.div
                className="team-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* heading */}
                <div className="team-heading">
                    <h1 className="team-title">Team</h1>
                    <p className="team-tagline">
                        Due prospettive complementari, una stessa visione digitale.
                    </p>
                </div>

                {/* vertical cards */}
                <div className="team-vertical-grid">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="team-vertical-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <h3 className="team-vertical-name">{member.name}</h3>
                            <p className="team-vertical-role">{member.role}</p>
                            <div className="team-vertical-photo">
                                <img src={member.img} alt={member.name} />
                                <div className="team-vertical-ring" />
                            </div>


                            <p className="team-vertical-claim">{member.claim}</p>
                            <div className="team-socials">
                                {member.links.portfolio && (
                                    <a
                                    href={member.links.portfolio}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="tooltip"
                                    data-tooltip="Portfolio"
                                    >
                                    <Globe2 size={18} />
                                    </a>
                                )}

                                {member.links.instagram && (
                                    <a
                                    href={member.links.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="tooltip"
                                    data-tooltip="Instagram"
                                    >
                                    <Instagram size={18} />
                                    </a>
                                )}

                                {member.links.github && (
                                    <a
                                    href={member.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="tooltip"
                                    data-tooltip="GitHub"
                                    >
                                    <Github size={18} />
                                    </a>
                                )}

                                {member.links.linkedin && (
                                    <a
                                    href={member.links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="tooltip"
                                    data-tooltip="LinkedIn"
                                    >
                                    <Linkedin size={18} />
                                    </a>
                                )}
                                </div>



                            <p className="team-vertical-details">{member.details}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Team
