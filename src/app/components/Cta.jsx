import React from 'react'

const Cta = () => {
    return (
        <>
            <div className="custom-container">
                <div className="relative h-[40vh] bg-black flex items-center">
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: "url('/contact/Frame.png')",
                            opacity: 0.5
                        }}
                    />

                    {/* Content */}
                    <div className="container mx-auto px-4 z-10">
                        <h1 className="text-center text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                            Breathe Life into Your Space
                        </h1>
                        <p className="text-center text-lg md:text-xl text-white mb-8 ">
                            Let's Connect!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta