import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import About from './components/About'
import Projects from './components/Projects'
import MobileNav from './components/MobileNav'
import Skills from './components/Skills'

function App() {
  const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false)

  // Toggle mobile nav
  const toggleNav = () => {
    setToggleMobileNav(!toggleMobileNav)
  }

  // Hide navbar when a link is clicked
  const hideMobileNav = () => {
    setToggleMobileNav(false)
  }

  return (
    <div className="App">
      <MobileNav hideMobileNav={hideMobileNav} toggleNav={toggleNav} toggleMobileNav={toggleMobileNav} />
      <Showcase toggleNav={toggleNav} />
      <About />
      <Projects />
    </div>
  )
}

export default App
