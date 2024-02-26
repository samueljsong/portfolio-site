import '../styles/Resume.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//image
import resumesc from "../assets/resumephoto.png"

//file
import resume from "../assets/Samuel-Resume.pdf"

export const Resume = (props) => {


    return(
        <>
            <div className='text-container'>
                <motion.p
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: "0.5", delay:0.25}}  
                    exit={{opacity:0}}
                    className='resume-text'>
                    Resume
                </motion.p>
            </div>
            <motion.div className='resume-container' exit={{opacity: 0}}>
            <span className='r-space'></span>
                <motion.div className='resume-title'
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}}>
                    <motion.h1 >Resume</motion.h1>
                    <motion.a href={resume} download className='resume-download'
                    whileTap={{scale: 0.9}}
                    whileHover={{border: "solid 1px #64ffda", color: "#64ffda"}}>
                        Download
                    </motion.a>
                </motion.div>

                <motion.img className='resume-pic' src={resumesc} alt="" 
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.5}}/>

                <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:0.75}} className='to-projects'>
                    <Link className='about-project-link' to={'/contact'}>Contact me</Link>
                    <motion.div
                        animate={{ x: [0, 25, 0], transition: { duration: 1.5, repeat: Infinity } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </motion.div>
                </motion.div>
                <span className='resume-space'></span>
            </motion.div>
        </>
    )
}