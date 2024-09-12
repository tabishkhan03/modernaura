// 'use client'

// import React, { useEffect, useRef } from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide'
// import { FaUserCircle } from 'react-icons/fa'
// import '@splidejs/react-splide/css'

// const testimonials = [
//   {
//     name: "Iqram Shaikh",
//     quote: "I absolutely loved the work. I would definitely recommend Modern Aura to anyone. They very professional and made the entire experience amazing."
//   },
//   {
//     name: "Jane Doe",
//     quote: "Working with Modern Aura was a game-changer for our business. Their expertise and dedication are unmatched."
//   },
//   {
//     name: "John Smith",
//     quote: "The team at Modern Aura went above and beyond our expectations. I couldn't be happier with the results."
//   }
// ]

// export default function TestimonialCarousel() {
//   const splideRef = useRef(null)

//   useEffect(() => {
//     if (splideRef.current) {
//       splideRef.current.splide.on('moved', () => {
//         // Force a re-render to update the active dot
//         splideRef.current?.forceUpdate()
//       })
//     }
//   }, [])

//   return (
//     <div className="bg-[#0f0f0f] text-white p-4 sm:p-6 md:p-8 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
//         What others say <span className="font-color-two">about us.</span>
//       </h2>
//       <Splide
//         ref={splideRef}
//         options={{
//           type: 'fade',
//           rewind: true,
//           arrows: false,
//           pagination: false,
//         }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <SplideSlide key={index}>
//             <div className="flex flex-col items-center mb-6 sm:mb-8">
//               <FaUserCircle className="font-color-two mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16" />
//               <h3 className="text-lg sm:text-xl font-color-two font-semibold">{testimonial.name}</h3>
//             </div>
//             <p className="text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
//               "{testimonial.quote}"
//             </p>
//           </SplideSlide>
//         ))}
//       </Splide>
//       <div className="flex justify-center space-x-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => splideRef.current?.go(index)}
//             className={`h-2 w-2 rounded-full ${
//               splideRef.current?.splide.index === index ? 'bg-[#ff6b00]' : 'bg-gray-600'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


'use client'

import React, { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FaUserCircle } from 'react-icons/fa'
import '@splidejs/react-splide/css'

const testimonials = [
  {
    name: "Iqram Shaikh",
    quote: "I absolutely loved the work. I would definitely recommend Modern Aura to anyone. They very professional and made the entire experience amazing."
  },
  {
    name: "Qayem Raza ",
    quote: "It was really good to get my home interior done by MODERNAURA and was really great to get it completed before 8 days of actual handover date...Good Job Guys...Really appreciate ASHRAF and the team for their hard work and dedication. "
  },
  {
    name: "Khan Shahfahad Faizan Ahmed ",
    quote: "Modern Aura  has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure. "
  }
]

export default function TestimonialCarousel() {
  const splideRef = useRef(null)

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.on('moved', () => {
        splideRef.current?.forceUpdate()
      })
    }
  }, [])

  return (
    <div className="w-full bg-[#0f0f0f]">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] mx-auto py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-white">
          What others say <span className="font-color-two">about us.</span>
        </h2>
        <Splide
          ref={splideRef}
          options={{
            type: 'fade',
            rewind: true,
            arrows: false,
            pagination: false,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <FaUserCircle className="font-color-two mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16" />
                <h3 className="text-lg sm:text-xl font-color-two font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white">
              &quot;{testimonial.quote}&quot;
              </p>
            </SplideSlide>
          ))}
        </Splide>
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => splideRef.current?.go(index)}
              className={`h-2 w-2 rounded-full ${
                splideRef.current?.splide.index === index ? 'bg-[#ff6b00]' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}