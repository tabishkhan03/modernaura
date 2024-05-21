"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  // const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/pexels-fotoaibe-1668860.jpg" alt="Kitchen" />
          </div>
          <div className="embla__slide">
            <img src="/pexels-fotoaibe-1571460.jpg" alt="Kitchen" />
          </div>
          <div className="embla__slide">
            <img src="/pexels-fotoaibe-1643384.jpg" alt="Kitchen" />
          </div>
        </div>
      </div>
    </>
  );
}
