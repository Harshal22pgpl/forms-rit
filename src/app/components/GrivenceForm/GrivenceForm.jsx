'use client'
import React, { useState } from "react";
import { GRIEVENCE } from "@/lib/constants";
import { postGrievence } from "@/lib/services/grievence/grievence";

const GrievanceForm = () => {
  const [formData, setFormData] = useState(GRIEVENCE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedtypeOfGrievence = [...formData.typeOfGrievence];

    if (checked) {
      updatedtypeOfGrievence.push(value);
    } else {
      updatedtypeOfGrievence = updatedtypeOfGrievence.filter(
        (type) => type !== value
      );
    }

    setFormData({ ...formData, typeOfGrievence: updatedtypeOfGrievence });
    setErrors({ ...errors, typeOfGrievence: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const validationErrors = {};
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const enrollmentUuidRegex = /^[a-zA-Z0-9]{12}$/;
   
    if (formData.name.trim() === "") {
      validationErrors.name = "Please enter student name.";
    }
    if (formData.enrollmentUuid.trim() === "") {
      validationErrors. enrollmentUuid = "Please enter student ID.";
    }else if (!enrollmentUuidRegex.test(formData.enrollmentUuid.trim())) {
      validationErrors.enrollmentUuid = "Student Enroll number must be 12 digits long.";
    }
    if (formData.semester.trim() === "") {
      validationErrors.semester = "Please enter semester.";
    }
    if (formData.phone.trim() === "") {
      validationErrors.phone = "Please enter phone number.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      validationErrors.phone = "Phone number must be 10 digits long.";
    }
    if (!emailRegex.test(formData.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (formData.typeOfGrievence.length === 0) {
      validationErrors.typeOfGrievence = "Please select at least one GRIEVENCE type.";
    }
    if (formData.description.trim() === "") {
      validationErrors.description = "Please elaborate your GRIEVENCE.";
    }
    
  
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
       
        const res = await postGrievence(formData);
        console.log(res); 

       
        setFormData(GRIEVENCE); 
      } catch (error) {
        console.error("Error posting faculty feedback:", error);
    
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 my-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="my-4 text-3xl font-bold text-center text-yellow-700">
        GRIEVENCE Form
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
              htmlFor="enrollmentUuid"
              className="block text-sm font-medium text-gray-700"
            >
              Enrollment Number
            </label>
            <input
              type="text"
              name="enrollmentUuid"
              id="enrollmentUuid"
              value={formData.enrollmentUuid}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.enrollmentUuid && (
              <p className="text-red-500">{errors.enrollmentUuid}</p>
            )}
          </div>
          {/* Enrolled Course Name */}
          <div>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.semester && (
              <p className="text-red-500">{errors.semester}</p>
            )}
          </div>
          {/* Phone No */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone}</p>
            )}
          </div>
          {/* Email Address */}
          <div>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Type of GRIEVENCE */}
         
<div>
  <label className="block text-sm font-medium text-gray-700">
    Type of GRIEVENCE
  </label>
  <div className="mt-2 space-y-2 gap-3 grid grid-cols-2">
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name="typeOfGrievence"
        value="Admission Related"
        checked={formData.typeOfGrievence.includes(
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
        name="typeOfGrievence"
        value="Anti-ragging/Posh"
        checked={formData.typeOfGrievence.includes(
          "Anti-ragging/Posh"
        )}
        onChange={handleCheckboxChange} 
        className="form-checkbox h-5 w-5 text-yellow-600"
      />
      <span className="ml-2 text-gray-700">
        Anti-ragging/Posh
      </span>
    </label>
    {/* Add more checkboxes for other GRIEVENCE types */}
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name="typeOfGrievence"
        value="Course Related"
        checked={formData.typeOfGrievence.includes("Course Related")}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-yellow-600"
      />
      <span className="ml-2 text-gray-700">Course Related</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name="typeOfGrievence"
        value="Document Related"
        checked={formData.typeOfGrievence.includes("Document Related")}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-yellow-600"
      />
      <span className="ml-2 text-gray-700">Document Related</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name="typeOfGrievence"
        value="Examination Related"
        checked={formData.typeOfGrievence.includes("Examination Related")}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-yellow-600"
      />
      <span className="ml-2 text-gray-700">Examination Related</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name="typeOfGrievence"
        value="Evaluation Related"
        checked={formData.typeOfGrievence.includes("Evaluation Related")}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-yellow-600"
      />
      <span className="ml-2 text-gray-700">Evaluation Related</span>
    </label>
    {/* Add more checkboxes for other GRIEVENCE types */}
  </div>
  {errors.typeOfGrievence && (
    <p className="text-red-500">{errors.typeOfGrievence}</p>
  )}
</div>

          {/* Elaborate your GRIEVENCE */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Elaborate your GRIEVENCE
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          {/* College Name */}
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.collegeName && (
              <p className="text-red-500">{errors.collegeName}</p>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrievanceForm;
