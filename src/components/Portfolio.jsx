import React from "react";
import portfolio from "../assets/portfolio/portfolio.png";
import net from "../assets/portfolio/net.png";
import swapi from "../assets/portfolio/swapi.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      demo: "https://caren-chibwara-portfolio.vercel.app/",
      code: "https://github.com/Caren-Mwaka/caren_chibwara_portfolio",
    },
    {
      id: 2,
      src: net,
      demo: "https://the-neighbourhood-net.vercel.app/",
      code: "https://github.com/Caren-Mwaka/The_Neighbourhood_Net",
    },
    {
      id: 3,
      src: swapi,
      demo: "https://phase-one-project-five.vercel.app/",
      code: "https://github.com/Caren-Mwaka/phaseOneProject",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
