import '../styles/Landing.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

//Components
import { Socials } from '../components/Socials'
import { useEffect, useState } from 'react'

export const Landing = (props) => {

    useEffect(() => {
        setTimeout(() => {
            setDelay([0, 0.15, 0.3, 0.45, 0.6])
        }, 2)
    },[])

    const [delay, setDelay] = useState([0.8, 0.95, 1.1, 1.25, 1.4])

    return(
        <>
            <motion.p 
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.25", delay: delay[4]}}  
                exit={{opacity:0}}
                className='landing-text'>SS
            </motion.p>
            <motion.div className='landing-container' initial={{opacity:1}} exit={{opacity: 0}} transition={{duration:2}}>
                <span className='space'></span>
                <motion.h1 
                    initial={{opacity: 0, y:20, x:3}} 
                    animate={{opacity: 1, y: 0, x:0}} 
                    transition={{duration: "0.25", delay: delay[0]}}  
                    exit={{opacity:0}} className='name'>
                        SAMUEL SONG
                </motion.h1>

                <motion.p 
                    initial={{opacity: 0, y: 20, x:3}} 
                    animate={{opacity: 1, y: 0, x:0}} 
                    transition={{duration: "0.25", delay: delay[1]}} 
                    className='info-1'>
                        A full-stack, front-end, JavaScript developer, and a database specialist. Most of my time is spent on creating {<span><Link to={'/project'} style={{color: "#64ffda"}}>PROJECTS</Link></span>} with exceptional digital experiences. 
                        Currently, I'm focused on implementing cutting-edge technologies to further enhance interactive experiences on the web.
                </motion.p>
                
                <motion.p 
                    initial={{opacity: 0, y: 20, x:3}} 
                    animate={{opacity: 1, y: 0, x:0}} 
                    transition={{duration: "0.25", delay: delay[2]}} 
                    className='info-2'>
                        Feel free to {<span><Link to={'/contact'} style={{color: "#64ffda"}}>CONTACT ME</Link></span>}.
                </motion.p>
                
                <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y: 0, x:0}} transition={{duration: "0.25", delay: delay[3]}} className='more-info'>
                    <Link to={'/about'} style={{color: "#64ffda"}}>Learn more about me</Link>
                    <motion.div
                        animate={{ x: [0, 25, 0], transition: { duration: 1.5, repeat: Infinity } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </motion.div>

                </motion.div>

                <Socials delay={delay[4]}></Socials>
            </motion.div>
        </>
    )
}