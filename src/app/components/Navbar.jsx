"use client";
import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();

  const navLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Service",
      link: "/service"
    },
  ];

  const Openmenu = () => {
    document.querySelector(".phone-menu")?.classList.add("phone-menu-open");
  }

  const Closemenu = () => {
    document.querySelector(".phone-menu")?.classList.remove("phone-menu-open");
  }

  return (
    <>
      <nav className='fixed top-0 left-0 w-full p-4'>
        <div className="navbar custom-container">
          <div className="logo-div">
            <figure className='w-full'>
              <img src="/logo.png" alt="LOGO" className="w-full" />
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
          </ul>
          <button className='menu-btn flex items-center justify-center block lg:hidden' onClick={Openmenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <section className="phone-menu w-full">
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
        </ul>
      </section>
    </>
  );
}

export default Navbar;
