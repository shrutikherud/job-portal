import React from "react";
import { assets } from "../assets/assets";
import {useNavigate} from "react-router-dom";

const JobCard = ({ job }) => {

  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 p-6 shadow rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-semibold text-xl mt-4">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-100 text-blue-800 font-medium border border-blue-200 px-4 py-1.5 rounded-md">
          {job.location}
        </span>
        <span className="bg-red-100 text-gray-800 font-medium rounded-md border border-red-200 px-4 py-1.5">
          {job.level}
        </span>
      </div>
      <p
  className="text-gray-600 text-sm mt-4 min-h-[80px]"
  dangerouslySetInnerHTML={{
    __html: job.description.length > 170
      ? job.description.substring(0, job.description.lastIndexOf(" ", 170)) + "..."
      : job.description,
  }}
></p>

      <div className="mt-4 flex gap-4 text-sm">
        <button onClick={()=> {navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded cursor-pointer">
          Apply Now
        </button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className=" border border-gray-400 hover:bg-gray-200 text-gray-700 shadow rounded px-4 py-2 cursor-pointer">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
