"use client";
// components/GrievanceForm.js

import React, { useState } from "react";

const GrivenceForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    enrolledCourse: "",
    phoneNo: "",
    emailAddress: "",
    grievanceType: [],
    elaborateGrievance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedGrievanceType = [...formData.grievanceType];

    if (checked) {
      updatedGrievanceType.push(value);
    } else {
      updatedGrievanceType = updatedGrievanceType.filter(
        (type) => type !== value
      );
    }

    setFormData({ ...formData, grievanceType: updatedGrievanceType });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data
    console.log(formData);
    // Reset the form after submission
    setFormData({
      studentName: "",
      studentId: "",
      enrolledCourse: "",
      phoneNo: "",
      emailAddress: "",
      grievanceType: [],
      elaborateGrievance: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 my-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="my-4 text-3xl font-bold text-center text-yellow-700">
        Grievance Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700"
            >
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700"
            >
              Student ID No
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="enrolledCourse"
              className="block text-sm font-medium text-gray-700"
            >
              Enrolled Course Name
            </label>
            <input
              type="text"
              name="enrolledCourse"
              id="enrolledCourse"
              value={formData.enrolledCourse}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          
            <label className="block text-sm font-medium text-gray-700">
              Type of Grievance
            </label>
            
             <div className="mt-2 space-y-2 gap-3 grid grid-cols-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Admission Related"
                  checked={formData.grievanceType.includes(
                    "Admission Related"
                  )}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">Admission Related</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Anti-ragging/Posh"
                  checked={formData.grievanceType.includes(
                    "Anti-ragging/Posh"
                  )}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">
                  Anti-ragging/Posh
                </span>
              </label>
              {/* Add more checkboxes for other grievance types */}
              {/* Course Related */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Course Related"
                  checked={formData.grievanceType.includes("Course Related")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">Course Related</span>
              </label>
              {/* Document Related */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Document Related"
                  checked={formData.grievanceType.includes("Document Related")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">Document Related</span>
              </label>
              {/* Examination Related */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Examination Related"
                  checked={formData.grievanceType.includes("Examination Related")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">Examination Related</span>
              </label>
              {/* Evaluation Related */}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="grievanceType"
                  value="Evaluation Related"
                  checked={formData.grievanceType.includes("Evaluation Related")}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2 text-gray-700">Evaluation Related</span>
              </label>
              {/* Add more checkboxes for other grievance types */}
            </div>
          
        
          <div>
            <label
              htmlFor="elaborateGrievance"
              className="block text-sm font-medium text-gray-700"
            >
              Elaborate your grievance
            </label>
            <textarea
              name="elaborateGrievance"
              id="elaborateGrievance"
              value={formData.elaborateGrievance}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrivenceForm;
