import React from 'react';

const AdvantageCard = ({ number, title, description }) => (
  <div className="bg-[#1A1A1A] rounded-lg p-6 flex flex-col items-center text-center">
    <span className="text-[#ff8c39] text-5xl font-bold mb-2">{number}</span>
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const OurUniqueAdvantages = () => {
  const advantages = [
    {
      number: "01",
      title: "COLLABORATIVE DESIGN PROCESS",
      description: "We work closely with you to understand your vision, style, and needs. Together, we'll craft a space that reflects your unique personality and enhances your life."
    },
    {
      number: "02",
      title: "Personalised Attention",
      description: "Your project is important to us. Our dedicated team provides you with one-on-one service throughout the entire design process, ensuring your satisfaction at every step."
    },
    {
      number: "03",
      title: "Expertise in Both Interior Design & Architecture",
      description: "We work closely with you to understand your vision, style, and needs. Together, we'll craft a space that reflects your unique personality and enhances your life."
    },
    {
      number: "04",
      title: "Streamlined Project Management",
      description: "We take the stress out of renovation. We handle all aspects of your project, from planning & budgeting to execution & completion, keeping you informed every step of the way."
    },
    {
      number: "05",
      title: "Competitive Rates & Transparent Pricing",
      description: "We offer competitive rates and transparent pricing structures, so you can make informed decisions throughout the design process."
    },
    {
        number: "06",
        title: "Sustainable & Eco-Friendly Solutions",
        description: "We prioritize sustainability by incorporating eco-friendly materials and energy-efficient designs. Our goal is to create beautiful spaces."
      }
      
  ];

  return (
    <div className="custom-container text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#ff8c39] mb-8">
          Why Choose Us?
        </h2>
        <p className="text-center text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
          At ModernAura, we&apos;re passionate about transforming houses into dream homes. We are a team of experienced
          interior designers and architects who collaborate to create spaces that are not only stunning but also functional
          and reflect your unique style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurUniqueAdvantages;