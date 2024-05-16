// import Link from "next/link";
// import React from "react";
// import { TbArrowUpRight } from "react-icons/tb";


// const CTA = () => {
//   return (
//     <>
//       <section className="relative z-10 overflow-hidden bg-[#04091e] py-16 px-8 mt-40">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <div className="text-center lg:text-left ">
//                 <div className="mb-10 lg:mb-0 ">
//                   <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
//                     Lets Get in touch
//                   </h1>
//                   <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white"></p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-4 lg:w-1/2">
//               <div className="text-center lg:text-right">
//                 <Link
//                   className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
//                   href="/contact"
//                 >
//                   Contact Us <TbArrowUpRight className="text-1xl ml-2"/>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <span className="absolute top-0 right-0 -z-10">
//           <svg
//             width="388"
//             height="250"
//             viewBox="0 0 388 220"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               opacity="0.05"
//               d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
//               fill="url(#paint0_linear_971_6910)"
//             ></path>
//             <defs>
//               <linearGradient
//                 id="paint0_linear_971_6910"
//                 x1="60.5"
//                 y1="111"
//                 x2="287"
//                 y2="111"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop offset="0.520507" stop-color="white"></stop>
//                 <stop offset="1" stop-color="white" stop-opacity="0"></stop>
//               </linearGradient>
//             </defs>
//           </svg>
//         </span>
//         <span className="absolute top-0 right-0 -z-10">
//           <svg
//             width="324"
//             height="250"
//             viewBox="0 0 324 220"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               opacity="0.05"
//               d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
//               fill="url(#paint0_linear_971_6911)"
//             ></path>
//             <defs>
//               <linearGradient
//                 id="paint0_linear_971_6911"
//                 x1="60.5"
//                 y1="111"
//                 x2="287"
//                 y2="111"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop offset="0.520507" stop-color="white"></stop>
//                 <stop offset="1" stop-color="white" stop-opacity="0"></stop>
//               </linearGradient>
//             </defs>
//           </svg>
//         </span>
//         {/* <span className="absolute top-4 left-4 -z-10">
//           <svg
//             width="43"
//             height="56"
//             viewBox="0 0 43 56"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
            
//           </svg>
//         </span> */}
//       </section>
//     </>
//   );
// };

// export default  CTA ;
import Link from "next/link";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const CTA = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#04091e] py-16 px-8 mt-40">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <div className="mb-10 lg:mb-0">
                  <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                    Want to Furnish Your Home?
                  </h1>
                  <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                    Contact us to transform your living space with our expert interior design services.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-right">
                <Link
                  className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                  href="/contact"
                >
                  Contact Us <TbArrowUpRight className="text-1xl ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width="388"
            height="250"
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width="324"
            height="250"
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </section>
    </>
  );
};

export default CTA;

