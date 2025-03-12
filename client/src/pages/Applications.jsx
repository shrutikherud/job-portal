import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="border border-gray-300 font-medium bg-gradient-to-r from-blue-200 to-blue-300 text-blue-800 px-4 py-2 mr-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2">
                  <img className="w-5 h-5" src={assets.profile_upload_icon} alt="" />
                  Select Resume
                </p>

                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
              </label>
              <button
                onClick={(e) => setIsEdit(false)}
                className="border border-gray-300 font-medium bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                💾 Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="font-semibold bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:from-indigo-200 hover:to-purple-300 hover:text-blue-900 border border-gray-300"
                href=""
              >
                📄 Resume
              </a>

              <button
                onClick={() => setIsEdit(true)}
                className="font-semibold text-gray-700 border border-gray-300 rounded-lg px-6 py-2 cursor-pointer shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-lg transform hover:scale-105"
              >
                ✏️ Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className=" px-4 py-3 border-b border-gray-300 text-left">
                Company
              </th>
              <th className=" px-4 py-3 border-b border-gray-300 text-left">
                Job Title
              </th>
              <th className=" px-4 py-3 border-b border-gray-300 text-left max-sm:hidden">
                Location
              </th>
              <th className=" px-4 py-3 border-b border-gray-300 text-left max-sm:hidden">
                Date
              </th>
              <th className=" px-4 py-3 border-b border-gray-300 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) =>
              true ? (
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                      <img className="w-8 h-8" src={job.logo} alt="" />
                      {job.company}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <span
                      className={`w-24 px-4 py-1 rounded-full text-center font-semibold inline-block 
                      ${
                        job.status === "Accepted"
                          ? "bg-green-100  text-green-700"
                          : job.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
