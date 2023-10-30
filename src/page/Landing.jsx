import '../styles/Landing.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export const Landing = () => {

    return(
        <>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>Landing</motion.h1>
            <Link to={'/about'}>about</Link>
        </>
    )
}