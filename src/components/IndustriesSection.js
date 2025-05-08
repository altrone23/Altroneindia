import React, { useState, useRef, useEffect } from "react";

const IndustriesSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const industries = [
    {
      name: "Healthcare",
      description: "AI-driven diagnostic tools and secure health data management solutions.",
      image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      benefits: [
        "Improved diagnostic accuracy",
        "Enhanced patient data security",
        "Streamlined medical workflows",
        "Remote patient monitoring"
      ]
    },
    {
      name: "Finance",
      description: "Fraud detection systems and algorithmic trading solutions with advanced security.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      benefits: [
        "Real-time fraud detection",
        "Secure transaction processing",
        "Market prediction models", 
        "Regulatory compliance automation"
      ]
    },
    {
      name: "Retail",
      description: "Customer behavior analytics and personalized recommendation engines.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
      benefits: [
        "Personalized shopping experiences",
        "Inventory optimization",
        "Customer retention strategies",
        "Supply chain optimization"
      ]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance and quality control automation systems.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      benefits: [
        "Machine failure prediction",
        "Quality control automation",
        "Production optimization",
        "Supply chain visibility"
      ]
    },
    {
      name: "Education",
      description: "Learning management systems and adaptive personalized learning platforms.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      benefits: [
        "Personalized learning paths",
        "Student engagement analytics",
        "Virtual classroom technologies",
        "Educational content recommendations"
      ]
    },
    {
      name: "Energy",
      description: "Smart grid solutions and energy consumption optimization systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      benefits: [
        "Energy usage optimization",
        "Predictive grid management",
        "Renewable energy integration",
        "Carbon footprint reduction"
      ]
    }
  ];

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
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Reset the refs array when industries change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, industries.length);
  }, [industries]);

  const handleCardFlip = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <section id="industries" className="py-20 bg-gray-50 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Industries <span className="text-primary-600">We Serve</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across a wide range of industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`relative h-96 perspective-1000 cursor-pointer opacity-0 transform translate-y-10`}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className={`relative w-full h-full transition-all duration-500 preserve-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}
                onClick={() => handleCardFlip(index)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white h-48 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary-600 mb-2 group-hover:text-accent-500 transition-colors">{industry.name}</h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                    <div className="px-0 pb-0 pt-4">
                      <button className="text-sm font-medium text-accent-500 hover:text-accent-600 flex items-center group">
                        <span className="mr-1">Click to learn more</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-lg bg-white">
                  <div className="h-1/3 overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{industry.name} Solutions</h3>
                  </div>
                  <div className="p-6 h-2/3 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-600 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a 
                        href="#contact" 
                        className="inline-block bg-accent-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors transform hover:scale-105 hover:translate-y-[-2px] duration-300"
                      >
                        Contact for Solutions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;