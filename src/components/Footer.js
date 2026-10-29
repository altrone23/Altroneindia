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
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");

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
                href="https://www.facebook.com/"
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.11 0-1.455.687-1.455 1.392V12h2.479l-.396 2.891h-2.083v6.987C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/altroneindia/"
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 8.023.01 6.788.064 5.556.118 4.717.306 3.972.582 3.195.867 2.531 1.266 1.866 1.93.668 3.125.266 4.663.064 6.787.01 8.023 0 8.396 0 12.017s.01 3.994.064 5.229c.054 1.233.242 2.072.518 2.817.285.777.684 1.441 1.349 2.105.805.805 1.469 1.204 2.105 1.349.777.286 1.616.464 2.849.518 1.235.054 1.608.064 5.229.064s3.994-.01 5.229-.064c1.233-.054 2.072-.242 2.817-.518.777-.285 1.441-.684 2.105-1.349.805-.805 1.204-1.469 1.349-2.105.286-.777.464-1.616.518-2.849.054-1.235.064-1.608.064-5.229s-.01-3.994-.064-5.229c-.054-1.233-.242-2.072-.518-2.817-.285-.777-.684-1.441-1.349-2.105C20.88 1.266 20.216.867 19.439.582c-.777-.286-1.616-.464-2.849-.518C15.355.01 14.982 0 11.361 0h.656zm0 2.178c3.559 0 3.98.014 5.388.063 1.303.059 2.01.277 2.478.461.623.242 1.066.531 1.533.998.467.467.756.91.998 1.533.184.468.402 1.175.461 2.478.049 1.408.063 1.829.063 5.388s-.014 3.98-.063 5.388c-.059 1.303-.277 2.01-.461 2.478-.242.623-.531 1.066-.998 1.533-.467.467-.91.756-1.533.998-.468.184-1.175.402-2.478.461-1.408.049-1.829.063-5.388.063s-3.98-.014-5.388-.063c-1.303-.059-2.01-.277-2.478-.461-.623-.242-1.066-.531-1.533-.998-.467-.467-.756-.91-.998-1.533-.184-.468-.402-1.175-.461-2.478-.049-1.408-.063-1.829-.063-5.388s.014-3.98.063-5.388c.059-1.303.277-2.01.461-2.478.242-.623.531-1.066.998-1.533.467-.467.91-.756 1.533-.998.468-.184 1.175-.402 2.478-.461 1.408-.049 1.829-.063 5.388-.063zm0 3.553A6.286 6.286 0 105.717 12.017 6.286 6.286 0 0012.017 5.731zm0 10.4A4.114 4.114 0 1012.017 7.9a4.114 4.114 0 000 8.228zm6.445-10.607a1.468 1.468 0 11-2.936 0 1.468 1.468 0 012.936 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/altroneindia"
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm9.5 12.268h-3v-5.604c0-1.336-.027-3.06-1.866-3.06-1.867 0-2.154 1.457-2.154 2.96v5.704h-3v-11h2.881v1.494h.041c.401-.759 1.381-1.558 2.844-1.558 3.041 0 3.6 2 3.6 4.601v6.463z" />
                </svg>
              </a>
              <a
                href="https://github.com/altrone23"
                className="text-white bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.4-.907-.98-1.148-1.005-1.148-.823-.562.062-.55.062-.55.908.064 1.386.936 1.386.936.808 1.386 2.117 1.97 3.31 1.5.103-.785.43-1.316.772-1.618-2.22-.252-4.556-1.109-4.556-4.939 0-1.09.389-1.979 1.026-2.675-.103-.252-.445-1.27.097-2.644 0 0 .836-.269 2.74 1.022A9.56 9.56 0 0112 6.844c.848.004 1.703.115 2.501.338 1.903-1.291 2.738-1.022 2.738-1.022.544 1.374.201 2.392.099 2.644.64.696 1.024 1.585 1.024 2.675 0 3.836-2.339 4.684-4.566 4.932.36.309.678.918.678 1.854 0 1.338-.012 2.416-.012 2.746 0 .267.18.578.688.48A10.013 10.013 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
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
                <a href="#top" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Industries</span>
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
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
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>AI/ML Solutions</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Cybersecurity</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Full-Stack Development</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Data Engineering</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-500 group-hover:text-accent-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Deep Learning</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group">
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
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
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
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
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
              <a href="/privacy" className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a href="/terms" className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a href="/cookies" className="text-gray-400 text-sm hover:text-accent-500 transition-colors relative group">
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
