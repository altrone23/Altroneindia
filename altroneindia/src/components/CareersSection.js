import React, { useState, useRef, useEffect } from "react";

const CareersSection = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const jobRefs = useRef([]);
  const formRef = useRef(null);

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      location: "Bangalore, India (Hybrid)",
      type: "Full-time",
      description: "Join our AI team to develop cutting-edge machine learning models for enterprise clients.",
      requirements: [
        "5+ years of experience in AI/ML development",
        "Strong Python skills with TensorFlow or PyTorch",
        "Experience with NLP and computer vision",
        "Advanced degree in Computer Science or related field"
      ]
    },
    {
      title: "Cybersecurity Analyst",
      location: "Delhi, India (Onsite)",
      type: "Full-time",
      description: "Help protect our clients' critical systems and data from emerging security threats.",
      requirements: [
        "3+ years in cybersecurity operations",
        "Experience with threat detection systems",
        "Knowledge of OWASP standards",
        "Security certifications preferred (CISSP, CEH)"
      ]
    },
    {
      title: "Full Stack Developer",
      location: "Remote (India)",
      type: "Full-time",
      description: "Build responsive and scalable web applications using modern technologies and frameworks.",
      requirements: [
        "3+ years of full stack development experience",
        "Proficiency in React/Angular and Node.js",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Knowledge of database design and optimization"
      ]
    },
    {
      title: "Data Engineer",
      location: "Mumbai, India (Hybrid)",
      type: "Full-time",
      description: "Design and implement scalable data pipelines to support our analytics and ML platforms.",
      requirements: [
        "3+ years in data engineering",
        "Experience with Spark, Kafka, or similar technologies",
        "SQL and NoSQL database expertise",
        "Knowledge of ETL processes and data warehousing"
      ]
    }
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: '',
    position: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleJobApply = (jobTitle) => {
    setFormData({
      ...formData,
      position: jobTitle
    });
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Application submitted successfully! We will contact you soon.');
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      message: '',
      position: ''
    });
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
    
    jobRefs.current.forEach((job) => {
      if (job) observer.observe(job);
    });

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      jobRefs.current.forEach((job) => {
        if (job) observer.unobserve(job);
      });
      
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, [showForm]);

  // Reset the refs array when jobOpenings change
  useEffect(() => {
    jobRefs.current = jobRefs.current.slice(0, jobOpenings.length);
  }, [jobOpenings]);

  return (
    <section id="careers" className="py-20 px-5 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Join <span className="text-primary-600">Our Team</span></h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 transform translate-y-10"
                ref={(el) => (jobRefs.current[index] = el)}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveJob(index)}
                onMouseLeave={() => setActiveJob(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">{job.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeJob === index 
                      ? 'bg-primary-600 text-white transform scale-105' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {job.location}
                </p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">Requirements:</h5>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li 
                        key={idx} 
                        className={`transition-all duration-300 ${activeJob === index ? 'text-gray-800 font-medium' : ''}`}
                      >
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button 
                    className={`text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                      activeJob === index
                        ? 'bg-accent-600 scale-105 shadow-md'
                        : 'bg-accent-500 hover:bg-accent-600 hover:scale-105'
                    }`}
                    onClick={() => handleJobApply(job.title)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-600 text-white p-8 md:p-12 rounded-xl transform hover:scale-[1.01] transition-transform duration-300 hover:shadow-xl">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't see the right role?</h3>
              <p className="text-primary-100 text-lg">
                We're always looking for talented individuals to join our team. Send us your resume, and we'll contact you when a suitable position opens up.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <button 
                className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium text-lg inline-block transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => {
                  setFormData({
                    ...formData,
                    position: 'Open Application'
                  });
                  setShowForm(true);
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Send Open Application
              </button>
            </div>
          </div>
        </div>

        {showForm && (
          <div 
            className="mt-16 bg-white p-8 rounded-lg shadow-lg transform opacity-0 translate-y-10 animate-fade-in"
            ref={formRef}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-600">Apply for {formData.position}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume/CV</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-2 border-dashed w-full h-32 p-6 group text-center border-gray-300 hover:border-primary-500 hover:bg-gray-50 cursor-pointer transition-all">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                      {!formData.resume ? (
                        <>
                          <svg className="w-10 h-10 text-gray-400 group-hover:text-primary-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="pointer-none text-gray-500 group-hover:text-primary-600 transition-all">
                            <span className="text-sm">Drag and drop or click to upload</span><br />
                            <span className="text-xs">(PDF, DOC, DOCX up to 5MB)</span>
                          </p>
                        </>
                      ) : (
                        <p className="text-primary-600 font-medium">
                          {formData.resume.name}
                        </p>
                      )}
                    </div>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tell us why you're a good fit for this position"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersSection;