import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Work from '../work/Work'
import Portfolio from '../portfolio/Portfolio'
import Contacts from '../contacts/Contacts'
import './mainContent.scss'
import { BsCodeSlash } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'

const MainContent = ({ loading }) => {
  const location = useLocation()

  document.addEventListener('mousemove', e => {
    const x = e.clientX / 25
    const y = e.clientY / 25
    document.querySelector('#mainIcon').style.transform = "translate(" + x + "px, " + y + "px)"
  })

  const routes = [
    {path: '/', component: <Home/>},
    {path: '/about', component: <About/>},
    {path: '/work', component: <Work/>},
    {path: '/portfolio', component: <Portfolio/>},
    {path: '/contacts', component: <Contacts/>},
  ]
  return(
    <div className="main-content">
      <AnimatePresence>
        {loading && <motion.div 
          className="loader"
          initial={{ transform: 'scaleX(0)', transformOrigin: 'right' }}
          animate={{ transform: 'scaleX(1)' }}
          exit={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
          transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>}
        <Routes location={location} key={location.pathname}>
          {routes.map(({path, component}) => 
            <Route key={path} path={path} element={component} /> 
          )}
        </Routes>
      </AnimatePresence>
      <div className="icon-wrapper" id="mainIcon">
        <BsCodeSlash />
      </div>
    </div>
  )
}

export default MainContent