import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="bg-gradient-to-r from-indigo-300 to-purple-200 py-8 px-6 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
              ✨ Find Your Dream Job with InsiderJobs
            </h1>
            <p className="text-base sm:text-lg text-gray-800 mb-3 leading-relaxed">
              Discover thousands of job opportunities across various industries.
              Whether you're a fresher or an experienced professional, InsiderJobs
              connects you with top companies looking for talent like you.
            </p>
            <ul className="list-inside text-gray-800 text-base sm:text-lg mb-3 space-y-1">
              <li>📌 Easy to search</li>
              <li>📌 Quick application tracking</li>
              <li>📌 Profile and resume management</li>
            </ul>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              Start your career journey today—where the right job finds you!
            </p>
          </div>

          {/* Image Section */}
          {/* Image Section */}
{/* Image */}
<div className="flex items-end h-full mt-6 lg:mt-0">
  <img
    src={assets.app_main_img}
    alt="Lady pointing"
    className="w-52 sm:w-60 lg:w-64 object-contain -mb-8"
  />
</div>


        </div>
      </div>
    </div>
  );
};

export default AppDownload;
