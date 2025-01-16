import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Tasty_Kitchens, Nxt_Watch, Task_Checklist, Food_Munch } from "../assets/images/index.js"

function Projects() {
  const [visible,setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const projects = [
    {
      id: 1,
      image: Tasty_Kitchens,
      imageAlt: "Tasty Kitchens",
      name: "Tasty Kitchens",
      description: "A responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section.",
      additionalDetails: `Login Credentials:
        - Username: rahul
        - Password: rahul@2021`,
      links: {
        hosted: "https://karthiktk.ccbp.tech/"
      },
      tags: [
        "HTML5", "CSS3", "Flexbox", "JavaScript", "React JS",
      ]
    },
    {
      id: 2,
      image: Food_Munch,
      imageAlt: "Food Munch",
      name: "Food Munch",
      description: "This page highlights the details of a restaurant, including its menu, payments, follow us",
      links: {
        hosted: "https://foodsitekarthi.ccbp.tech/"
      },
      tags: [
        "HTML5", "CSS3", "JavaScript","Bootstrap"
      ]
    },
    {
      id: 3,
      image: Nxt_Watch,
      imageAlt: "Nxt Watch App",
      name: "Nxt Watch App",
      description: "Nxt Watch is a video streaming application similar to YouTube. The application is a Single Page Application(SPA) ",
      additionalDetails: `Login Credentials:
        - Username: rahul
        - Password: rahul@2021`,
      links: {
        hosted: "https://karthiknxtwatch.ccbp.tech/"
      },
      tags: [
        "HTML5", "CSS3", "Flexbox", "JavaScript", "React JS",
      ]
    },
    {
      id: 4,
      image: Task_Checklist,
      imageAlt: "Task Checklist App",
      name: "Task Checklist App",
      description: "A Task Management App where users can create, manage tasks by category, and mark them as complete..",
      links: {
        hosted: "https://karthiktasks.ccbp.tech/"
      },
      tags: [
        "JavaScript", "React JS",
      ]
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">

      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map(cards => {
          return (
            <div className="max-md:w-[49%] w-[49%] max-sm:w-full h-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" key={cards.id} onMouseOver={() => handleHover(cards.id)} onMouseLeave={() => setVisible(0)}>
              <img className="w-full h-full object-contain" src={cards.image} alt={cards.imageAlt} />
              <div className={`${visible === cards.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4">
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  {cards.name}
                  </h1>
                  {/* <a href={cards.links.gitHub} className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Github Repo" rel="noreferrer">
                    <FaGithub /> 
                  </a> */}
                  <a href={cards.links.hosted} className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" target="_blank" title="Live Preview" rel="noreferrer">
                    <FaExternalLinkAlt /> 
                  </a>
                </div>
                  <p className="text-gray-200 max-md:text-gray-600 text-base">
                    {cards.description}
                    {cards?.additionalDetails && 
                    <>
                      <br/>
                      <p>{cards.additionalDetails}</p>
                    </>
                    }
                  </p>
              </div>

              <div className="px-4 pt-4 pb-2">
                {
                 cards.tags.map((element,index) => {
                  return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{element}</span>
                  )
                 })
                }
              </div>
            </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects;