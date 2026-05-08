import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { useTheme } from '../../context/ThemeContext'

function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navLinkClass =
    'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-in-out relative group cursor-pointer inline-block pb-1'

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050509]/80 backdrop-blur-md shadow-sm px-4 sm:px-6 md:px-10 py-4 md:py-5 transition-colors duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo and Navigation Links - Left Side */}
        <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-12">
          <a href="#Home" className="block" onClick={(e) => handleSmoothScroll(e, 'Home')}>
            <img
              src={logo}
              alt="Logo"
              className="h-9 sm:h-10 md:h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer dark:invert"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8 xl:space-x-10">
            <a href="#Home" className={navLinkClass} onClick={(e) => handleSmoothScroll(e, 'Home')}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'about')}
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'skills')}
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#works"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'works')}
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'experience')}
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className={navLinkClass}
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Right side - Book a Call, CV, Dark Mode (desktop) + Burger (mobile) */}
        <div className="flex items-center gap-3 lg:gap-5">
          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:flex text-sm md:text-base px-4 py-2 rounded-full border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 ease-in-out items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CV
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:flex text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline decoration-1 underline-offset-4 items-center gap-1 transition-all duration-300 ease-in-out group cursor-pointer text-sm md:text-base"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
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
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
          isMenuOpen ? 'max-h-[30rem] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 pb-3">
          <a
            href="#Home"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'Home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            About Me
          </a>
          <a
            href="#skills"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#works"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'works')}
          >
            Works
          </a>
          <a
            href="#experience"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'experience')}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded font-bold"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="sm:hidden px-2 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded underline decoration-1 underline-offset-4"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Book A Call ↗
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
