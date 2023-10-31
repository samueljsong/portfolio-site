import '../styles/About.css'

//dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const About = (props) => {

    return(
        <>
            <div className='text-container'>
                <motion.p
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: "0.25"}}  
                    exit={{opacity:0}}
                    className='about-text'>
                    About
                </motion.p>
            </div>
            
            <motion.div className='about-container' exit={{opacity: 0}}>
                <span className='space-small'></span>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>About</motion.h1>
            </motion.div>
        </>
    )
}