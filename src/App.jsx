import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Technologies from './componenets/Technologies'
import Experience from './componenets/Experience'
import Project from './componenets/Project'
import Contact from './componenets/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
  <Navbar/>
  <Hero/>
  <About/>
  <Technologies/>
  <Experience/>
  <Project/>
  <Contact/>
  </div>
  </div>
  )
}

export default App
