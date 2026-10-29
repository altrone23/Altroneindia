import React, { useState, useRef, useEffect, useMemo } from "react";

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const sectionRef = useRef(null);
  const teamMemberRefs = useRef([]);

  const teamMembers = useMemo(
    () => [
      {
        name: "Balavignesh A U",
        position: "Founder & CEO",
        image: "/people/Bala.jpeg",
        bio: "Balavignesh has hands-on experience in full-stack development, having built platforms like INSPECTX Pro. He founded AltroneIndia with a vision to create impactful, tech-driven solutions for businesses and communities.",
        social: {
          linkedin: "https://www.linkedin.com/in/balavignesh1010",
          twitter: "#",
        },
      },
      {
        name: "Kavirajan E",
        position: "Co-Founder",
        image: "/people/kavi.jpg",
        bio: "With a Computer Science and specialization in machine learning, Kavirajan leads our technical strategy and innovation.",
        social: {
          linkedin: "https://www.linkedin.com/in/kavirajan05",
          twitter: "#",
        },
      },
    ],
    []
  );

  const techLeads = useMemo(
    () => [
      {
        name: "Mukesh.N",
        position: "Tech Lead",
        image: "/people/mukesh.jpg",
        bio: "Mukesh brings strong engineering depth and a practical approach to delivering scalable digital products.",
        social: {
          linkedin: "https://www.linkedin.com/in/mukesh-n-aa78232b9",
          twitter: "#",
        },
      },
      {
        name: "Iniya Rajan",
        position: "Tech Lead",
        image: "/people/iniy.jpg",
        bio: "Iniya focuses on product engineering, frontend execution, and polished user experiences.",
        social: {
          linkedin: "https://www.linkedin.com/in/iniya-rajan-182000289",
          twitter: "#",
        },
      },
      {
        name: "Savishnu.L",
        position: "Tech Lead",
        image: "/people/savishnu.jpg",
        bio: "Savishnu combines design thinking with technical execution to build efficient, modern solutions.",
        social: {
          linkedin: "https://www.linkedin.com/in/savishnu-l-872a962b9",
          twitter: "#",
        },
      },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const currentSection = sectionRef.current;
    const currentRefs = [...teamMemberRefs.current];

    if (currentSection) observer.observe(currentSection);

    currentRefs.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      if (currentSection) observer.unobserve(currentSection);

      currentRefs.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  return (
    <section id="team" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-primary-600">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our innovative solutions
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Founders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={`founder-${index}`}
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
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex space-x-3 mb-4">
                          <a
                            href={member.social.linkedin}
                            className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm9.5 12.268h-3v-5.604c0-1.336-.027-3.06-1.866-3.06-1.867 0-2.154 1.457-2.154 2.96v5.704h-3v-11h2.881v1.494h.041c.401-.759 1.381-1.558 2.844-1.558 3.041 0 3.6 2 3.6 4.601v6.463z" />
                            </svg>
                          </a>
                          <a
                            href={member.social.twitter}
                            className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                            aria-label="Twitter"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.9 1.4h3.5l-7.64 8.73L24 22.6h-6.92l-5.41-7.94L5.1 22.6H1.6l8.18-9.34L0 1.4h7.09l4.89 7.24 5.92-7.24zm-1.22 19h1.93L7.08 3.02H5.05l12.63 17.38z" />
                            </svg>
                          </a>
                        </div>
                        <p className="text-white text-sm opacity-90">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent-500 font-medium">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Tech Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techLeads.map((member, index) => (
              <div
                key={`tech-${index}`}
                className="opacity-0 transform translate-y-10"
                ref={(el) => (teamMemberRefs.current[teamMembers.length + index] = el)}
                style={{ animationDelay: `${(teamMembers.length + index) * 150}ms` }}
                onMouseEnter={() => setActiveTeamMember(teamMembers.length + index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] group">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex space-x-3 mb-4">
                          <a
                            href={member.social.linkedin}
                            className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm9.5 12.268h-3v-5.604c0-1.336-.027-3.06-1.866-3.06-1.867 0-2.154 1.457-2.154 2.96v5.704h-3v-11h2.881v1.494h.041c.401-.759 1.381-1.558 2.844-1.558 3.041 0 3.6 2 3.6 4.601v6.463z" />
                            </svg>
                          </a>
                          <a
                            href={member.social.twitter}
                            className="bg-white text-primary-600 p-2 rounded-full hover:bg-primary-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                            aria-label="Twitter"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.9 1.4h3.5l-7.64 8.73L24 22.6h-6.92l-5.41-7.94L5.1 22.6H1.6l8.18-9.34L0 1.4h7.09l4.89 7.24 5.92-7.24zm-1.22 19h1.93L7.08 3.02H5.05l12.63 17.38z" />
                            </svg>
                          </a>
                        </div>
                        <p className="text-white text-sm opacity-90">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent-500 font-medium">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#careers"
            className="inline-block bg-primary-50 text-primary-600 border border-primary-200 px-8 py-3 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300 transform hover:translate-y-[-2px]"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
