"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "I absolutely loved the work. I would definitely recommend Modern Aura  to anyone. They are very professional and made the entire experience amazing.",
      author: "Iqram Shaikh",
      // position: "CEO / Datadrift",
      image:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
    },
    {
      quote:
        "Modern Aura  has made our flat into a home, a home which we always wanted. They understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure. ",
      author: "Khan Shahfahad Faizan Ahmed ",
      // position: "CFO / Dashdash",
      image:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
    },
    {
      quote:
        "It was really good to get my home interior done by MODERNAURA and was really great to get it completed before 8 days of actual handover date...Good Job Guys...Really appreciate ASHRAF and the team for their hard work and dedication. ",
      author: "Qayem Raza ",
      // position: "CFO / Dashdash",
      image:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-2 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            What others say about us
          </h2>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="flex flex-col items-center  gap-4 rounded-lg  px-8 py-6 md:gap-6">
                  <div className="max-w-md text-center text-black lg:text-lg">
                    {testimonial.quote}
                  </div>

                  <div className="flex flex-col items-center  gap-2 sm:flex-row md:gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                      <img
                        src={testimonial.image}
                        loading="lazy"
                        alt={`Photo of ${testimonial.author}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                        {testimonial.author}
                      </div>
                      <p className="text-center text-sm text-indigo-300 sm:text-left md:text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
