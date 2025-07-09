import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Loader, Footer, Hero, Skills, Projects, Contact, Certificates, Experience } from "./components/index.js";
import { GoArrowUp } from "react-icons/go";

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
    }, 1500);
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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <Navbar sendDataToParent={handleDataFromChild} />
      {loading ? (
        <Loader />
      ) : (
        !menuOpen && (
          <div className="max-md:px-4 max-xl:px-10 px-44">
            <button
              title="GO TO TOP"
              className={`rounded-full p-4 text-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 fixed right-10 bottom-10 shadow-lg z-30 shadow-purple-900/50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 ${
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