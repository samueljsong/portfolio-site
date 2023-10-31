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
                    A full-stack, front-end, and JavaScript developer. Most of my time is spent on creating PROJECTS with exceptional digital experiences. 
                    Currently, I'm focused on implementing cutting-edge technologies to further enhance interactive experiences on the web.
            </motion.p>
            
            <motion.p 
                initial={{opacity: 0, y: 20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.25", delay: delay[2]}} 
                className='info-2'>
                    When I'm not crafting immersive web experiences, I revel in the enchanting world of paper, whether it be romance, comedy, or motivational.
                    As a food fanatic, you can also find me binge watching all seasons of Kitchen Nightmare. That's enough for introductions, lets learn why you should CONTACT ME.
            </motion.p>
            
            <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y: 0, x:0}} transition={{duration: "0.25", delay: delay[3]}} className='more-info'>
                <Link to={'/about'}>About me</Link>
            </motion.div>

            <Socials delay={delay[4]}></Socials>
        </motion.div>
    )
}