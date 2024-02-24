import '../styles/About.css'

//dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { html } from '../assets/Svg'
import { css } from '../assets/Svg'
import { javascript } from '../assets/Svg'
import { react } from '../assets/Svg'
import { mysql } from '../assets/Svg'
import { mongodb } from '../assets/Svg'
import { nodejs } from '../assets/Svg'
import { java } from '../assets/Svg'
import { github } from '../assets/Svg'
import { python } from '../assets/Svg'
import { tailwind } from '../assets/Svg'

export const About = (props) => {

    return(
        <>
            <div className='text-container'>
                <motion.p
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: "0.5", delay:0.25}}  
                    exit={{opacity:0}}
                    className='about-text'>
                    About
                </motion.p>
            </div>
            
            <motion.div className='about-container' exit={{opacity: 0}}>
                <span className='about-space'></span>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}}>About</motion.h1>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}} className='about-details'>
                   <p>Hello, my name is Samuel Song and I love working with the web to perfect my craft in web development.
                    This goal first started when I stumbled across multiple websites that showed me the true potential of the web.
                    Ever since, I would attempt to figure out how certain web features were implemented, learning lots on the way.</p> 
                    <p>
                        Here are some of the technologies I am proficient with and have used to create my projects.
                    </p>
                </motion.div>
                <div className='about-tech-stack'>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: 0.5, delay:.75}} className='tech-stack'>
                        {html}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:0.90}} className='tech-stack'>
                        {css}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.05}} className='tech-stack'>
                        {javascript}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.20}} className='tech-stack'>
                        {react}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.35}} className='tech-stack'>
                        {mysql}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.50}} className='tech-stack'>
                        {mongodb}
                    </motion.div>
                </div>

                <div className='about-tech-stack-2'>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: 0.5, delay:.75}} className='tech-stack'>
                        {nodejs}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:0.90}} className='tech-stack'>
                        {java}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.05}} className='tech-stack'>
                        {github}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.20}} className='tech-stack'>
                        {python}
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.35}} className='tech-stack'>
                        UI/UX
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.50}} className='tech-stack'>
                        {tailwind}
                    </motion.div>
                </div>

                <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.65}} className='to-projects'>
                    <Link className='about-project-link' to={'/project'}>Check out my projects</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </motion.div>
            </motion.div>
        </>
    )
}