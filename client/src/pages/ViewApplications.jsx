import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl ml-3 mt-3 bg-white border border-gray-200 rounded shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                #
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                User name
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold max-sm:hidden">
                Job title
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                Resume
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className="text-gray-800 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 border-b border-gray-200 text-center">
                  {index + 1}
                </td>
                <td className="py-3 px-4 border-b border-gray-200 flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full max-sm:hidden"
                    src={applicant.imgSrc}
                    alt=""
                  />
                  <span className="truncate min-w-[100px]">
                    {applicant.name}
                  </span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden truncate min-w-[100px]">
                  {applicant.jobTitle}
                </td>
                <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden truncate min-w-[100px]">
                  {applicant.location}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <a
                    href=""
                    target="_blank"
                    className="bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded inline-flex gap-2 items-center hover:bg-blue-100 transition"
                  >
                    Resume <img src={assets.resume_download_icon} alt="" />
                  </a>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 relative">
                  <div className="relative inline-block text-left group">
                    <button className="text-gray-500 action-button">...</button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-green-600 font-medium hover:bg-green-50">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-red-600 font-medium hover:bg-red-50">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
