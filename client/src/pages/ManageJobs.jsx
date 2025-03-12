import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {

  const navigate = useNavigate()

  return (
    <div className="container p-4 mx-auto">
      <div>
        <table className="w-full max-w-4xl ml-3 mt-3 bg-white border border-gray-200 rounded shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-3 px-4 text-center text-gray-800 font-semibold max-sm:hidden">
                #
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                Job title
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                Applicants
              </th>
              <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                Visible
              </th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index}
              className="text-gray-800 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">{index + 1}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center">{job.title}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">{moment(job.date).format("ll")}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">{job.location}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center">{job.applicants}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center">
                  <input className="scale-125" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={()=>navigate('/dashboard/add-job')} className='w-full sm:w-auto font-medium bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer'>Add new job</button>
        </div>
    </div>
  );
};

export default ManageJobs;
