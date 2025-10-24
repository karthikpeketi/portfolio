import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Navbar,
  Loader,
  Footer,
  Hero,
  Skills,
  Projects,
  Contact,
  Certificates,
  Experience,
} from "./components/index.js";
import { GoArrowUp } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleDataFromChild = (data) => {
    setMenuOpen(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[100dvh] md:min-h-screen overflow-x-hidden">
      <Navbar sendDataToParent={handleDataFromChild} />
      {loading ? (
        <Loader />
      ) : (
        !menuOpen && (
          <div
            className="max-md:px-4 max-xl:px-10 px-44 [height:calc(100%-60px)]
  md:[height:calc(100%-80px)]"
          >
            <div
              className={`fixed right-7 z-30 hidden max-md:flex flex-col space-y-4 transition-all duration-300 ease-in-out ${
                visible ? "bottom-28" : "bottom-10"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/karthik-peketi/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-3 text-white bg-[#0073b0] shadow-lg shadow-purple-900/50 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <button
              title="GO TO TOP"
              className={`rounded-full p-4 text-xl text-white bg-gradient-to-r from-sky-400 to-indigo-500 fixed right-7 bottom-10 shadow-lg z-30 shadow-sky-900/50 hover:shadow-sky-500/50 transition-all duration-300 hover:scale-110 ${
                visible ? "block" : "hidden"
              }`}
              onClick={scrollToTop}
            >
              <GoArrowUp />
            </button>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
          </div>
        )
      )}
    </div>
  );
}

export default App;
