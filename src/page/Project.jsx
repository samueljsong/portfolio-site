import '../styles/Project.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//Components
import { ProjectDisplay } from '../components/ProjectDisplay'

//Import Project info
import { p1,p2,p3 } from '../util/ProjectText'


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

            <div className='p-container'>
                <span className='p-space'></span>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}}>Project</motion.h1>
                <span className='p-space-small'></span>
                <motion.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: "0.5", delay:0.50}} >
                    <ProjectDisplay p={p1}/>
                </motion.div>
                <span className='p-space'></span>
                <motion.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: "0.5", delay:0.75}} >
                    <ProjectDisplay p={p2}/>
                </motion.div>
                <span className='p-space'></span>
                <motion.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: "0.5", delay:1}} >
                    <ProjectDisplay p={p3}/>
                </motion.div>
                <span className='p-space'></span>
                <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.5", delay:1.25}} className='to-projects'>
                    <Link className='about-project-link' to={'/resume'}>Check out my resume</Link>
                    <motion.div
                        animate={{ x: [0, 25, 0], transition: { duration: 1.5, repeat: Infinity } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </motion.div>
                </motion.div>
                <span className='p-b-space'></span>
            </div>
        </>
    )
}