//Style
import '../styles/ProjectDisplay.css'

//Dependencies
import {motion} from 'framer-motion'

//icons
import git from "../assets/github.png"
import link from "../assets/link.png"

export const ProjectDisplay = () => {

    return(
        
        <div className='pd-container'>
            <div className='pd-img-box'>
                
            </div>
            <div className='pd-description-container'>
                <p className='pd-f blue-text'>Featured Project</p>
                <h3>Flaker</h3>
                <div className='pd-description'>
                    <p className='pd-d-text'>A web application for users to plan out various events with their friends. CRUD application with great UI/UX</p>
                </div>
                <div className='pd-stack'>
                    <p>React</p>
                    <p>NodeJS</p>
                    <p>MySQL</p>
                    <p>Framer Motion</p>
                </div>
                <div className='pd-link'>
                    <a href="https://flaker.netlify.app/" target='blank'><img src={link} alt="" /></a>
                    <a href="https://github.com/samueljsong/Flaker-Client" target='blank'><img src={git} alt="" /></a>
                </div>
            </div>
        </div>
    )
}