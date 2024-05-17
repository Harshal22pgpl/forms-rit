"use client";
import { ANTIRAGGING } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import { postAntiRagging } from "@/lib/services/Anti-Ragging/Anti-Ragging";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Loader from "@/app/components/Loader/Loader";
import SuccessModal from "@/app/components/SuccessModal";

const AntiRaggingForm = () => {
  const [formData, setFormData] = useState(ANTIRAGGING);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collegeName = params.get("college");

    // If collegeName exists in query parameter, set it in studentData
    if (collegeName) {
      // Convert collegeName to uppercase before setting it in the state
      setFormData({ ...ANTIRAGGING, collegeName: collegeName.toUpperCase() });
    }

    setIsLoading(false);
  }, []);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

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
    let updatedWitness = [...formData.witness]; // Corrected from formData.witness

    if (checked) {
      updatedWitness.push(value);
    } else {
      updatedWitness = updatedWitness.filter(
        (witness) => witness !== value
      );
    }

    setFormData({ ...formData, witness: updatedWitness }); // Corrected from formData.witness
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    setIsLoading(true)
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
      validationErrors.parentPhone = "Please enter parent&apos;s phone number.";
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
        setFormData(ANTIRAGGING);
        setIsLoading(false)
        setShowSuccessModal(true);

      } catch (error) {
        console.error("Error submitting anti-ragging form:", error);
        setIsLoading(false)
      }
    }
  };

  return (

    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-10/12 mx-auto mt-10 p-8 my-10 bg-gray-100 rounded-lg shadow-lg">
            <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} /> {/* Render the SuccessModal component */}
            <h1 className="my-4 text-3xl font-bold text-center text-red-700">
              Anti-Ragging Form
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                {isSubmitting && (
                  <div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">

                    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                      <svg aria-hidden="true" class="w-[100px] h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>

                )}
              </div>
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
                    Parent&apos;s Name
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
                    Parent&apos;s Email
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
                    Parent&apos;s Mobile Number
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
                  <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
              Student Mobile Number
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
                  <label className="block text-sm font-medium text-gray-700">
                    Witness
                  </label>
                  <div className="mt-2 space-y-2 grid grid-cols-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Classmate"
                        checked={formData.witness.includes("Classmate")}
                        onChange={handleWitnessChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 text-gray-700">Classmate</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Teacher"
                        checked={formData.witness.includes("Teacher")}
                        onChange={handleWitnessChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 text-gray-700">Teacher</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Security Guard"
                        checked={formData.witness.includes("Security Guard")}
                        onChange={handleWitnessChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 text-gray-700">Security Guard</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Staff Member"
                        checked={formData.witness.includes("Staff Member")}
                        onChange={handleWitnessChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 text-gray-700">Staff Member</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Roommate"
                        checked={formData.witness.includes("Roommate")}
                        onChange={handleWitnessChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 text-gray-700">Roommate</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="witness"
                        value="Senior Student"
                        checked={formData.witness.includes("Senior Student")}
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
        </>
      )}
    </>
  );
};

export default AntiRaggingForm;
