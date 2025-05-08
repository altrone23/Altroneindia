import React, { useState, useEffect, useRef } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    { 
      title: "AI/ML Solutions", 
      description: "Custom models for smart business solutions that transform your data into actionable insights.",
      icon: "🤖",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
    },
    { 
      title: "Cybersecurity", 
      description: "Protecting your digital assets with comprehensive security strategies and advanced threat detection.",
      icon: "🔒",
      features: ["Penetration Testing", "Security Audits", "Incident Response", "Compliance Solutions"]
    },
    { 
      title: "Full-Stack Development", 
      description: "End-to-end web and mobile solutions that deliver exceptional user experiences across all platforms.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "Progressive Web Apps", "Custom Software"]
    },
    { 
      title: "Data Engineering", 
      description: "Building scalable data systems that enable real-time analytics and business intelligence.",
      icon: "📊",
      features: ["Big Data Processing", "Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
    },
    { 
      title: "Deep Learning", 
      description: "Advanced neural networks that solve complex problems and automate intelligent decision-making.",
      icon: "🧠",
      features: ["Neural Networks", "Image Recognition", "Speech Processing", "Reinforcement Learning"]
    },
    { 
      title: "Cloud Solutions", 
      description: "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
      icon: "☁️",
      features: ["Cloud Migration", "Serverless Architecture", "DevOps", "Infrastructure as Code"]
    },
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
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  // Reset the refs array when services change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, services.length);
  }, [services]);

  return (
    <section className="py-20 px-5" id="services" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700 animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our <span className="text-primary-600">Services</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tech solutions tailored to meet your business needs and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full opacity-0 transform translate-y-10 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`mb-4 text-5xl transition-transform duration-500 ${activeService === index ? 'transform scale-125' : ''}`}>
                <span className="animate-float inline-block">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="mb-6 text-gray-600 flex-grow">{service.description}</p>
              <div className={`bg-gray-50 p-4 rounded-lg transition-all duration-300 ${activeService === index ? 'bg-primary-50 shadow-md' : ''}`}>
                <h4 className={`font-medium mb-3 transition-colors duration-300 ${activeService === index ? 'text-accent-600' : 'text-primary-600'}`}>Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`transition-transform duration-300 mr-2 ${activeService === index ? 'text-accent-500 transform scale-110' : 'text-accent-500'}`}>✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {activeService === index && (
                <div className="absolute inset-0 bg-white bg-opacity-0 rounded-lg ring-2 ring-accent-500 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 transform translate-y-10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a 
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Get a Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;