import React, { useState, useRef, useEffect, useMemo } from "react";

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const sectionRef = useRef(null);
  const teamMemberRefs = useRef([]);

  const teamMembers = useMemo(() => [
    {
      name: "Balavignesh A U",
      position: "CEO & Founder",
      image: "/people/Bala.jpg",
      bio: "Balavignesh has hands-on experience in full-stack development, having built platforms like INSPECTX Pro. He founded AltroneIndia with a vision to create impactful, tech-driven solutions for modern businesses",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Kavirajan E",
      position: "Co-Founder",
      image: "/people/kavi.jpg",
      bio: "With a Computer Science and specialization in machine learning, Kavirajan leads our technical strategy and innovation. His research has been published in top AI conferences worldwide.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Vikram Singh",
      position: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Vikram leads our AI research initiatives, focusing on developing novel algorithms and approaches for real-world business applications. He previously worked at leading research labs in Silicon Valley.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ananya Desai",
      position: "Head of Cybersecurity",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "A certified ethical hacker with extensive experience in information security, Ananya ensures our solutions meet the highest security standards while helping clients safeguard their digital assets.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ], []);

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
    
    teamMemberRefs.current.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      teamMemberRefs.current.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  // Reset the refs array when team members change
  useEffect(() => {
    teamMemberRefs.current = teamMemberRefs.current.slice(0, teamMembers.length);
  }, [teamMembers]);

  return (
    <section id="team" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our <span className="text-primary-600">Leadership</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="opacity-0 transform translate-y-10"
              ref={(el) => (teamMemberRefs.current[index] = el)}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveTeamMember(index)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] group">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
                  >
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex space-x-3 mb-4">
                        <a 
                          href={member.social.linkedin} 
                          className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a 
                          href={member.social.twitter} 
                          className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                          aria-label="Twitter"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>
                      <p className="text-white text-sm opacity-90">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-accent-500 font-medium">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#careers" 
            className="inline-block bg-primary-50 text-primary-600 border border-primary-200 px-8 py-3 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300 transform hover:scale-105"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;