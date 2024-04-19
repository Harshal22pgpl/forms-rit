"use client";
// components/FacultyFeedbackForm.js
import React, { useState } from "react";

const FacultyFeedbackForm = () => {
  const [formData, setFormData] = useState({
    facultyId: "",
    facultyName: "",
    gender: "",
    adhaarNumber: "",
    mobileNumber: "",
    email: "",
    qualification: "",
    employmentType: "",
    feedback: "", // Add feedback field to the form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data
    console.log(formData);
    // Reset the form after submission
    setFormData({
      facultyId: "",
      facultyName: "",
      gender: "",
      adhaarNumber: "",
      mobileNumber: "",
      email: "",
      qualification: "",
      employmentType: "",
      feedback: "", // Reset feedback field after submission
    });
  };

  return (
    <div className="w-9/12 mx-auto mt-10 p-4 my-10">
      <h1 className="my-4 text-3xl font-bold">Faculty Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3">
            <label
              htmlFor="facultyId"
              className="block text-sm font-medium text-gray-700"
            >
              Faculty ID
            </label>
            <input
              type="text"
              name="facultyId"
              id="facultyId"
              value={formData.facultyId}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="p-3">
            <label
              htmlFor="facultyName"
              className="block text-sm font-medium text-gray-700"
            >
              Faculty Name
            </label>
            <input
              type="text"
              name="facultyName"
              id="facultyName"
              value={formData.facultyName}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="p-3">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="p-3">
            <label
              htmlFor="adhaarNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Aadhar Number
            </label>
            <input
              type="text"
              name="adhaarNumber"
              id="adhaarNumber"
              value={formData.adhaarNumber}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="p-3">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="p-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="p-3">
            <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-700"
            >
              Qualification
            </label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">Select Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mtech">M.Tech</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="p-3">
            <label
              htmlFor="employmentType"
              className="block text-sm font-medium text-gray-700"
            >
              Type of Employment
            </label>
            <select
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">Select Employment Type</option>
              <option value="regular">Regular</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>
        <div className="p-3">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="mt-1 block w-full outline-none border-b-2 border-black rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyFeedbackForm;
