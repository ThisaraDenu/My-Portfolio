import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

function Nav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navLinkClass = "text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out relative group cursor-pointer inline-block pb-1"

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-10 py-5 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo and Navigation Links - Left Side */}
        <div className="flex items-center space-x-12">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" 
          />
          <div className="flex items-center space-x-12">
          <a href="#Home" className={navLinkClass}>
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
            <a href="#skills" className={navLinkClass}>
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

        {/* Call to Action */}
        <div className="flex items-center">
          <a 
            href="#book-call" 
            className="text-gray-700 hover:text-gray-900 underline decoration-1 underline-offset-4 flex items-center gap-1 transition-all duration-300 ease-in-out group cursor-pointer"
          >
            Book A Call
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav