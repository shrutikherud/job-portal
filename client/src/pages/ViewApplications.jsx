import React, { useContext, useEffect, useState } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ViewApplications = () => {
  const { backendUrl, companyToken } = useContext(AppContext);

  const [applicants, setApplicants] = useState(false);

  // Function to fetch company job applications data
  const fetchCompanyJobApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/applicants", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setApplicants(data.applications.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to update job application status
  const changeJobApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-status",
        { id, status },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        fetchCompanyJobApplications();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications();
    }
  }, [companyToken]);

  return applicants ? (
    applicants.length === 0 ? (
      <div className="flex items-center justify-center ml-4 h-[10vh]">
        <p className="text-xl font-medium sm:text-2xl">No applications available</p>
      </div>
    ) : (
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
              {applicants
                .filter((item) => item.jobId && item.userId)
                .map((applicant, index) => (
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
                        src={applicant.userId.image}
                        alt=""
                      />
                      <span className="truncate min-w-[100px]">
                        {applicant.userId.name}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden truncate min-w-[100px]">
                      {applicant.jobId.title}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden truncate min-w-[100px]">
                      {applicant.jobId.location}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      <a
                        href={applicant.userId.resume}
                        target="_blank"
                        className="bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded inline-flex gap-2 items-center hover:bg-blue-100 transition"
                      >
                        Resume <img src={assets.resume_download_icon} alt="" />
                      </a>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 relative">
                      {applicant.status === "Pending" ? (
                        <div className="relative inline-block text-left group">
                          <button className="text-gray-500 action-button">
                            ...
                          </button>
                          <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md group-hover:block">
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Accepted"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-green-600 font-medium hover:bg-green-50 cursor-pointer"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Rejected"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-red-600 font-medium hover:bg-red-50 cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>{applicant.status}</div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  ) : (
    <div > 
      <Loading />
    </div>
  );
};

export default ViewApplications;
