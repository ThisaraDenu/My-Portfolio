import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navLinkClass =
    'text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out relative group cursor-pointer inline-block pb-1'

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-4 sm:px-6 md:px-10 py-4 md:py-5 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo and Navigation Links - Left Side */}
        <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-12">
          <img
            src={logo}
            alt="Logo"
            className="h-9 sm:h-10 md:h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <a href="#Home" className={navLinkClass} onClick={(e) => handleSmoothScroll(e, 'Home')}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'about')}
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'skills')}
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#works" className={navLinkClass}>
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#blog" className={navLinkClass}>
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Right side - Book a Call (desktop) + Burger (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href="#book-call"
            className="hidden sm:flex text-gray-700 hover:text-gray-900 underline decoration-1 underline-offset-4 items-center gap-1 transition-all duration-300 ease-in-out group cursor-pointer text-sm md:text-base"
          >
            Book A Call
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>

          {/* Burger button - mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 pb-3">
          <a
            href="#Home"
            className="px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, 'Home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            About Me
          </a>
          <a
            href="#skills"
            className="px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#works"
            className="px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Works
          </a>
          <a
            href="#blog"
            className="px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#book-call"
            className="sm:hidden px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded underline decoration-1 underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Book A Call ↗
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
