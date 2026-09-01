import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import HomePage from './components/HomePage.jsx'
import WorkPage from './components/WorkPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'

const pageLinks = [
  { label: 'Home', kicker: 'Start', path: '/' },
  { label: 'Work', kicker: 'Projects', path: '/work' },
  { label: 'About', kicker: 'Story', path: '/about' },
  { label: 'Contact', kicker: 'Hello', path: '/contact' },
]

const pageOrder = pageLinks.map((page) => page.path)

function App() {
  const location = useLocation()
  const previousPathRef = useRef(location.pathname)
  const [directionClass, setDirectionClass] = useState('slide-next')

  useEffect(() => {
    const previousIndex = pageOrder.indexOf(previousPathRef.current)
    const currentIndex = pageOrder.indexOf(location.pathname)

    if (previousIndex !== -1 && currentIndex !== -1) {
      setDirectionClass(currentIndex >= previousIndex ? 'slide-next' : 'slide-prev')
    }

    previousPathRef.current = location.pathname
  }, [location.pathname])

  return (
    <div className="page-shell">
      <main className="content">
        <div key={location.pathname} className={`route-transition ${directionClass}`}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>

      <nav className="page-switcher" aria-label="Section switcher">
        {pageLinks.map((page) => (
          <NavLink
            key={page.label}
            to={page.path}
            className={({ isActive }) =>
              isActive ? 'page-switcher-item active' : 'page-switcher-item'
            }
          >
            <span className="page-kicker">{page.kicker}</span>
            <span className="page-label">{page.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default App
