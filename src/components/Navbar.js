import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "industries", "team", "careers", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;
          
          if (offset >= top && offset < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (sectionId) => {
    return `transition duration-300 ${
      activeSection === sectionId 
        ? "text-primary-600 font-semibold" 
        : "text-gray-700 hover:text-primary-600 font-medium"
    }`;
  };

  return (
    <nav className={`${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="/nav_logo.png" 
                alt="AltroneIndia Logo" 
                className="w-26 h-24  object-contain bg-white p-1"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={getNavLinkClass("home")}>Home</a>
            <a href="#about" className={getNavLinkClass("about")}>About</a>
            <a href="#services" className={getNavLinkClass("services")}>Services</a>
            <a href="#industries" className={getNavLinkClass("industries")}>Industries</a>
            <a href="#team" className={getNavLinkClass("team")}>Team</a>
            <a href="#careers" className={getNavLinkClass("careers")}>Careers</a>
            <a 
              href="#contact" 
              className="bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-primary-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
        } origin-top`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className={`block px-3 py-2 rounded-md ${activeSection === "home" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>Home</a>
          <a href="#about" className={`block px-3 py-2 rounded-md ${activeSection === "about" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>About</a>
          <a href="#services" className={`block px-3 py-2 rounded-md ${activeSection === "services" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>Services</a>
          <a href="#industries" className={`block px-3 py-2 rounded-md ${activeSection === "industries" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>Industries</a>
          <a href="#team" className={`block px-3 py-2 rounded-md ${activeSection === "team" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>Team</a>
          <a href="#careers" className={`block px-3 py-2 rounded-md ${activeSection === "careers" ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"} font-medium transition duration-300`}>Careers</a>
          <a href="#contact" className="block px-3 py-2 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 mx-2 text-center transition duration-300">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;