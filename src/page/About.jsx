import '../styles/About.css'

//dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const About = (props) => {

    return(
        <motion.div className='about-container' exit={{opacity: 0}}>
            <span className='space-small'></span>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>About</motion.h1>
        </motion.div>
    )
}