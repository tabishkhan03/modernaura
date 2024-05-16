import Image from "next/image";
import Gallerypage from "./GalleryPage";
import TestimonialSlider from "../../components/TestimonialSlider"
import CTA from "@/components/Cta";
import ScrollToTopArrow from "@/components/ScrollToTopArrow";
import WhatsAppLogo from "@/components/WhatsAppLogo";
import AboutComponent from "@/components/AboutComponent";
export default function Gallery() {
  return (
    <>
    <div className="relative w-full h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/service.jpg")' }}
        />
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-50" />
        <div className="relative flex items-center justify-center h-full pl-12">
          <div className="text-white">
            <p className="text-[56px] uppercase tracking-widest font-extrabold ">OUR SERVICES</p>
          </div>
        </div>
      </div>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    01
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    SPACE PLANNING
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    We assess and plan the best utilization of space within a
                    given area. This includes creating layouts, arranging
                    furniture, and optimizing the flow of the space to meet your
                    needs and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    02
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    CONCEPT DEVELOPMENT
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    We work with you to understand your vision and preferences,
                    developing a design concept that aligns with your style,
                    functionality requirements, and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    03
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    MATERIAL SELECTION
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    We assist in selecting materials, finishes, colours,
                    textiles, and furnishings that match the design concept and
                    meet your desired aesthetic and functional goals.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    04
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    FURNITURE AND FIXTURE SELECTION
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    We advise and source furniture, fixtures, and decorative
                    elements that complement the design concept and fit your
                    space's requirements, taking into account style, comfort,
                    and functionality.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    05
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    PROJECT MANAGEMENT
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    We manage the entire design process, including coordinating
                    with contractors and other professionals, overseeing
                    timelines, budgets, and ensuring that the design plan is
                    executed effectively{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/pexels-fotoaibe-1571460.jpg"
                  width={690}
                  height={329}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#04091e] opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-3xl title-font font-bold text-[#c6b069] mb-1 ">
                    06
                  </h2>
                  <h1 className="title-font text-lg font-medium text-[#c6b069] mb-3 text-center">
                    INSTALLATION AND STYLING
                  </h1>
                  <p className="leading-relaxed text-white text-center">
                    Once the design plan is finalized, we oversee the
                    installation of furnishings, decorations, and final touches
                    to bring the design concept to life. We also assist in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <AboutComponent/>
      <Gallerypage/>
      <TestimonialSlider/>
      <CTA/>
      <ScrollToTopArrow/>
      <WhatsAppLogo/>
    </>
  );
}
