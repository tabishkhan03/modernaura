import React from 'react';

const WhatWeOffer = () => {
  const cardData = [
    {
      icon: "/icons/bedroom-icon.png",
      title: "Bedroom Setup",
      description: "Create your perfect sanctuary with our stylish and comfortable bedroom setups.",
      bgcolor: "#1D1D1D"
    },
    {
      icon: "/icons/kitchen-icon.png",
      title: "Kitchen Setup",
      description: "Transform your kitchen with our efficient and beautiful setups for a delightful cooking experience.",
      bgcolor: "#101010"
    },
    {
      icon: "/icons/drawing-room.png",
      title: "Drawing Setup",
      description: "Design inspiring drawing rooms perfect for creativity and professional work.",
      bgcolor: "#1D1D1D"
    },
    {
      icon: "/icons/living-room.png",
      title: "Living Setup",
      description: "Elevate your living area with our stylish and cozy setups for relaxation and entertainment.",
      bgcolor: "#101010"
    },
    {
      icon: "/icons/architecture-icon.png",
      title: "Architecture Design",
      description: "Innovative designs that harmonise aesthetics and functionality for timeless architecture.",
      bgcolor: "#1D1D1D"
    },
    {
      icon: "/icons/concept-design.png",
      title: "Concept Design",
      description: "Visionary solutions that turn ideas into reality, uniquely tailored to your needs.",
      bgcolor: "#101010"
    },
  ];

  return (
    <>
      <div className="text-section mb-12 text-center">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
          What we offer to our clients
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
          We provide our services with perfections that will make you Satisfied. Our designers tried to combine several styles in a single interior.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 xl:p-12 rounded-xl shadow-lg w-full h-full transition-transform duration-400 ease-in-out transform hover:shadow-[0_4px_15px_rgb(255, 140, 57)] hover:-translate-y-2"
            style={{
              backgroundColor: card.bgcolor,
            }}
          >
            <img src={card.icon} alt={card.title} className="mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatWeOffer;
