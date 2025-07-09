import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFilter } from "react-icons/fa";
import { Tasty_Kitchens, Nxt_Watch, Task_Checklist, Food_Munch, Weather } from "../assets/images/index.js";

function Projects() {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: Weather,
      imageAlt: "Weather App",
      name: "Weather App",
      description: "Real-time weather application with location search and dynamic weather data from OpenWeatherMap API.",
      category: "react",
      links: {
        hosted: "https://karthikpeketi.github.io/weatherApp/",
        github: "#"
      },
      tags: ["React JS", "API Integration", "Responsive Design"],
      featured: true
    },
    {
      id: 2,
      image: Tasty_Kitchens,
      imageAlt: "Tasty Kitchens",
      name: "Tasty Kitchens",
      description: "Full-featured food ordering platform with restaurant listings, cart management, and payment integration.",
      category: "react",
      links: {
        hosted: "https://karthiktk.ccbp.tech/",
        github: "#"
      },
      tags: ["React JS", "Authentication", "State Management"],
      featured: true
    },
    {
      id: 3,
      image: Food_Munch,
      imageAlt: "Food Munch",
      name: "Food Munch",
      description: "Restaurant showcase website with modern design and responsive layout.",
      category: "frontend",
      links: {
        hosted: "https://foodsitekarthi.ccbp.tech/",
        github: "#"
      },
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"]
    },
    {
      id: 4,
      image: Nxt_Watch,
      imageAlt: "Nxt Watch App",
      name: "Nxt Watch",
      description: "YouTube-like video streaming SPA with user authentication and video management.",
      category: "react",
      links: {
        hosted: "https://karthiknxtwatch.ccbp.tech/",
        github: "#"
      },
      tags: ["React JS", "SPA", "Video Streaming"],
      featured: true
    },
    {
      id: 5,
      image: Task_Checklist,
      imageAlt: "Task Checklist App",
      name: "Task Manager",
      description: "Intuitive task management application with category organization and completion tracking.",
      category: "react",
      links: {
        hosted: "https://karthiktasks.ccbp.tech/",
        github: "#"
      },
      tags: ["React JS", "Local Storage", "Task Management"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'react', label: 'React Apps', count: projects.filter(p => p.category === 'react').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="pb-5 h-auto my-32" id="projects">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">Some of my recent work</p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              filter === category.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <FaFilter className="text-sm" />
            {category.label}
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.imageAlt} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                >
                  <a
                    href={project.links.hosted}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
                    title="Source Code"
                  >
                    <FaGithub />
                  </a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;