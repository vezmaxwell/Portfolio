import React from 'react'


// Components 
import Portfolio from './components/Portfolio'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'
import NavLeft from './components/NavLeft'
import NavRight from './components/NavRight'

function App() {

  
  return (
    <>
    <NavLeft />
    <NavRight />
    <div className="whole-page">
      
      <Landing />
      <Portfolio/>
      <Skills />
      <Interests />
      <Contact />
    </div>
    </>
  )
}

export default App
