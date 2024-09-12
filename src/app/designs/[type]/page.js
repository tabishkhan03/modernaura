'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useParams } from 'next/navigation'

const DesignPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [images, setImages] = useState([])
  const [designType, setDesignType] = useState('')
  const params = useParams()

  useEffect(() => {
    if (params.type && typeof params.type === 'string') {
      setDesignType(params.type)
      // Dynamically import images based on the design type
      import(`../../data/${params.type}Images.js`)
        .then((module) => {
          setImages(Object.values(module.default))
        })
        .catch((error) => {
          console.error('Failed to load images:', error)
          setImages([])
        })
    }
  }, [params.type])

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/services/background.jpg')",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-center text-4xl md:text-6xl font-semibold text-white mb-4">
            {designType.charAt(0).toUpperCase() + designType.slice(1)} Designs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {designType.charAt(0).toUpperCase() + designType.slice(1)} Designs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className="cursor-pointer relative overflow-hidden rounded-lg h-64 w-full"
              onClick={() => openImage(imageSrc)}
            >
              <Image
                src={imageSrc}
                alt={`${designType} design ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-3xl w-full max-h-[80vh] p-4">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2 z-10"
              >
                <X size={24} />
              </button>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedImage}
                  alt={`Enlarged ${designType} design`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DesignPage