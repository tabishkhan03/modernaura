import React from 'react';

const Mission = () => {
    return (
        <div className="about-container flex flex-col lg:flex-row justify-between items-center !pb-0">
            {/* Image Section */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center relative mb-8 lg:mb-0 order-1 lg:order-2">
                <img className="founder-img w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]" src="/about/mission.png" alt="Founder Image" />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-8 order-2 lg:order-1">
                <p className="bg-white text-black text-base sm:text-lg px-4 py-2 mb-4">
                    Our Mission
                </p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
                Our our mission is to craft spaces that reflect our client's  <span className="text-orange-500">unique personalities and lifestyles.</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Modern Aura is a premier interior design firm specializing in Commercial, Residential, and Showroom interiors. Celebrated for our expertise, we excel in delivering comprehensive turnkey projects, managing every aspect from the initial design concept to the final construction phase. With a passion for innovative design and a keen eye for detail, we transform spaces into inspiring environments that reflect the unique vision and style of our clients.
                </p>
            </div>
        </div>
    );
};

export default Mission;

