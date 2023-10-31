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
                    transition={{duration: "0.25"}}  
                    exit={{opacity:0}}
                    className='resume-text'>
                    Resume
                </motion.p>
            </div>
            <motion.div className='resume-container' exit={{opacity: 0}}>
                <span className='space-small'></span>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>Resume</motion.h1>
            </motion.div>
        
        </>
    )
}