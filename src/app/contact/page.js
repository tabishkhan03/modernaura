import React from 'react'
import { Contact, Cta } from '../components'

const page = () => {
  return (
    <>
    <div className=" relative h-[80vh] bg-black flex items-center ">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/contact/background.png')",
          opacity: 0.5
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-center text-4xl md:text-6xl font-semibold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-center text-md sm:text-lg md:text-xl text-white mb-8 ">
          Get in Touch
        </p>
      </div>
    </div>
    <Contact/>
    <Cta/>
    </>
  )
}

export default page