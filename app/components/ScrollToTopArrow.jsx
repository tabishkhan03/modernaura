"use client"
import Image from "next/image";
import React, { useState } from "react";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-4 right-4"
         onClick={scrollToTop}>
        <button className="p-3 rounded-full bg-zinc-800 text-white dark:bg-white dark:text-zinc-800 shadow-lg focus:outline-none hover:bg-zinc-700 dark:hover:bg-zinc-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;
