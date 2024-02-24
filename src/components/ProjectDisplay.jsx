//Style
import '../styles/ProjectDisplay.css'

//Dependencies
import {motion} from 'framer-motion'

export const ProjectDisplay = () => {

    return(
        
        <div className='pd-container'>
            <div className='pd-img-box'>
                
            </div>
            <div className='pd-description-container'>
                <p className='pd-f'>Featured Project</p>
                <h3>Flaker</h3>
                <div className='pd-description'>
                    <p>this is where all the description goes</p>
                </div>
                <div className='pd-stack'>

                </div>
                <div className='pd-link'>

                </div>
            </div>
        </div>
    )
}