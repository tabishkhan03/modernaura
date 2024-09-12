import React from 'react';

const FounderProfile = () => {
    return (
        <div className="about-container flex flex-col lg:flex-row justify-between items-center !pb-0">
            {/* Image Section */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center relative mb-8 lg:mb-0 order-1 lg:order-2">
                <img className="founder-img w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]" src="/founder.png" alt="Founder Image" />
                {/* Founder Name */}
                <div className="mt-4 text-center">
                    <h2 className="text-white text-xl sm:text-2xl font-bold">Ashraf Qureshi</h2>
                    <p className="text-gray-400 text-sm sm:text-base">FOUNDER</p>
                </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-8 order-2 lg:order-1">
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Modern Aura is a premier interior design firm specializing in Commercial, Residential, and Showroom interiors. Celebrated for our expertise, we excel in delivering comprehensive turnkey projects, managing every aspect from the initial design concept to the final construction phase. With a passion for innovative design and a keen eye for detail, we transform spaces into inspiring environments that reflect the unique vision and style of our clients.
                </p>
            </div>
        </div>
    );
};

export default FounderProfile;
