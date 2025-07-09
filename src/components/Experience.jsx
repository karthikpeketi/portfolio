import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2023 - Present",
      type: "Full-time",
      description: [
        "Developed and maintained responsive web applications using React.js and Spring Boot",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized application performance and improved user experience"
      ],
      technologies: ["React", "Spring Boot", "JavaScript", "SQL", "Git"]
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Digital Agency",
      location: "Hyderabad, India",
      duration: "2022 - 2023",
      type: "Internship",
      description: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript",
        "Worked closely with designers to implement pixel-perfect designs",
        "Participated in code reviews and learned best practices",
        "Contributed to multiple client projects and gained real-world experience"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-20" id="experience">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">My professional journey</p>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 w-full">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-purple-400 mb-2">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-sm" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <FaCalendarAlt className="text-sm" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="text-gray-300 mb-6 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;