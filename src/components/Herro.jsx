import React from "react";
import heroImage from "../assets/africa.webp"; // optional background image

const Herro = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white h-screen flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Explore All{" "}
            <span className="text-yellow-400">African Countries</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl">
            Discover flags, currencies, and locations of every African country.
            Perfect for learning, travel, or reference.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Africa Map"
            className="w-full max-w-md rounded-xl shadow-2xl mt-44"
          />
        </div>
      </div>
    </div>
  );
};

export default Herro;
