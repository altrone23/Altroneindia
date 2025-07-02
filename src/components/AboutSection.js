import React, { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const tabs = [
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
    { id: "story", label: "Our Story" }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div 
          className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
          ref={aboutRef}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About <span className="text-primary-600">AltroneIndia</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions since 2020
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative opacity-0 transform translate-x-[-20px] transition-all duration-700"
            ref={imageRef}
          >
            <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02] hover:translate-y-[-5px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg hidden md:block transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center group">
                  <p className="text-4xl font-bold text-primary-600 group-hover:text-accent-500 transition-colors duration-300">8+</p>
                  <p className="text-sm text-gray-600">Experts</p>
                </div>
                <div className="text-center group">
                  <p className="text-4xl font-bold text-primary-600 group-hover:text-accent-500 transition-colors duration-300">10+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="opacity-0 transform translate-x-[20px] transition-all duration-700"
            ref={contentRef}
          >
            <div className="mb-8">
              <div className="flex space-x-4 border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`py-2 px-4 text-lg focus:outline-none transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-primary-600 border-b-2 border-primary-600 font-semibold"
                        : "text-gray-600 hover:text-primary-500"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[220px]">
                {activeTab === "vision" && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Vision</h3>
                    <p className="text-gray-600 mb-6">
                      To be the global leader in providing innovative tech solutions that transform businesses and create a smarter, more connected world.
                    </p>
                  </div>
                )}

                {activeTab === "mission" && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h3>
                    <p className="text-gray-600 mb-6">
                      To deliver exceptional value through cutting-edge AI, ML, and cybersecurity solutions that help our clients achieve their business objectives and stay ahead in the digital era.
                    </p>
                  </div>
                )}

                {activeTab === "story" && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Story</h3>
                    <p className="text-gray-600 mb-6">
                      Founded in 2020, AltroneIndia began with a small team of passionate tech enthusiasts determined to bridge the gap between advanced technology and business needs. Today, we've grown into a comprehensive tech solutions provider with a global client base, but our passion for innovation remains unchanged.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 bg-primary-50 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:bg-primary-100 hover:shadow-md">
                <h4 className="font-semibold text-primary-600 mb-2">Core Values</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Innovation</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Integrity</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Excellence</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Client Focus</li>
                </ul>
              </div>
              <div className="w-1/2 bg-primary-50 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:bg-primary-100 hover:shadow-md">
                <h4 className="font-semibold text-primary-600 mb-2">Why Choose Us</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Expert Team</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Cutting-edge Solutions</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Guaranteed Results</li>
                  <li className="hover:text-primary-600 transition-colors duration-200 cursor-pointer">Ongoing Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;