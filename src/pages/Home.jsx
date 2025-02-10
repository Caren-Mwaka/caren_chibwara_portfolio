import React from "react";
import profileImage from "../assets/coding.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#017B8A] text-black text-center">
      <h1 className="text-6xl font-greatVibes mb-8">Welcome to My Portfolio</h1>

      {/* Profile Image with Light Streak Animation */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Light Streak */}
        <div className="absolute w-full h-full rounded-full border-[4px] border-transparent animate-lightStreak">
          <div className="absolute w-6 h-2 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-80 h-80 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* Subtitle */}
      <p className="text-xl font-montserrat mt-6">Showcasing my work, skills, and projects</p>
    </div>
  );
};

export default Home;
