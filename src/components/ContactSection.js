import React, { useState, useRef, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [activeField, setActiveField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission to backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

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
    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (contactInfoRef.current) observer.unobserve(contactInfoRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get In <span className="text-primary-600">Touch</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your tech transformation? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div 
            className="lg:col-span-1 opacity-0 transform translate-x-[-20px]"
            ref={contactInfoRef}
          >
            <div className="bg-primary-600 rounded-xl p-8 text-white h-full shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-primary-100 font-medium mb-1">Email</h4>
                    <p className="text-white group-hover:text-white/90 transition-colors">altrone23@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-primary-100 font-medium mb-1">Phone</h4>
                    <p className="text-white group-hover:text-white/90 transition-colors">+91 63749 64477</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-primary-100 font-medium mb-1">Office</h4>
                    <p className="text-white group-hover:text-white/90 transition-colors">EWS\B1415,TNHB<br />Maraimalai Nagar,Chengalpet,Tamilnadu 603209</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-primary-100 font-medium mb-1">Working Hours</h4>
                    <p className="text-white group-hover:text-white/90 transition-colors">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white group-hover:text-white/90 transition-colors">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg opacity-0 transform translate-x-[20px]"
            ref={formRef}
          >
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 animate-fade-in">
                <div className="bg-green-100 rounded-full p-4 mb-6">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-center max-w-md">
                  Thank you for reaching out to us. Our team will get back to you within 24-48 business hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 transition-colors duration-300 ${
                          activeField === 'name' ? 'text-primary-600' : 'text-gray-700'
                        }`}
                      >
                        Full Name
                      </label>
                      <div className={`relative rounded-lg transition-all duration-300 ${
                        activeField === 'name' ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                      }`}>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition-all"
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 transition-colors duration-300 ${
                          activeField === 'email' ? 'text-primary-600' : 'text-gray-700'
                        }`}
                      >
                        Email Address
                      </label>
                      <div className={`relative rounded-lg transition-all duration-300 ${
                        activeField === 'email' ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                      }`}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition-all"
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className={`block text-sm font-medium mb-1 transition-colors duration-300 ${
                          activeField === 'phone' ? 'text-primary-600' : 'text-gray-700'
                        }`}
                      >
                        Phone Number
                      </label>
                      <div className={`relative rounded-lg transition-all duration-300 ${
                        activeField === 'phone' ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                      }`}>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label 
                        htmlFor="subject" 
                        className={`block text-sm font-medium mb-1 transition-colors duration-300 ${
                          activeField === 'subject' ? 'text-primary-600' : 'text-gray-700'
                        }`}
                      >
                        Subject
                      </label>
                      <div className={`relative rounded-lg transition-all duration-300 ${
                        activeField === 'subject' ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                      }`}>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('subject')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition-all"
                          required
                          placeholder="What is this regarding?"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 transition-colors duration-300 ${
                        activeField === 'message' ? 'text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      Message
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${
                      activeField === 'message' ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                    }`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition-all"
                        required
                        placeholder="Tell us how we can help you"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-gray-100 p-4 sm:p-0 rounded-xl overflow-hidden h-[400px] shadow-inner">
            <iframe
              title="AltroneIndia Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.313366746651!2d77.6852474!3d12.8875303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1453535e6bef%3A0x9620f760154a18dc!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1642837060089!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;