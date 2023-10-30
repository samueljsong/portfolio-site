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
        <motion.div className='landing-container' initial={{opacity:1}} exit={{opacity: 0}} transition={{duration:2}}>
            <span className='space'></span>
            <motion.h1 
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.25", delay: delay[0]}}  
                exit={{opacity:0}} className='name'>
                    I'M SAMUEL SONG
            </motion.h1>

            <motion.p 
                initial={{opacity: 0, y: 20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.25", delay: delay[1]}} 
                className='info-1'>
                    Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,
            </motion.p>
            
            <motion.p 
                initial={{opacity: 0, y: 20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.25", delay: delay[2]}} 
                className='info-2'>
                    Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, you can find me reading ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can CONTACT ME
            </motion.p>
            
            <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y: 0, x:0}} transition={{duration: "0.25", delay: delay[3]}} className='more-info'>
                <Link to={'/about'}>Click to see more about me</Link>
            </motion.div>

            <Socials delay={delay[4]}></Socials>
        </motion.div>
    )
}