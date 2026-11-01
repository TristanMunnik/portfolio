import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import WorkPage from './components/WorkPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import OffTheClock from './components/OffTheClock.jsx'
import ContactPage from './components/ContactPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HomePage />
        <WorkPage />
        <AboutPage />
        <OffTheClock />
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}

export default App
