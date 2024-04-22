"use client";
import { ANTIRAGGING } from "@/lib/constants";
import { postAntiRagging } from "@/lib/services/Anti-Ragging/Anti-Ragging";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const AntiRaggingForm = () => {
  const [formData, setFormData] = useState(ANTIRAGGING);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message if the field is not empty
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleWitnessChange = (e) => {
    const { value, checked } = e.target;
    let updatedWitnesses = [...formData.witnesses]; // Corrected from formData.witness
  
    if (checked) {
      updatedWitnesses.push(value);
    } else {
      updatedWitnesses = updatedWitnesses.filter(
        (witness) => witness !== value
      );
    }
  
    setFormData({ ...formData, witnesses: updatedWitnesses }); // Corrected from formData.witness
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields before submission
    const validationErrors = {};
    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const studentIdRegex = /^[a-zA-Z0-9]{12}$/;

    // Validate each field
    if (formData.name.trim() === "") {
      validationErrors.name = "Please enter student name.";
    }
    if (formData.enrollmentUuid.trim() === "") {
      validationErrors.enrollmentUuid = "Please enter student ID.";
    } else if (!studentIdRegex.test(formData.enrollmentUuid.trim())) {
      validationErrors.enrollmentUuid = "Student Enroll number must be 12 digits long.";
    }
    if (formData.courseName.trim() === "") {
      validationErrors.courseName = "Please enter enrolled course name.";
    }
    if (formData.parentPhone.trim() === "") {
      validationErrors.parentPhone = "Please enter parent's phone number.";
    } else if (!phoneRegex.test(formData.parentPhone.trim())) {
      validationErrors.parentPhone = "Phone number must be 10 digits long.";
    }
    if (!emailRegex.test(formData.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (formData.incidentDetails.trim() === "") {
      validationErrors.incidentDetails = "Please provide incident details.";
    }
    if (formData.collegeName.trim() === "") {
      validationErrors.collegeName = "Please enter college name.";
    }
    // Add validation for other fields

    // Update errors state with validation results
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make API call using the client hook
        const res = await postAntiRagging(formData);
        console.log(res);
        // Reset the form after successful submission
        setFormData(initialFormData);
      } catch (error) {
        console.error("Error submitting anti-ragging form:", error);
      }
    }
  };

  
  return (

    <div className="w-10/12 mx-auto mt-10 p-8 my-10 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="my-4 text-3xl font-bold text-center text-red-700">
      Anti-Ragging Form
    </h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Student Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="enrollmentUuid" className="block text-sm font-medium text-gray-700">
            Enrollment Number
          </label>
          <input
            type="text"
            name="enrollmentUuid"
            id="enrollmentUuid"
            value={formData.enrollmentUuid}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.enrollmentUuid && (
            <p className="text-red-500">{errors.enrollmentUuid}</p>
          )}
        </div>
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            name="courseName"
            id="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.courseName && (
            <p className="text-red-500">{errors.courseName}</p>
          )}
        </div>
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
            Parent's Name
          </label>
          <input
            type="text"
            name="parentName"
            id="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.parentName && (
            <p className="text-red-500">{errors.parentName}</p>
          )}
        </div>
        <div>
          <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
            Parent's Email
          </label>
          <input
            type="email"
            name="parentEmail"
            id="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.parentEmail && (
            <p className="text-red-500">{errors.parentEmail}</p>
          )}
        </div>

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
            Parent's Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
            Parent's Phone
          </label>
          <input
            type="text"
            name="parentPhone"
            id="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
          />
          {errors.parentPhone && (
            <p className="text-red-500">{errors.parentPhone}</p>
          )}
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
          <label htmlFor="incidentDetails" className="block text-sm font-medium text-gray-700">
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
          {errors.incidentDetails && (
            <p className="text-red-500">{errors.incidentDetails}</p>
          )}
        </div>
        <div>
          <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
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
          {errors.collegeName && (
            <p className="text-red-500">{errors.collegeName}</p>
          )}
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
