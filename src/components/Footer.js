import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");
    
    // Reset the subscription state after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="transform hover:translate-y-[-5px] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 relative inline-block">
              AltroneIndia
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </h3>
            <p className="mb-4 text-gray-400 pr-4">
              Innovative technology solutions for businesses that want to lead in the digital era. Empowering growth through cutting-edge tech.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/altroneindia/?igsh=MWU5dWpkNm10MGEweg%3D%3D#" 
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 8.023.01 6.788.064 5.556.118 4.717.306 3.972.582 3.195.867 2.531 1.266 1.866 1.93.668 3.125.266 4.663.064 6.787.01 8.023 0 8.396 0 12.017s.01 3.994.064 5.229c.054 1.124.242 1.963.518 2.708.285.777.684 1.441 1.348 2.106 1.195 1.198 2.733 1.6 4.857 1.802 1.235.054 1.608.064 5.229.064s3.994-.01 5.229-.064c1.124-.054 1.963-.242 2.708-.518.777-.285 1.441-.684 2.106-1.348 1.198-1.195 1.6-2.733 1.802-4.857.054-1.235.064-1.608.064-5.229s-.01-3.994-.064-5.229c-.054-1.124-.242-1.963-.518-2.708-.285-.777-.684-1.441-1.348-2.106C19.229.266 17.691-.136 15.567-.338 14.332-.392 13.959-.402 10.338-.402c-3.621 0-3.994.01-5.229.064zm-.005 21.634c-3.259 0-3.667-.01-4.947-.072-1.269-.062-1.959-.243-2.421-.403-.608-.236-1.041-.517-1.497-.973-.456-.456-.737-.889-.973-1.497-.16-.462-.341-1.152-.403-2.421-.062-1.28-.072-1.688-.072-4.947s.01-3.667.072-4.947c.062-1.269.243-1.959.403-2.421.236-.608.517-1.041.973-1.497.456-.456.889-.737 1.497-.973.462-.16 1.152-.341 2.421-.403 1.28-.062 1.688-.072 4.947-.072s3.667.01 4.947.072c1.269.062 1.959.243 2.421.403.608.236 1.041.517 1.497.973.456.456.737.889.973 1.497.16.462.341 1.152.403 2.421.062 1.28.072 1.688.072 4.947s-.01 3.667-.072 4.947c-.062 1.269-.243 1.959-.403 2.421-.236.608-.517 1.041-.973 1.497-.456.456-.889.737-1.497.973-.462.16-1.152.341-2.421.403-1.28.062-1.688.072-4.947.072zm0-5.435c-3.259 0-5.901-2.642-5.901-5.901s2.642-5.901 5.901-5.901 5.901 2.642 5.901 5.901-2.642 5.901-5.901 5.901zm0-9.418c-1.94 0-3.517 1.577-3.517 3.517s1.577 3.517 3.517 3.517 3.517-1.577 3.517-3.517-1.577-3.517-3.517-3.517zm6.901-1.39c-.761 0-1.378-.617-1.378-1.378s.617-1.378 1.378-1.378 1.378.617 1.378 1.378-.617 1.378-1.378 1.378z"/>
                </svg>
              </a>
              <a 
                href="www.linkedin.com/in/altroneindia" 
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="transform hover:translate-y-[-5px] transition-all duration-300">
            <h4 className="text-lg font-semibold mb-5 text-white border-b border-gray-800 pb-2 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent-500 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a 
                  href="#industries" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Industries</span>
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="transform hover:translate-y-[-5px] transition-all duration-300">
            <h4 className="text-lg font-semibold mb-5 text-white border-b border-gray-800 pb-2 relative">
              Services
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent-500 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>AI/ML Solutions</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Cybersecurity</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Full-Stack Development</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Data Engineering</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Deep Learning</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Cloud Solutions</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="transform hover:translate-y-[-5px] transition-all duration-300">
            <h4 className="text-lg font-semibold mb-5 text-white border-b border-gray-800 pb-2 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-accent-500 transition-all duration-300"></span>
            </h4>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates, tech insights, and company news.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              {subscribed ? (
                <div className="bg-green-800 text-white rounded-lg py-3 px-4 animate-fade-in">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Thanks for subscribing!
                  </p>
                </div>
              ) : (
                <>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    required
                    placeholder="Your email address" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-0 top-0 bottom-0 bg-accent-500 text-white px-4 rounded-r-lg hover:bg-accent-600 transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="hidden sm:inline mr-1">Subscribe</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </>
              )}
            </form>
            
            <div className="mt-6">
              <h5 className="text-white text-sm font-medium mb-3">Contact Info</h5>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 group hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-accent-500 group-hover:text-accent-400 transition-colors duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">altrone23@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-400 group hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-accent-500 group-hover:text-accent-400 transition-colors duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+91 63749 64477</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AltroneIndia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;