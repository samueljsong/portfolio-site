import '../styles/About.css'

//dependencies
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const About = () => {

    return(
        <>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>About</motion.h1>
            <Link to={'/'}>landing</Link>
        </>
    )
}