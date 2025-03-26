"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Hero from "../Hero/page";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
    <header className="w-[100%] bg-white  border-b border-gray-200 shadow-sm fixed top-0 z-10 backdrop-filter backdrop-blur-lg">
      {/* Top Banner */}
      <div className="bg-[#06ab77] text-white text-sm py-2 flex justify-around px-6 md:px-12">
        <div className="flex items-center">
          <span role="img" aria-label="megaphone">📣</span>
          <span className="ml-2">Get started generating leads for as low as just <strong>$199/month</strong></span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-200">Contact Us</a>
          <a href="#" className="text-white hover:text-gray-200">Login</a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-white hover:text-gray-200">
              EN <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-24">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-around py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          
          <Image src="/zeitBlast_logoA.svg" alt="Logo" width={190} height={40} />
        </div>

        {/* Get Started Button */}
        <button className="hidden md:block bg-[#06ab77] text-white py-2 px-6 rounded-full hover:bg-[#1e9b50] hover:text-black transition-colors duration-200">
          Get Started
        </button>
      </nav>
    </header>
    <Hero   />
    
    </>
  );
};

export default Header;
