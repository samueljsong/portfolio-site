import '../styles/Navbar.css'

//Dependencies
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navbar = () => {

    const initial = {
        opacity: 0,
        y: -20
    }

    const animate = {
        opacity: 1,
        y: 0
    }

    return(
        <div className='nav-container'>
            <motion.div>
                <Link to={'/'}><h1>SS</h1></Link>
            </motion.div>

            <div className='page-directories'>
                <motion.div initial={initial} animate={animate} transition={{duration: 0.25}} className='directory-container'>
                    <Link className='directory' to={'/about'}>About</Link>
                </motion.div>
                <motion.div initial={initial} animate={animate} transition={{duration: 0.25, delay: 0.15}} className='directory-container'>
                    <Link className='directory' to={'/project'}>Project</Link>
                </motion.div>
                <motion.div initial={initial} animate={animate} transition={{duration: 0.25, delay:0.3}} className='directory-container'>
                    <Link className='directory' to={'/resume'}>Resume</Link>
                </motion.div>
                <motion.div initial={initial} animate={animate} transition={{duration: 0.25, delay: 0.45}} className='directory-container'>
                    <Link className='directory' to={'/contact'}>Contact</Link>
                </motion.div>
            </div>
        </div>
    )
}