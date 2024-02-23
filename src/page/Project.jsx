import '../styles/Project.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export const Project = (props) => {

    return(
        <>
            <div className='text-container'>
                <motion.p
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: "0.5", delay:0.25}}  
                    exit={{opacity:0}}
                    className='project-text'>
                    Project
                </motion.p>
            </div>
            <motion.div className='project-container' exit={{opacity: 0}}>
                <span className='space-small'></span>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}}>Project</motion.h1>
                
                {/* GreenBanana */}
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}} className='project-card-container'>
                    <div className='project-image-container'></div>
                    <div className='project-info-container'>
                        <p className='project-featured'>Featured Project</p>
                        <h2 className='project-title'>GreenBanana</h2>
                        <div className='project-general-info'></div>
                        <div className='project-tech-stack'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript (EJS)</p>
                            <p>SQL</p>
                            <p>NodeJS</p>
                        </div>
                        <div className='project-site'>
                            <a href="https://github.com/samueljsong" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='socials'>
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Phlo */}
                {/* <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}} className='project-card-container'>
                    <div className='project-image-container2'></div>
                    <div className='project-info-container2'>
                        <p className='project-featured'>Featured Project</p>
                        <h2 className='project-title'>Phlo</h2>
                        <div className='project-general-info2'></div>
                        <div className='project-tech-stack2'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript (EJS)</p>
                            <p>SQL</p>
                            <p>NodeJS</p>
                        </div>
                        <div className='project-site'>
                            <a href="https://github.com/samueljsong" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='socials'>
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div> */}

                {/* Portfolio */}
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}} className='project-card-container'>
                    <div className='project-image-container'></div>
                    <div className='project-info-container'>
                        <p className='project-featured'>Featured Project</p>
                        <h2 className='project-title'>GreenBanana</h2>
                        <div className='project-general-info'></div>
                        <div className='project-tech-stack'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript (EJS)</p>
                            <p>SQL</p>
                            <p>NodeJS</p>
                        </div>
                        <div className='project-site'>
                            <a href="https://github.com/samueljsong" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='socials'>
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
                <span className='space-small'></span>
            </motion.div>
        </>
    )
}