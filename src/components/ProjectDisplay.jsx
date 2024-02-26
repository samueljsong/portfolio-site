//Style
import '../styles/ProjectDisplay.css'

//Dependencies
import {motion} from 'framer-motion'

//icons
import git from "../assets/github.png"
import link from "../assets/link.png"

export const ProjectDisplay = ({p}) => {

    return(
        
        <div className='pd-container'>
            <a href={p.pl} target='blank' className='pd-img-box'>
                <img className='pd-img' src={p.pi} alt="" />
            </a>
            <div className='pd-description-container'>
                <p className='pd-f blue-text'>Featured Project {p.pnum}</p>
                <h3 className='pd-name'>{p.pt}</h3>
                <div className='pd-description'>
                    <p className='pd-d-text'>{p.pd}</p>
                </div>
                <div className='pd-stack'>
                    <p>{p.ps}</p>
                </div>
                <div className='pd-link'>
                    <a href={p.pl} target='blank'><img src={link} alt="" /></a>
                    <a href={p.pg} target='blank'><img src={git} alt="" /></a>
                </div>
            </div>
        </div>
    )
}