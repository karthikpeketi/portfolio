import React from "react";
import { Design_Certificate, SQL_Certificate } from "../assets/images";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "React JS",
      description:
      "This certification demonstrates proficiency in key concepts such as components, props, state management, React Hooks, routing, Context API, and API integration, validating my ability to build dynamic and responsive user interfaces efficiently.",
      image: Design_Certificate,
      imageAlt: "React JS Certificates",
      link: "https://certificates.ccbp.in/intensive/react-js?id=SBLOIHWQZO",
    },
    {
      title: "SQL",
      description:
        "This certification demonstrates proficiency in key concepts such as database design, writing SQL queries, joins, indexing, normalization, and data manipulation, validating my ability to efficiently manage and interact with relational databases., Functional Programming, algorithms, local storage, API usage.",
      image: SQL_Certificate,
      imageAlt: "SQL Certificate",
      link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=QDSRVAMHYJ",
    },
  ];

  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Certificates</h1>

      <div className="flex flex-wrap justify-between gap-y-5">
        {certificates.map((value, index) => {
          return (
            <div
              className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer"
              key={index}
            >
              <img className="w-full" src={value.image} alt={value.imageAlt} />
              <div className="px-4">
                <div className="">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-black flex items-center gap-2">
                    {value.title}{" "}
                    <a
                      href={value.link}
                      className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110"
                      target="_blank"
                      title="Certificate Verification"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </h1>
                  <p className="text-gray-700 text-base">{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
