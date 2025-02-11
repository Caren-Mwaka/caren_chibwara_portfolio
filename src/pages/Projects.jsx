import React from "react";

const projects = [
  {
    id: 1,
    title: "The Neighbourhood Net",
    description: "A Local Community Watch for Safety, Engagement, and Events.",
    image: "/assets/net.jpg",
    link: "https://the-neighbourhood-net.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/assets/Desktop - 1.png", 
    link: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "AI blog generator",
    description: "AI-powered blog generation platform designed to transcribe YouTube videos, summarize the content, and create high-quality, SEO-optimized blog posts automatically",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWklMjB3ZWIlMjBhcHB8ZW58MHx8MHx8fDA%3D",
    link: "https://github.com/Caren-Mwaka/AI_web_app",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#017B8A] flex flex-col items-center p-10">
      <h2 className="text-4xl font-bold text-white mb-6">My Projects</h2>
      <p className="text-lg text-black mb-10">
        A collection of my best work and collaborations.
      </p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Project Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#268995]">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#268995] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1b6b7a] transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
