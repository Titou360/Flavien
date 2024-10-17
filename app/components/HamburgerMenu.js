'use client';
import React, { useState } from 'react';
import Navigation from './Navigation';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center w-full p-4">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center w-12 h-12 border-none bg-white rounded-full cursor-pointer z-50 fixed top-5 right-5 shadow-lg"
        >
          <div className="flex flex-col justify-center items-center w-6 h-6 group">
            <span
              className={`block transition-all duration-300 ease-out 
                          h-0.5 w-6 group-hover:w-5 rounded-sm bg-cafeGold  ${isOpen ? 'rotate-45 translate-y-1 group-hover:w-8' : '-translate-y-0.5'}`}
            />
            <span
              className={`block transition-all duration-300 ease-out 
                          h-0.5 w-6 group-hover:w-3 rounded-sm my-0.5 bg-cafeGold ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block transition-all duration-300 ease-out 
                          h-0.5 w-6 group-hover:w-5 rounded-sm bg-cafeGold ${isOpen ? '-rotate-45 -translate-y-1 group-hover:w-8' : 'translate-y-0.5'}`}
            />
          </div>
        </button>
      </div>

      {/* Sliding menu */}
      <div
        className={`fixed top-0 right-0 w-1/4 md:w-[65%] lg:w-[45%]  h-full bg-white dark:bg-gray-800 z-40 flex items-center justify-start pl-3 transition-transform duration-500 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Navigation />
      </div>
    </div>
  );
};

export default HamburgerMenu;
