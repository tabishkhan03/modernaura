"use client"
import React, { useState, useEffect } from "react";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount and unmount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <button
            className="p-3 rounded-full bg-zinc-800 text-white shadow-lg focus:outline-none hover:bg-zinc-700"
            onClick={scrollToTop}
          >
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
