import React from 'react'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './Footer'

function Portfolio() {
  return (
    <div className='wrapper'>
      <Header/>
      <Home/>
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
