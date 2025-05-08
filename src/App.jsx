import React from 'react'
import './App.css'
import Header from './components/Header'
import HomeSection from './components/Home'
import ProjectsSection from './components/Projects'
import SkillsSection from './components/Skills'
import AboutSection from './components/About'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
    <>
      <Header />  
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
