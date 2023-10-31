import '../styles/Project.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export const Project = (props) => {

    return(
        <motion.div className='project-container' exit={{opacity: 0}}>
            <span className='space-small'></span>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>Project</motion.h1>
        </motion.div>
    )
}