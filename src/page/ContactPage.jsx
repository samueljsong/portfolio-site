import '../styles/Contact.css'

//Dependencies
import { motion, warning } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from "@emailjs/browser"

//Components
import { Socials } from '../components/Socials'



export const ContactPage = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onNameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const onEmailChangeHandler =(e) => {
        setEmail(e.target.value)
    }

    const onMessageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceID = 'service_dilnvz6'
        const templateID = 'template_qx3ufio'
        const publickey ='Z-ZjUKk4TfZsO2veS'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Samuel",
            message: message
        }

        emailjs.send(serviceID, templateID, templateParams, publickey)
            .then((response) => {
                console.log('Email sent successfully!', response)
                setName('');
                setEmail('');
                setMessage('')
                navigate('/thanks')
            })
            .catch((error) => {
                alert("Cannot send email...")
                console.error("Error in sending email:", error)
            })
    }

    return(
        <>
            <motion.p
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: "0.5", delay:0.25}}  
                exit={{opacity:0}}
                className='contact-text'>
                Contact
            </motion.p>
            <motion.div className='contact-container' 
            exit={{opacity: 0}} 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: "0.5", delay:0.25}}>
                <span className='c-space'></span>
                <motion.h1>Contact</motion.h1>
                <motion.p className='contact-description'>
                    Send me an email to get in touch at semuall0108@gmail.com
                </motion.p>
                <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <input className='name-input' type="text" name='name' required placeholder='Name'
                        onChange={onNameChangeHandler}/>
                    </div>
                    <div className='input-box'>
                        <input className='email-input' type="email" name='email' required placeholder='Email'
                        onChange={onEmailChangeHandler}/>
                    </div>
                    <div className='input-box'>
                        <textarea className='message-input' type="text" name='message' required placeholder='Message'
                        onChange={onMessageChangeHandler}></textarea>
                    </div>
                    <button className='submit-btn' type='submit'><p className='btn-text'>Send</p></button>
                </form>
                <motion.div initial={{opacity: 0, y: 20, x:3}} animate={{opacity: 1, y:0, x:0}} transition={{duration: "0.25", delay:0.5}} className='to-projects'>
                    <Link className='about-project-link' to={'/'}>Go back home</Link>
                    <motion.div
                        animate={{ x: [0, 25, 0], transition: { duration: 1.5, repeat: Infinity } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 arrow">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </motion.div>
                </motion.div>
                <Socials delay={0.25}></Socials>
            </motion.div>
        </>
    )
}