import { useState, useEffect} from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import './App.css'
import { Loading } from './components/Loading';
import { Routes, Route } from 'react-router-dom'

//Pages
import { Landing } from './page/Landing';
import { About } from './page/About';
import { ContactPage } from './page/ContactPage';
import { Resume } from './page/Resume';
import { Project } from './page/Project';
import { Thanks } from './page/Thanks';

//Components
import { Navbar } from './components/Navbar';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorXY, setCursorXY] = useState({x: -100, y: -100})
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 41)
      cursorY.set(e.clientY - 41)
      const x = e.clientX - 30
      const y = e.clientY - 30
      setCursorXY({x, y});
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  useEffect(() => {
    if(!loading){
      setTimeout(() => {
        setContent(true);
      }, 1000)
    }
    return
  }, [loading])


  return (
    <>

      <div id='cursor' style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}}/>

      <AnimatePresence>
        {
          loading && <Loading setLoading={setLoading} loading={loading} ></Loading>
        }
      </AnimatePresence>

      {
        content? 
            <div className='container'>
              <Navbar/>
              <Routes>
                <Route path='/' element={
                  <Landing/>
                }/>
                <Route path='/about' element={
                  <About/>
                }/>
                <Route path='/project' element={
                  <Project/>
                }/>
                <Route path='/resume' element={
                  <Resume/>
                }/>
                <Route path='/contact' element={
                  <ContactPage/>
                }/>
                <Route path='/thanks' element={
                  <Thanks/>
                }/>
              </Routes>
            </div>
          
        
        : <></>
      }
    </>
  )
}

export default App
