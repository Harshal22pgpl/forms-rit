"use client";
// components/AntiRaggingForm.js

import React, { useState } from "react";

const AntiRaggingForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    enrolledCourse: "",
    phoneNo: "",
    emailAddress: "",
    incidentDetails: "",
    witnesses: [],
    perpetratorName: "",
    actionsTaken: "",
    motherName: "",
    fatherName: "",
    motherPhone: "",
    fatherPhone: "",
    motherEmail: "",
    fatherEmail: "",
    collegeName: "",
    collegeAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWitnessChange = (e) => {
    const { value, checked } = e.target;
    let updatedWitnesses = [...formData.witnesses];

    if (checked) {
      updatedWitnesses.push(value);
    } else {
      updatedWitnesses = updatedWitnesses.filter(
        (witness) => witness !== value
      );
    }

    setFormData({ ...formData, witnesses: updatedWitnesses });
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
      incidentDetails: "",
      witnesses: [],
      perpetratorName: "",
      actionsTaken: "",
      motherName: "",
      fatherName: "",
      motherPhone: "",
      fatherPhone: "",
      motherEmail: "",
      fatherEmail: "",
      collegeName: "",
      collegeAddress: "",
    });
  };

  return (
    <div className=" w-10/12 mx-auto mt-10 p-8 my-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="my-4 text-3xl font-bold text-center text-red-700">
        Anti-Ragging Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="motherName"
              className="block text-sm font-medium text-gray-700"
            >
              Mother&apos;s Name
            </label>
            <input
              type="text"
              name="motherName"
              id="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="fatherName"
              className="block text-sm font-medium text-gray-700"
            >
              Father&apos;s Name
            </label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="motherPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Mother&apos;s Phone
            </label>
            <input
              type="text"
              name="motherPhone"
              id="motherPhone"
              value={formData.motherPhone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="fatherPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Father&apos;s Phone
            </label>
            <input
              type="text"
              name="fatherPhone"
              id="fatherPhone"
              value={formData.fatherPhone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="motherEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Mother&apos;s Email
            </label>
            <input
              type="email"
              name="motherEmail"
              id="motherEmail"
              value={formData.motherEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="fatherEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Father&apos;s Email
            </label>
            <input
              type="email"
              name="fatherEmail"
              id="fatherEmail"
              value={formData.fatherEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="collegeName"
              className="block text-sm font-medium text-gray-700"
            >
              College Name
            </label>
            <input
              type="text"
              name="collegeName"
              id="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="collegeAddress"
              className="block text-sm font-medium text-gray-700"
            >
              College Address
            </label>
            <textarea
              name="collegeAddress"
              id="collegeAddress"
              value={formData.collegeAddress}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="incidentDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Incident Details
            </label>
            <textarea
              name="incidentDetails"
              id="incidentDetails"
              value={formData.incidentDetails}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            ></textarea>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Witnesses
          </label>
          <div className="mt-2 space-y-2 grid grid-cols-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Classmate"
                checked={formData.witnesses.includes("Classmate")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Classmate</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Teacher"
                checked={formData.witnesses.includes("Teacher")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Teacher</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Neighbor"
                checked={formData.witnesses.includes("Neighbor")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Neighbor</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Security Guard"
                checked={formData.witnesses.includes("Security Guard")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Security Guard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Staff Member"
                checked={formData.witnesses.includes("Staff Member")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Staff Member</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Roommate"
                checked={formData.witnesses.includes("Roommate")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Roommate</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="witnesses"
                value="Senior Student"
                checked={formData.witnesses.includes("Senior Student")}
                onChange={handleWitnessChange}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="ml-2 text-gray-700">Senior Student</span>
            </label>
            {/* Add more witness options */}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AntiRaggingForm;
