import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#017B8A] text-white text-center p-10">
      {/* Section Title */}
      <h2 className="text-5xl font-greatVibes text-white mb-6 animate-fadeIn">About Me</h2>

      {/* Short Intro */}
      <p className="text-4xl font-greatVibes mb-4 text-white animate-slideUp">Mechanical Engineer & Software Developer</p>

      {/* Description */}
      <div className="max-w-3xl bg-white text-black p-8 rounded-lg shadow-lg animate-fadeIn">
        <p className="text-lg leading-relaxed font-montserrat">
          Welcome to my personal portfolio! I'm <span className="font-bold">Caren Chibwara</span>, a dynamic and analytical professional thriving at the intersection of 
          <span className="text-[#017B8A] font-semibold"> software development </span> 
          and <span className="text-[#268995] font-semibold">mechanical engineering</span>.
        </p>

        <p className="mt-4 text-lg leading-relaxed font-montserrat">
          My passion for technology is deeply rooted in a desire to create impactful solutions that drive sustainability and combat climate change. With a strong foundation in both engineering and software, I'm dedicated to making a meaningful difference through every project I undertake.
        </p>
      </div>
    </div>
  );
};

export default About;
