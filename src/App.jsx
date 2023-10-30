import { useState, useEffect} from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import './App.css'
import { Loading } from './components/Loading';
import { Routes, Route } from 'react-router-dom'

//Pages
import { Landing } from './page/Landing';
import { About } from './page/About';
import { Contact } from './page/Contact';
import { Resume } from './page/Resume';
import { Project } from './page/Project';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {damping: 100, stiffness: 2000};
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [cursorXY, setCursorXY] = useState({x: -100, y: -100})
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);


  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 41)
      cursorY.set(e.clientY - 41)
      const x = e.clientX - 4
      const y = e.clientY - 4
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

      <div id='cursor' style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}}></div>
      <motion.div id='cursor-border'
      style={{translateX: cursorXSpring, translateY: cursorYSpring}}></motion.div>

      <AnimatePresence>
        {
          loading && <Loading setLoading={setLoading} loading={loading}></Loading>
        }
      </AnimatePresence>

      {
        content? 
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        : <></>
      }
    </>
  )
}

export default App
