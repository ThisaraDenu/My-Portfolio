import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white relative overflow-hidden mt-0">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 py-10 sm:py-12 relative z-10">
            {/* Footer navigation */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-3 text-xs sm:text-sm">
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] shadow-sm hover:bg-[#252525] hover:border-[#333333] hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 font-medium">
                Home
              </button>
              <button className="hover:text-gray-300 transition-all duration-300 ease-in-out relative group cursor-pointer">
                About Me
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
              <button className="hover:text-gray-300 transition-all duration-300 ease-in-out relative group cursor-pointer">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
              <button className="hover:text-gray-300 transition-all duration-300 ease-in-out relative group cursor-pointer">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
              <button className="hover:text-gray-300 transition-all duration-300 ease-in-out relative group cursor-pointer">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>

            {/* Contact email */}
            <div
              className="font-semibold tracking-wide group cursor-pointer text-center lg:text-right break-all"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 1.875rem)' }}
            >
              <a
                href="mailto:Thissadenugoon@gmail.com"
                className="relative inline-block transition-all duration-300 ease-in-out hover:text-gray-200"
              >
                Thissadenugoon@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
    </footer>
  )
}

export default Footer