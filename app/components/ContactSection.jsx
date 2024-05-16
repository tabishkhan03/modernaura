// import { TbArrowUpRight } from "react-icons/tb";

// import Link from "next/link";
// import Image from "next/image";

export default function ContactSection() {
  return (
    <>
      <section className="py-8 ">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
          <div className="grid gap-2.5 lg:pb-16 pb-10">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Project
            </h2>
          </div>
          <div className="gallery">
            <div className="flex flex-col mb-10">
              <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943683.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"
                  />
                </div>
                <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943709.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943720.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="https://pagedone.io/asset/uploads/1713943731.png"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
                <div className="h-[277px] w-full rounded-3xl">
                  <img
                    src="/living.webp"
                    alt="Gallery image"
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </section>
    </>
  );
}
