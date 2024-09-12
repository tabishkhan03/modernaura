import React from 'react'
import { About, FounderProfile,Interior,Mission, TeamProject } from '../components'

const page = () => {
  return (
    <>
    <div className="relative h-[80vh]  lg:h-screen    bg-black flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/about/background.png')",
          opacity: 0.5
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 font-maven-pro">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          We've made a life that<br />will change you.
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-white mb-8 max-w-2xl">
          To create beautiful, functional, and sustainable living
          environments that enhance the quality of life.
        </p>
        <button className="bg-[#1F1F1F] text-white font-bold py-2 px-4 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
    <FounderProfile/>
    <About img="/about/about.png" />
    <Mission/>
    <Interior/>
    <TeamProject/>
    </>
  )
}

export default page