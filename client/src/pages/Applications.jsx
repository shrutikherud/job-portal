import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

const Applications = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  const { backendUrl, userData, userApplications, fetchUserData, fetchUserApplications } =
    useContext(AppContext);

  const updateResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", resume);

      const token = await getToken();

      const { data } = await axios.post(
        backendUrl + "/api/users/update-resume",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);

        await fetchUserData();
        setIsEdit(false);
        setResume(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userData && userData.resume && typeof userData.resume !== "string") {
      setResume(userData.resume);
    }
  }, [userData]);

  useEffect(() => {
    if (user) {
      fetchUserApplications()
    }
  }, [user])
  

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || (userData && userData.resume === "") ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="border border-gray-300 font-medium bg-gradient-to-r from-blue-200 to-blue-300 text-blue-800 px-4 py-2 mr-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2">
                  <img
                    className="w-5 h-5"
                    src={assets.profile_upload_icon}
                    alt=""
                  />
                  <span>
                    {/* If resume is a file, show file name. Otherwise, show "Select Resume" */}
                    {resume && typeof resume !== "string"
                      ? resume.name
                      : "Select Resume"}
                  </span>
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
                onClick={updateResume}
                className="border border-gray-300 font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-900 px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                💾 Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a target='_blank'
                href={userData.resume}
                className="font-semibold bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:from-indigo-200 hover:to-purple-300 hover:text-blue-900 border border-gray-300"
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
            {userApplications.map((job, index) =>
              true ? (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                      <img className="w-8 h-8" src={job.companyId.image} alt="" />
                      {job.companyId.name}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.jobId.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 max-sm:hidden">
                    {job.jobId.location}
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
