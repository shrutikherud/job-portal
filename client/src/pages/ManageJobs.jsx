import React, { useContext, useState, useEffect } from "react";
import { jobsData, manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState(false);

  const { backendUrl, companyToken } = useContext(AppContext);

  // Function to fetch company Job Applications data
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to change job visibility
  const changeJobVisibillity = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibility",
        { id },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        toast.success(data.message);
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return jobs ? (
    jobs.length === 0 ? (
      <div className="flex items-center justify-center ml-4 h-[10vh]">
        <p className="text-xl font-medium sm:text-2xl">No jobs available or posted</p>
      </div>
    ) : (
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
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className="text-gray-800 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center">
                    {job.title}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center">
                    {job.applicants}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center">
                    <input
                      onChange={() => changeJobVisibillity(job._id)}
                      className="scale-125"
                      type="checkbox"
                      checked={job.visible}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end w-full max-w-4xl ml-3">
          <button
            onClick={() => navigate("/dashboard/add-job")}
            className="font-medium bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
          >
            Add new job
          </button>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default ManageJobs;
