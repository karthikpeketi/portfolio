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
  Tailwind_Logo,
  Postman_Logo,
} from "../assets/images/index";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      items: [
        { src: JavaScript_Logo, alt: "JavaScript" },
        { src: React_Logo, alt: "React" },
        { src: HTML_Logo, alt: "HTML5" },
        { src: CSS_Logo, alt: "CSS3" },
        { src: Tailwind_Logo, alt: "Tailwind CSS" },
        { src: Bootstrap_Logo, alt: "Bootstrap" },
      ],
    },
    {
      title: "Backend",
      items: [
        { src: Java_Logo, alt: "Java" },
        { src: Springboot_Logo, alt: "Spring Boot" },
        { src: Mssql_Logo, alt: "SQL" },
      ],
    },
    {
      title: "Tools",
      items: [
        { src: Git_Logo, alt: "Git" },
        { src: Github_Logo, alt: "Github" },
        { src: Postman_Logo, alt: "Postman" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="pb-5 h-auto my-16 md:my-20 lg:my-24" id="skills">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Skills &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Expertise
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">
          Technologies I work with
        </p>
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group flex flex-col items-center justify-center text-center"
                    whileHover={{ y: -10 }}
                    transition={{
                      y: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <div className="w-20 h-20 bg-gray-700/50 rounded-2xl flex items-center justify-center mb-3 border border-gray-600/50 transition-all duration-300">
                      <img
                        src={skill.src}
                        alt={skill.alt}
                        className="h-12 w-12"
                      />
                    </div>
                    <p className="text-white font-medium text-sm h-8">
                      {skill.alt}
                    </p>
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
