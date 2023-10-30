import '../styles/Resume.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export const Resume = (props) => {


    return(
        <motion.div className='resume-container' exit={{opacity: 0}}>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>Resume</motion.h1>
        </motion.div>
    )
}