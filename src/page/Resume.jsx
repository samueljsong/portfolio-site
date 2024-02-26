import '../styles/Resume.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

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
                
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.5", delay:0.25}}>Resume</motion.h1>
            </motion.div>
        
        </>
    )
}