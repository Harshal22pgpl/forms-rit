"use client"
import React, { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/helpers/scrollToTop";
import { postStudent } from "@/lib/services/studentFeedback/studentFeedback";
import SuccessModal from "@/app/components/SuccessModal";
import { STUDENT } from "@/lib/constants";
import Loader from "@/app/components/Loader/Loader";

const FeedStu = () => {

  const [studentData, setStudentData] = useState(STUDENT);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collegeName = params.get("college");

    // If collegeName exists in query parameter, set it in studentData
    if (collegeName) {
      // Convert collegeName to uppercase before setting it in the state
      setStudentData({ ...STUDENT, collegeName: collegeName.toUpperCase() });
    }

    setIsLoading(false);
  }, []);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };


  const handleChange = (e) => {
    setError({ msg: "", type: "" });
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Validate form fields before submission
    const validationErrors = {};
    // Define regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    
    // Validate each field
    if (studentData.enrollmentUuid.trim() === "") {
      validationErrors.enrollmentUuid = "Please enter enrollment UUID.";
    }
    if (studentData.name.trim() === "") {
      validationErrors.name = "Please enter student name.";
    }
    if (studentData.gender.trim() === "") {
      validationErrors.gender = "Please select gender.";
    }
    if (studentData.phone.trim() === "") {
      validationErrors.phone = "Please enter phone number.";
    } else if (!phoneRegex.test(studentData.phone.trim())) {
      validationErrors.phone = "Phone number must be 10 digits long.";
    }
    if (!emailRegex.test(studentData.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (studentData.department.trim() === "") {
      validationErrors.department = "Please enter department.";
    }
    if (studentData.semester.trim() === "") {
      validationErrors.semester = "Please enter semester.";
    }
    if (studentData.feedback.trim() === "") {
      validationErrors.feedback = "Please provide feedback.";
    }
    if (studentData.collegeName.trim() === "") {
      validationErrors.collegeName = "Please enter college name.";
    }
    
    // Update errors state with validation results
    setErrors(validationErrors);
    
    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Implement the postStudent function to post student data to the server
        const res = await postStudent(studentData);
        if (res) {
         
          setStudentData(STUDENT);
          setIsLoading(false);
          setShowSuccessModal(true);; // Reset the form after successful submission
          scrollToTop();
        }
      } catch (error) {
        setIsLoading(false);
        // Handle error appropriately
      }
    } else {
      scrollToTop();
      setError({ msg: "Please fix the errors in the form.", type: "error" });
    }
  };
  const handleCloseModal = () => {
    setIsSuccessModalOpen(false); // Close modal
  };


  return (

    <>
    {isLoading ? (
      <Loader />
    ) : (
      <>
    <div className="w-9/12 mx-auto mt-10 p-4 my-10">
    <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} /> {/* Render the SuccessModal component */}
      <h1 className="my-4 text-3xl font-bold">Student Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Enrollment UUID */}
          <div className="p-3">
            <label
              htmlFor="enrollmentUuid"
              className="block text-sm font-medium text-gray-700"
            >

              Enrollment UUID

            </label>
            <input
              type="text"
              name="enrollmentUuid"
              id="enrollmentUuid"
              value={studentData.enrollmentUuid}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.enrollmentUuid && (
              <p className="text-red-500">{errors.enrollmentUuid}</p>
            )}
          </div>
          {/* Name */}
          <div className="p-3">
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
              value={studentData.name}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name}</p>
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
              value={studentData.gender}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
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

          {/* Phone */}
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
              value={studentData.phone}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone}</p>
            )}
          </div>
          {/* Email */}
          <div className="p-3">

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={studentData.email}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Department */}
          <div className="p-3">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={studentData.department}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.department && (
              <p className="text-red-500">{errors.department}</p>
            )}
          </div>
          {/* Semester */}
          <div className="p-3">
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
              value={studentData.semester}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.semester && (
              <p className="text-red-500">{errors.semester}</p>
            )}
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
              value={studentData.feedback}
              onChange={handleChange}
              className="mt-1 block w-full outline-none border-b-2 border-black rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              rows="4"
            ></textarea>
              {errors.feedback && (
                <p className="text-red-500">{errors.feedback}</p>
              )}
          </div>
          {/* College Name */}
          <div className="p-3">
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
              value={studentData.collegeName}
              onChange={handleChange}
              className="mt-1 block outline-none border-b-2 border-black w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
            {errors.collegeName && (
              <p className="text-red-500">{errors.collegeName}</p>
            )}
          </div>
        </div>
        <div className="p-3">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onSubmit={handleSubmit}
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

export default FeedStu
