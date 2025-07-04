import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#030712]">
      <div className="flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto">
      
        <div className="text-white text-xl font-bold tracking-wide">
          &lt;R /&gt;
        </div>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#project" className="hover:text-white transition">Project</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          
         

         
          <a
            href="/CV-Reymontha-Tarigan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 hover:border-white px-4 py-1 rounded-full text-sm text-gray-300 hover:text-white transition"
          >
            Download CV
          </a>
          <a
            href="/Portfolio-Reymontha-Tarigan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 hover:border-white px-4 py-1 rounded-full text-sm text-gray-300 hover:text-white transition"
          >
            Download Portfolio
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030712] px-6 pb-4 space-y-4 text-gray-300 font-medium">
          <a href="#about" className="block hover:text-white transition">About</a>
          <a href="#experience" className="block hover:text-white transition">Experience</a>
          <a href="#project" className="block hover:text-white transition">Project</a>
          <a href="#contact" className="block hover:text-white transition">Contact</a>
          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
            
            <a
              href="/CV-Reymontha-Tarigan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 hover:border-white px-4 py-1 rounded-full text-sm text-gray-300 hover:text-white transition"
            >
              Download CV
            </a>
             <a
              href="/Portfolio-Reymontha-Tarigan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 hover:border-white px-4 py-1 rounded-full text-sm text-gray-300 hover:text-white transition"
            >
              Download Portfolio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
