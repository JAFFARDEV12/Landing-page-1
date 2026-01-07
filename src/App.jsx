import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Partners />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
