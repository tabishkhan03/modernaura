import React from 'react'
import { Gallery, OurUniqueAdvantages, Testimonial, WhatWeOffer } from '../components'

const page = () => {
  return (
    <>
    <div className=" relative h-[80vh] flex items-center ">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/services/background.jpg')",
          opacity: 0.5
        }}
      />

      {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-center text-4xl md:text-6xl font-semibold text-white mb-4">
          Our Services
        </h1>
      </div>
    </div>
    <div className="custom-container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
     <WhatWeOffer/>
    </div>
     <Gallery/>
     <OurUniqueAdvantages/>
     <Testimonial/>
    </>
  )
}

export default page