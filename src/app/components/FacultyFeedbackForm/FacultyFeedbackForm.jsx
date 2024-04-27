'use client'
import React, { useState } from "react";
import { postFaculty } from "@/lib/services/facultyFeedback/facultyFeedback";
import { FACULTY } from "@/lib/constants/index";
import SuccessModal from "@/app/components/SuccessModal";
import Loader from "@/app/components/Loader/Loader";
const FacultyFeedbackForm = () => {

  const [formData, setFormData] = useState(FACULTY)
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the corresponding error message when the user inputs something in a field
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // Validate form fields before submission
    const validationErrors = {};
    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const aadharNumberRegex = /^[a-zA-Z0-9]{12}$/; // Regex for Aadhar Number
    
    // Validate each field
   // Validate each field
if (formData.facultyUuid.trim() === "") {
  validationErrors.facultyUuid = "Please enter faculty ID.";
}
if (formData.name.trim() === "") {
  validationErrors.name = "Please enter faculty name.";
}
if (formData.gender.trim() === "") {
  validationErrors.gender = "Please select gender.";
}
if (formData.aadharNumber && formData.aadharNumber.trim() === "") { // Check if formData.aadharNumber exists before calling trim
  validationErrors.aadharNumber = "Please enter Aadhar number.";
} else if (formData.aadharNumber && !aadharNumberRegex.test(formData.aadharNumber.trim())) { // Check if formData.aadharNumber exists before calling trim
  validationErrors.aadharNumber = "Aadhar number must be 12 characters long and alphanumeric.";
}
if (formData.phone.trim() === "") {
  validationErrors.phone = "Please enter mobile number.";
} else if (!phoneRegex.test(formData.phone.trim())) {
  validationErrors.phone = "Mobile number must be 10 digits long.";
}
if (!emailRegex.test(formData.email.trim())) {
  validationErrors.email = "Please enter a valid email address.";
}
if (formData.qualification.trim() === "") {
  validationErrors.qualification = "Please select qualification.";
}
if (formData.typeOfEmployment.trim() === "") {
  validationErrors.typeOfEmployment = "Please select employment type.";
}
if (formData.feedback.trim() === "") {
  validationErrors.feedback = "Please provide feedback.";
}

    
    // Update errors state with validation results
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call API to post faculty feedback
        const res = await postFaculty(formData);
        console.log(res); // Handle API response as needed

        // Reset the form after submission
        setFormData(FACULTY);
        setIsLoading(false) 
        setShowSuccessModal(true);// Reset form data to initial state
      } catch (error) {
        console.error("Error posting faculty feedback:", error);
        // Handle error appropriately
        setIsLoading(false)
      }
    }
  
    // If there are no validation errors, submit the form
  }

  return (

    <>
    {isLoading ? (
      <Loader />
    ) : (
      <>
    <div className="w-9/12 mx-auto mt-10 p-4 my-10">
        <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} /> {/* Render the SuccessModal component */}
      <h1 className="my-4 text-3xl font-bold">Faculty Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">

          {/* Faculty UUID */}
        
          {/* Faculty Name */}

          <div className="p-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Faculty Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="p-3">
            <label
              htmlFor="facultyUuid"
              className="block text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <input
              type="text"
              name="facultyDesignation"
              id="facultyDesignation"
              value={formData.facultyDesignation}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.facultyUuid && (
              <p className="text-red-500">{errors.facultyUuid}</p>
            )}
          </div>
          {/* Gender */}
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
            {errors.gender && (
              <p className="text-red-500">{errors.gender}</p>
            )}
          </div>

          {/* Aadhar Number */}
         
          {/* Mobile Number */}

          <div className="p-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone}</p>
            )}
          </div>
          {/* Email Address */}
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
            {errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Qualification */}
         
          {/* Employment Type */}
          <div className="p-3">
            <label
              htmlFor="name"
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
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.collegeName && (
              <p className="text-red-500">{errors.collegeName}</p>
            )}
          </div>
          
        </div>
        {/* Feedback */}
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
          {errors.feedback && (
            <p className="text-red-500">{errors.feedback}</p>
          )}
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
    </>
    )}
    </>
  );
};

export default FacultyFeedbackForm;
