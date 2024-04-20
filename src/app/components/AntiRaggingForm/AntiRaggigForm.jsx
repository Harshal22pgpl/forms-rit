"use client";
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
   
    
   
    parentName: "",
   
    parentPhone: "",
   
    parentEmail: "",
  
   
  });

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
    // Validate form fields before submission
    const validationErrors = {};
    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
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
    if (formData.motherName.trim() === "") {
      validationErrors.motherName = "Please enter mother's name.";
    }
    if (formData.fatherName.trim() === "") {
      validationErrors.fatherName = "Please enter father's name.";
    }
    if (formData.motherPhone.trim() === "") {
      validationErrors.motherPhone = "Please enter mother's phone number.";
    } else if (!phoneRegex.test(formData.motherPhone.trim())) {
      validationErrors.motherPhone = "Phone number must be 10 digits long.";
    }
    if (formData.fatherPhone.trim() === "") {
      validationErrors.fatherPhone = "Please enter father's phone number.";
    } else if (!phoneRegex.test(formData.fatherPhone.trim())) {
      validationErrors.fatherPhone = "Phone number must be 10 digits long.";
    }
    if (!emailRegex.test(formData.motherEmail.trim())) {
      validationErrors.motherEmail = "Please enter a valid email address for mother.";
    }
    if (!emailRegex.test(formData.fatherEmail.trim())) {
      validationErrors.fatherEmail = "Please enter a valid email address for father.";
    }
    if (formData.collegeName.trim() === "") {
      validationErrors.collegeName = "Please enter college name.";
    }
    if (formData.collegeAddress.trim() === "") {
      validationErrors.collegeAddress = "Please enter college address.";
    }
    if (formData.incidentDetails.trim() === "") {
      validationErrors.incidentDetails = "Please provide incident details.";
    }
    // Add validation for other fields
  
    // Update errors state with validation results
    setErrors(validationErrors);
  
    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Reset the form after submission
      setFormData({ ...initialFormData });
    }
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
              {errors.studentName && (
              <p className="text-red-500">{errors.studentName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700"
            >
             Erollment No
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
               {errors.studentId && (
              <p className="text-red-500">{errors.studentId}</p>
            )}
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
               {errors.enrolledCourse && (
              <p className="text-red-500">{errors.enrolledCourse}</p>
            )}
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
               {errors.phoneNo && (
              <p className="text-red-500">{errors.phoneNo}</p>
            )}
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
               {errors.emailAddress && (
              <p className="text-red-500">{errors.emailAddress}</p>
            )}
          </div>

        
          <div>
            <label
              htmlFor="fatherName"
              className="block text-sm font-medium text-gray-700"
            >
              Parent&apos;s Name
            </label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
               {errors.fatherName && (
              <p className="text-red-500">{errors.fatherName}</p>
            )}
          </div>
         
          <div>
            <label
              htmlFor="fatherPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Parent&apos;s Phone
            </label>
            <input
              type="text"
              name="fatherPhone"
              id="fatherPhone"
              value={formData.fatherPhone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
               {errors.fatherPhone && (
              <p className="text-red-500">{errors.fatherPhone}</p>
            )}
          </div>
         
          <div>
            <label
              htmlFor="fatherEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Parent&apos;s Email
            </label>
            <input
              type="email"
              name="fatherEmail"
              id="fatherEmail"
              value={formData.fatherEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
               {errors.fatherEmail && (
              <p className="text-red-500">{errors.fatherEmail}</p>
            )}
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
               {errors.incidentDetails && (
              <p className="text-red-500">{errors.incidentDetails}</p>
            )}
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
