"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isDesignsOpen, setIsDesignsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to manage the mobile menu toggle
  const navLink = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Service", link: "/service" },
  ];

  const designLinks = [
    { name: "Staircase Design", link: "/designs/staircase" },
    { name: "Bedroom Design", link: "/designs/bedroom" },
    { name: "Livingroom Design", link: "/designs/livingroom" },
    { name: "Kitchen Design", link: "/designs/kitchen" },
    { name: "Restroom Design", link: "/designs/restroom" },
  ];

  const isDesignPage = designLinks.some(({ link }) => pathname.startsWith(link));

  const Openmenu = () => {
    setIsMenuOpen(true);
  };

  const Closemenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesignsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='fixed top-0 left-0 w-full p-4'>
        <div className="navbar custom-container">
          <div className="logo-div">
            <figure className='w-full'>
              <Link href="/">
                <img src="/logo.png" alt="LOGO" className="w-full" />
              </Link>
            </figure>
          </div>
          <ul className="nav-list hidden lg:flex">
            {navLink.map(({ link, name }) => {
              const isActive = pathname === link;
              return (
                <li key={name} className="nav-items">
                  <Link href={link} className={`${isActive ? 'active' : ''}`}>
                    {name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-items relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDesignsOpen(true)}
              onMouseLeave={() => setIsDesignsOpen(false)}>
              <button className={`flex items-center ${isDesignPage ? 'active' : ''}`}>
                Designs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDesignsOpen && (
                <ul className="absolute top-full left-0 bg-[#121212] shadow-md mt-2 py-2 rounded-md z-50">
                  {designLinks.map(({ name, link }) => {
                    const isActive = pathname === link;
                    return (
                      <li key={name}>
                        <Link href={link} className={`block px-4 py-2 hover:text-[#ff8c39] ${isActive ? 'text-[#ff8c39]' : ''}`}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>
          <button className='menu-btn flex items-center justify-center block lg:hidden' onClick={Openmenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <section className={`phone-menu w-full ${isMenuOpen ? 'phone-menu-open' : ''}`}>
        <ul className="phone-menu-nav-list">
          <li>
            <div className='flex justify-between items-center'>
              <div className="">
                <figure className='w-full'>
                  <img src="/logo.png" alt="LOGO" className="w-full" />
                </figure>
              </div>
              <div className="cross">
                <button onClick={Closemenu}>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </li>
          {navLink.map(({ link, name }) => {
            const isActive = pathname === link;
            return (
              <li key={name}>
                <Link className={`${isActive ? 'active w-full block' : 'w-full block'}`} onClick={Closemenu} href={link}>
                  {name}
                </Link>
              </li>
            );
          })}

          {/* Add direct design links here */}
          {designLinks.map(({ name, link }) => {
            const isActive = pathname === link;
            return (
              <li key={name}>
                <Link className={`${isActive ? 'active w-full block' : 'w-full block'}`} onClick={Closemenu} href={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Navbar;

