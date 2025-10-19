import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import coding_gif from "../assets/images/coding.gif";

function Hero() {
  return (
    <div className="mx-auto h-screen flex items-center justify-center pt-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <motion.div 
          className="w-1/2 max-xl:w-full text-left max-md:text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl max-md:text-4xl mb-5 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Karthik</span> 👋
          </motion.h1>
          
          <div className="text-3xl max-md:text-xl md:mb-8 font-light h-10">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'React Developer',
                2000,
                'Problem Solver',
                2000,
                'Creative Thinker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500"
            />
          </div>
          
          <motion.p 
            className="text-xl max-md:text-base mb-8 font-light text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I create seamless, beautiful and innovative web experiences with modern technologies. 
            Passionate about turning ideas into reality through clean, efficient code.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 max-md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a 
              href="#contact" 
              className="group relative px-8 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105"
            >
              <span className="relative z-10 text-sm">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#projects" 
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-1/2 max-xl:w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              className="relative h-80 max-xl:h-64 rounded-2xl shadow-2xl max-[426px]:h-auto max-[426px]:w-full"
              src={coding_gif}
              alt="Coding animation"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
