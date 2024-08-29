import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Caren, a software developer and mechanical engineer with a deep
          passion for using technology to drive sustainability and combat
          climate change. My journey began with a solid foundation in mechanical
          engineering, where I developed a keen understanding of systems design
          and efficiency. As I ventured into software development, I discovered
          the incredible potential to create innovative solutions that not only
          solve technical challenges but also contribute to a more sustainable
          world.
        </p>

        <br />

        <p className="text-xl">
          My work is fueled by a desire to make a meaningful impact. Whether
          it's designing energy-efficient systems or developing software that
          supports sustainable practices, I am committed to using my skills to
          drive positive change. I believe in the power of technology as a force
          for good, and I'm excited to collaborate with others who share this
          vision. Together, we can create solutions that are not only innovative
          but also help build a better future for our planet.
        </p>
      </div>
    </div>
  );
};

export default About;
