import '../styles/Contact.css'

//Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//Components
import { Socials } from '../components/Socials'

export const Contact = (props) => {

    return(

        <motion.div className='contact-container' exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>
            <span className='space-small'></span>
            <motion.h1>Contact</motion.h1>
            <motion.p>
                Send me an email to get in touch at semuall0108@gmail.com
            </motion.p>
            <form action="https://formsubmit.co/semuall0108@gmail.com" method="POST">
                <input className='name-input' type="text" name='name' required placeholder='Name'/>
                <input className='email-input' type="email" name='email' required placeholder='Email'/>
                <textarea className='message-input' type="text" name='message' required placeholder='Message'></textarea>
                <button className='submit-btn' type='submit'>Send</button>
            </form>
            <motion.div className='home-link'>
                <Link to={'/'}>Go back home</Link>
            </motion.div>
            <Socials delay={0.3}></Socials>
        </motion.div>
    )
}