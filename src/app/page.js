import React from "react";
import { About,WhatWeOffer,Gallery, Testimonial } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="home-banner absolute inset-0 bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="text-3xl sm:text-4xl mb-2">
            <img src="/logo.png" alt="LOGO" className="w-full" />
          </div>
          <p className="font-manjari-400 font-color-two text-lg sm:text-2xl mb-2">
            Transforming Spaces, Elevating Lives
          </p>
          <h1 className="text-2xl sm:text-3xl font-marcellus-400 md:text-4xl lg:text-5xl mb-6 font-light leading-tight">
            Experience the Art of Fine Living with Our
            <br className="hidden sm:inline" />
            <span className="sm:inline">
              Bespoke Interior and Architectural Designs
            </span>
          </h1>
          <Link href="/designs/bedroom" className="border-2 border-white bg-transparent text-white px-6 sm:px-8 py-2 text-xs sm:text-sm hover:bg-white hover:text-black transition duration-300">
            EXPLORE
          </Link>
        </div>
      </div>
      <About img="/home/aboutus-img.png" />
      <div className="custom-container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <WhatWeOffer/>
      </div>
      <Gallery/>
      <Testimonial/>
    </>
  );
}
