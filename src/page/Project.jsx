import '../styles/Project.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

//Components
import { ProjectDisplay } from '../components/ProjectDisplay'

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
                <ProjectDisplay/>
            </div>
        </>
    )
}