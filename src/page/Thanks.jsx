//Style
import '../styles/Thanks.css'

//Dependencies
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'


export const Thanks = () => {

    return(
        <>
            <motion.div className="thanks-container"
            initial={{opacity: 0, y:20, x:3}} 
            animate={{opacity: 1, y: 0, x:0}} 
            transition={{duration: "0.25", delay: 0.25}}  
            exit={{opacity:0}}>
                <span className='thanks-space'></span>
                <motion.h1 className='thanks-title'>Thanks for <span className='thanks-blue'>Contacting</span> me!</motion.h1>
                <motion.p className='thanks-text'>I will get back to you soon</motion.p>
                <Link to={"/"} className='thanks-btn'>
                    <motion.div whileHover={{color:"#64ffda",border: "solid 1px #64ffda", scale:1.05}} 
                                whileTap={{scale: 0.9}} className='thanks-btn-div'>Home</motion.div>
                </Link>
            </motion.div>
        </>
    )
}