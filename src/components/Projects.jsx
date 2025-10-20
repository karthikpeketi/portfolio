import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  Tasty_Kitchens,
  Nxt_Watch,
  Task_Checklist,
  Inventory360,
  Weather,
} from "../assets/images/index.js";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: Inventory360,
      imageAlt: "Invetory360",
      name: "Invetory360",
      description:
        "Developed a full-stack inventory management system using Spring Boot, React.js, and MySQL with JWT authentication, role-based access, and email OTP verification. Integrated RESTful APIs, XLSX export, and real-time dashboards using Recharts and Framer Motion for smooth data visualization and user experience.",
      category: "fullstack",
      links: {
        hosted: "https://inventory-frontend-kappa-ten.vercel.app/login",
        github: "https://github.com/karthikpeketi/inventory-mangement",
      },
      tags: [
        "React JS",
        "Spring Boot",
        "MySQL",
        "Framer motion",
        "Role Based Login",
        "RESTful APIs",
      ],
      featured: true,
    },
    {
      id: 2,
      image: Weather,
      imageAlt: "Weather App",
      name: "Weather App",
      description:
        "Real-time weather application with location search and dynamic weather data from OpenWeatherMap API.",
      category: "react",
      links: {
        hosted: "https://karthikpeketi.github.io/weatherApp/",
        github: "https://github.com/karthikpeketi/weatherApp",
      },
      tags: ["React JS", "API Integration", "Responsive Design"],
      featured: false,
    },
    {
      id: 3,
      image: Tasty_Kitchens,
      imageAlt: "Tasty Kitchens",
      name: "Tasty Kitchens",
      description:
        "Full-featured food ordering platform with restaurant listings, cart management, and payment integration.",
      category: "react",
      links: {
        hosted: "https://karthiktk.ccbp.tech/",
        github: "https://github.com/karthikpeketi",
      },
      tags: ["React JS", "Authentication", "State Management"],
      featured: false,
    },
    {
      id: 4,
      image: Nxt_Watch,
      imageAlt: "Nxt Watch App",
      name: "Nxt Watch",
      description:
        "YouTube-like video streaming SPA with user authentication and video management.",
      category: "react",
      links: {
        hosted: "https://karthiknxtwatch.ccbp.tech/",
        github: "https://github.com/karthikpeketi/",
      },
      tags: ["React JS", "SPA", "Video Streaming"],
      featured: false,
    },
    {
      id: 5,
      image: Task_Checklist,
      imageAlt: "Task Checklist App",
      name: "Task Manager",
      description:
        "Intuitive task management application with category organization and completion tracking.",
      category: "react",
      links: {
        hosted: "https://karthiktasks.ccbp.tech/",
        github: "https://github.com/karthikpeketi/",
      },
      tags: ["React JS", "Local Storage", "Task Management"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "react",
      label: "React Applications",
      count: projects.filter((p) => p.category === "react").length,
    },
    {
      id: "fullstack",
      label: "Full-Stack-Applications",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="pb-5 h-auto my-16 md:my-20 lg:my-24" id="projects">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">
          Some of my recent work
        </p>
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
                ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/20"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
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
              whileHover={{ y: -6 }}
              className={`cursor-pointer group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.imageAlt}
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                ></motion.div>
              </div>

              <div className="p-6">
                <div className="flex flex-row gap-2 items-center mb-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </h3>
                  <a
                    href={project.links.hosted}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent p-3 rounded-full transition-all duration-300 hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent p-3 rounded-full transition-all duration-300 hover:scale-110"
                    title="Source Code"
                  >
                    <FaGithub />
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium border border-sky-500/30"
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
