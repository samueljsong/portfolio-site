import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Loading.css'

export const Loading = (props) => {
    
    useEffect(() => {
        setTimeout(() => {
            props.setLoading(false);
        }, 2500)
    }, [])

    return(
        <div className='loading-container'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: "1"}} className="loading">
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
                <motion.div exit={{opacity: 0}}  className='obj'></motion.div>
            </motion.div>
        </div>
            
    )
}