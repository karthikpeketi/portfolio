import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Springboot_Logo,
  Java_Logo,
  Mssql_Logo,
  Tailwind_Logo
} from "../assets/images/index";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      items: [
        { src: JavaScript_Logo, alt: "JavaScript", level: 90 },
        { src: React_Logo, alt: "React", level: 85 },
        { src: HTML_Logo, alt: "HTML5", level: 95 },
        { src: CSS_Logo, alt: "CSS3", level: 90 },
        { src: Tailwind_Logo, alt: "Tailwind CSS", level: 80 },
        { src: Bootstrap_Logo, alt: "Bootstrap", level: 75 }
      ],
    },
    {
      title: "Backend",
      items: [
        { src: Java_Logo, alt: "Java", level: 80 },
        { src: Springboot_Logo, alt: "Spring Boot", level: 75 },
        { src: Mssql_Logo, alt: "SQL", level: 70 }
      ],
    },
    {
      title: "Tools & Version Control",
      items: [
        { src: Git_Logo, alt: "Git", level: 85 },
        { src: Github_Logo, alt: "Github", level: 85 }
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="pb-5 h-auto my-32" id="skills">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Expertise</span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">Technologies I work with</p>
      </motion.div>

      <motion.div 
        className="flex max-lg:flex-col items-start justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            className="flex-1 w-full" 
            key={categoryIndex}
            variants={itemVariants}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                          <img src={skill.src} alt={skill.alt} className="h-8 w-8" />
                        </div>
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <motion.div
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            {skill.alt}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-medium">{skill.alt}</span>
                          <span className="text-purple-400 text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;