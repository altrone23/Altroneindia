import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white py-28 px-5 relative overflow-hidden" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 rounded-full bg-primary-500 opacity-10 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent-500 opacity-10 bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-primary-400 opacity-10 bottom-20 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 transition-all duration-700 transform translate-y-0 opacity-100 delay-300 fade-in-element">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-text-shadow">
            Leading Innovation in <br />
            <span className="text-accent-500 animate-text-shimmer">Tech Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-lg mx-auto md:mx-0 animate-fadeIn">
            Innovative AI, ML, and Cybersecurity Solutions for the Future of Business
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-accent-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-accent-600 transition duration-300 shadow-lg transform hover:scale-105 hover:translate-y-[-2px] active:translate-y-0"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-glow"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative transform transition-all duration-700 translate-y-0 opacity-100 delay-500 fade-in-element">
          <div className="bg-white p-3 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02] hover:rotate-1">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab70966d8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="AI Technology" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-secondary-500 p-4 rounded-2xl text-white font-medium hidden md:block shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-pulse-slow">5+</span>
              <span className="text-sm">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 bg-accent-500 p-3 rounded-full text-white hidden lg:flex items-center justify-center w-20 h-20 animate-float shadow-lg">
            <span className="text-sm font-bold">24/7<br />Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;