import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Crestere Technologies LLP",
      location: "Pune, Maharashtra, India",
      duration: "2023 - 2024",
      type: "Full-time",
      description: [
        "Developed and maintained responsive web applications using React.js and Spring Boot",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized application performance and improved user experience",
      ],
      technologies: ["React", "Spring Boot", "JavaScript", "SQL", "Git"],
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Remedo",
      location: "Remote",
      duration: "2025 - Present",
      type: "Internship",
      description: [
        "Developed responsive and user-friendly web pages using Next.js, HTML5, CSS3, Tailwind CSS and Postman",
        "Optimized frontend for better SEO and reusable components.",
        "Worked with REST APIs to fetch and display dynamic data across multiple pages.",
        "Participated in daily stand-ups.",
      ],
      technologies: ["Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="my-16 md:my-20 lg:my-24" id="experience">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Experience
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">
          My professional journey
        </p>
      </motion.div>

      <div
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-indigo-500"></div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 -translate-x-1/2 top-1 w-4 h-4 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full border-4 border-sky-900 shadow-lg z-10"></div>

              {/* Content */}
              <motion.div
                whileHover={{ y: -6 }}
                className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 w-full cursor-pointer"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-300 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-2">
                      <div className="flex items-baseline gap-2">
                        <FaBriefcase className="text-sm" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline gap-2 text-gray-400 mb-2">
                      <FaCalendarAlt className="text-sm" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium border border-sky-500/30">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="text-gray-300 mb-6 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-sky-400 mt-2">•</span>
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
