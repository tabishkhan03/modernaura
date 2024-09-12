"use client";  

import React from 'react';  
import { Splide, SplideSlide } from '@splidejs/react-splide';  
import '@splidejs/react-splide/css';  

const Gallery = () => {  
    const cardData = [  
        {  
            place: "Living Room",  
            image: "/gallery/livingroom.png"  
        },  
        {  
            place: "Drawing Room",  
            image: "/gallery/drawingroom.png"  
        },  
        {  
            place: "Bedroom",  
            image: "/gallery/bedroom.png"  
        },  
        {  
            place: "Bathroom",  
            image: "/gallery/bathroom.png"  
        },  
        {  
            place: "Balcony",  
            image: "/gallery/balcony.png"  
        },  
        {  
            place: "Kitchen",  
            image: "/gallery/kitchen.png"  
        },  
    ];  

    return (  
        <div className="gallery-container bg-black py-12">  
            <h2 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">  
                Our Gallery  
            </h2>  
            <div className="px-4 sm:px-6 lg:px-8">  
                <Splide  
                    aria-label="Our Gallery"  
                    options={{  
                        perPage: 4,
                        // autoplay: true,  
                        gap: '2rem',  
                        type: 'loop',  
                        padding: '4rem',
                        arrows:false,
                        pagination:false,  
                        breakpoints: {  
                            1200: {  
                                perPage: 3,  
                            },  
                            1024: {  
                                perPage: 2,  
                            },  
                            768: {  
                                perPage: 1,  
                            },  
                        },  
                    }}  
                >  
                    {cardData.map((card, index) => (  
                        <SplideSlide key={index}>  
                            <div className="relative rounded-lg h-100 ">  
                                <img  
                                    src={card.image}  
                                    alt={card.place}  
                                    className="w-full w-m-xs h-full  object-cover rounded-lg" // Set a fixed height for uniformity  
                                />  
                                <div className="w-full flex justify-center transform -translate-y-4">  
                                    <div className="text-xs sm:text-base md:text-md bg-[#1D1D1D] w-[80%] text-white text-center py-2 rounded-lg mb-[-16px]">  
                                        {card.place}  
                                    </div>  
                                </div>  
                            </div>  
                        </SplideSlide>  
                    ))}  
                </Splide>  
            </div>  
        </div>  
    );  
};  

export default Gallery;




