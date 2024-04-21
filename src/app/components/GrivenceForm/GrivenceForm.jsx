"use client";
// components/GrievanceForm.js
import React, { useState } from "react";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    enrolledCourse: "",
    phoneNo: "",
    emailAddress: "",
    grievanceType: [],
    elaborateGrievance: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear the corresponding error message when the user inputs something in a field
    setErrors({ ...errors, [name]: "" });
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
    // Validate form fields before submission
    const validationErrors = {};
    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Regex for 10-digit phone number
    const studentIdRegex = /^[a-zA-Z0-9]{12}$/;
    // Validate each field
    if (formData.studentName.trim() === "") {
      validationErrors.studentName = "Please enter student name.";
    }
    if (formData.studentId.trim() === "") {
      validationErrors.studentId = "Please enter student ID.";
    }else if (!studentIdRegex.test(formData.studentId.trim())) {
      validationErrors.studentId = "Student Enroll number must be 12 digits long.";
    }
    if (formData.enrolledCourse.trim() === "") {
      validationErrors.enrolledCourse = "Please enter enrolled course name.";
    }
    if (formData.phoneNo.trim() === "") {
      validationErrors.phoneNo = "Please enter phone number.";
    } else if (!phoneRegex.test(formData.phoneNo.trim())) {
      validationErrors.phoneNo = "Phone number must be 10 digits long.";
    }
    if (!emailRegex.test(formData.emailAddress.trim())) {
      validationErrors.emailAddress = "Please enter a valid email address.";
    }
    if (formData.grievanceType.length === 0) {
      validationErrors.grievanceType = "Please select at least one grievance type.";
    }
    if (formData.elaborateGrievance.trim() === "") {
      validationErrors.elaborateGrievance = "Please elaborate your grievance.";
    }
    
    // Update errors state with validation results
    setErrors(validationErrors);
    
    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
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
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 my-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="my-4 text-3xl font-bold text-center text-yellow-700">
        Grievance Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {/* Student Name */}
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
            {errors.studentName && (
              <p className="text-red-500">{errors.studentName}</p>
            )}
          </div>
          {/* Student ID No */}
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700"
            >
              Enrollment Number
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.studentId && (
              <p className="text-red-500">{errors.studentId}</p>
            )}
          </div>
          {/* Enrolled Course Name */}
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
            {errors.enrolledCourse && (
              <p className="text-red-500">{errors.enrolledCourse}</p>
            )}
          </div>
          {/* Phone No */}
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
            {errors.phoneNo && (
              <p className="text-red-500">{errors.phoneNo}</p>
            )}
          </div>
          {/* Email Address */}
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
            {errors.emailAddress && (
              <p className="text-red-500">{errors.emailAddress}</p>
            )}
          </div>
          {/* Type of Grievance */}
          <div>
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
          
            {errors.grievanceType && (
              <p className="text-red-500">{errors.grievanceType}</p>
            )}
          </div>
          {/* Elaborate your grievance */}
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
            {errors.elaborateGrievance && (
              <p className="text-red-500">{errors.elaborateGrievance}</p>
            )}
          </div>
        </div>
        {/* Submit Button */}
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

export default GrievanceForm;
