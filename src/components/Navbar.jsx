import '../styles/Navbar.css'

//Dependencies
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navbar = () => {

    const logo = <svg  className='logo' width="3rem" height="3rem" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#ffffff">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
    <path d="M32 2C15.432 2 2 15.431 2 32c0 16.569 13.432 30 30 30s30-13.432 30-30C62 15.431 48.568 2 32 2m8.953 42.678c-2.049 1.752-4.943 2.627-8.684 2.627c-3.82 0-6.826-.863-9.014-2.588c-2.189-1.727-3.283-4.098-3.283-7.117h5.787c.188 1.326.557 2.316 1.105 2.973c1.006 1.195 2.727 1.791 5.166 1.791c1.461 0 2.646-.156 3.557-.473c1.73-.604 2.594-1.725 2.594-3.365c0-.957-.424-1.699-1.27-2.225c-.848-.512-2.191-.965-4.029-1.357l-3.141-.689c-3.088-.684-5.209-1.424-6.363-2.224c-1.957-1.339-2.934-3.432-2.934-6.28c0-2.599.957-4.757 2.869-6.476c1.912-1.72 4.723-2.579 8.43-2.579c3.096 0 5.734.81 7.922 2.431c2.184 1.621 3.33 3.974 3.438 7.058h-5.828c-.107-1.745-.887-2.985-2.34-3.721c-.969-.485-2.174-.729-3.613-.729c-1.602 0-2.879.315-3.834.945s-1.434 1.509-1.434 2.638c0 1.037.471 1.811 1.414 2.322c.604.342 1.889.742 3.855 1.201l5.092 1.201c2.23.524 3.904 1.227 5.018 2.105c1.729 1.365 2.594 3.341 2.594 5.925c0 2.651-1.023 4.854-3.074 6.606" fill="#ffffff"/>
    </g>
    </svg>

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
                <motion.div class="logo-container">
                    <Link to={'/'} >{logo}</Link>
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