"use client";
import React, { useState } from "react";

const FeedStu = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    gender: "",
    adhaarNumber: "",
    mobileNumber: "",
    email: "",
    department: "",
    semester: "",
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
      studentId: "",
      name: "",
      gender: "",
      adhaarNumber: "",
      mobileNumber: "",
      email: "",
      department: "",
      semester: "",
      feedback: "", // Reset feedback field after submission
    });
  };

  return (
    <div className=" w-9/12  mx-auto mt-10   p-4 my-10">
      <h1 className="my-4 text-3xl font-bold ">Student Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className=" p-3">
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700"
            >
              Student ID
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
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
              className="mt-1 block  outline-none border-b-2 border-black w-full pl-3 pr-10 py-2 text-base  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className=" p-3">
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
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
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
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
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
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department (Branch)
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
          <div className=" p-3">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700"
            >
              Semester
            </label>
            <input
              type="text"
              name="semester"
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              className="mt-1 block  outline-none border-b-2 border-black w-full rounded-md  shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
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
            className="mt-1 block w-full outline-none border-b-2 border-black rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedStu;
