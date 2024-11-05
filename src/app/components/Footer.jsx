import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="custom-container text-white !pb-0 ">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo and Navigation */}
          <div className="flex flex-col md:flex-row space-between justify-between w-full mb-8 md:mb-0">
            <div className='flex'>
              <img src="/logo.png" alt="Modern Aura Logo" className="mb-6" />
              <p className='p-2 mb-0 text-2xl font-bold font-color-two'>ModernAura</p>
            </div>
            <nav className="z-10 flex space-x-4 md:space-x-8 text-sm md:text-base lg:text-xl">
              <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#FF6B00] transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-[#FF6B00] transition-colors">Contact</Link>
              <Link href="/service" className="hover:text-[#FF6B00] transition-colors">Services</Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Contact Form Section */}
          <div className="mb-8 md:mb-0 md:max-w-md">
            <p className="text-sm md:text-base mb-4">Contact us to transform your living space with our expert interior design services.</p>
            <button className="bg-[#1A1A1A] text-white px-6 py-3 text-sm hover:bg-[#2A2A2A] transition-colors rounded-md">
              Schedule a discussion
            </button>
          </div>

          {/* Contact Information */}
          <div className="text-sm md:text-base">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="mb-1">Shop no 30,plot no.24,shreepat plaza, Sector-25,</p>
            <p className="mb-2">Seawoods,Navi Mumbai</p>
            <p className="mb-1">modernaura09@gmail.com</p>
            <p>+91 8452937018</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <a href="https://www.instagram.com/moder_naura" className="text-2xl hover:text-[#FF6B00] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://wa.me/918452937018" className="text-2xl hover:text-[#FF6B00] transition-colors">
            <FaWhatsapp />
          </a>
          <a href="mailto:modernaura09@gmail.com" className="text-2xl hover:text-[#FF6B00] transition-colors">
            <MdEmail />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-[#666666] p-4 border-[#2E2E2E] border-t">
          © 2024 Modern Aura — modernaura09@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;