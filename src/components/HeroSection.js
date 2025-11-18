import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden py-24 px-5" style={{
      background: 'linear-gradient(135deg, #6B5B95 0%, #8B7AB8 25%, #185397ff 50%, #9B7BA8 75%, #7A5B8C 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circular gradient blob - Top Right */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(24, 145, 226, 0.8) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        {/* Large circular gradient blob - Bottom Left */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(150,100,200,0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite 1s'
        }}></div>

        {/* Medium blob - Top Left */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, rgba(255,180,200,0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 7s ease-in-out infinite 2s'
        }}></div>

        {/* Medium blob - Right side */}
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, rgba(120,80,180,0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 9s ease-in-out infinite 1.5s'
        }}></div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
            LEAD WITH <br />
            <span className="text-purple-200">INNOVATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            We blend technology, expertise, and strategy to craft digital solutions that transform your business and drive real impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#services"
              className="bg-purple-500 text-white py-3 px-10 rounded-lg text-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-white bg-opacity-20 text-white py-3 px-10 rounded-lg text-lg font-semibold hover:bg-opacity-30 transition duration-300 backdrop-blur-sm border border-white border-opacity-30"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="border-t border-white border-opacity-20 pt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-12">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial Card 1 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-300">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-white mb-6 text-sm leading-relaxed">
                "Altrone transformed our digital infrastructure. Their team is highly professional and delivered beyond expectations."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">R</div>
                <div>
                  <p className="text-white font-semibold text-sm">Ashook Yargalandha</p>
                  <p className="text-purple-200 text-xs">CEO,Inspectx</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-300">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-white mb-6 text-sm leading-relaxed">
                "Outstanding AI solutions that improved our efficiency by 40%. Highly recommended for enterprise projects."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold">P</div>
                <div>
                  <p className="text-white font-semibold text-sm"></p>
                  <p className="text-purple-200 text-xs">P K Podnik</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            {/* <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-300">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-white mb-6 text-sm leading-relaxed">
                "Their cybersecurity expertise protected us from potential threats. A trusted partner for long-term growth."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">V</div>
                <div>
                  <p className="text-white font-semibold text-sm">Vikram Patel</p>
                  <p className="text-purple-200 text-xs">CTO, SecureNet Inc</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;