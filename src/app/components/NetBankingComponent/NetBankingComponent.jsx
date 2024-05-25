// components/NetBankingComponent.js
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
const NetBankingComponent = () => {


  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [formData, setFormData] = useState({
    enrollmentNumber: '',
    fullName: '',
    fatherName: '',
    courseName: '',
    year: '',
    semester: '',
    transactionId: '',
    transactionProof: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const regexNotEmpty = /\S+/; // Regex for non-empty input

    if (!regexNotEmpty.test(formData.enrollmentNumber)) {
      newErrors.enrollmentNumber = 'Enrollment Number is required';
    }
    if (!regexNotEmpty.test(formData.fullName)) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!regexNotEmpty.test(formData.fatherName)) {
      newErrors.fatherName = "Father's Name is required";
    }
    if (!regexNotEmpty.test(formData.courseName)) {
      newErrors.courseName = 'Course Name is required';
    }
    if (!regexNotEmpty.test(formData.year)) {
      newErrors.year = 'Year is required';
    }
    if (!regexNotEmpty.test(formData.semester)) {
      newErrors.semester = 'Semester is required';
    }
    if (!regexNotEmpty.test(formData.transactionId)) {
      newErrors.transactionId = 'Transaction ID is required';
    }
    if (!formData.transactionProof) {
      newErrors.transactionProof = 'Transaction Proof URL is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here, e.g., send data to server
      console.log('Form data:', formData);
    }
  };

  const dummyAccountNumber = '656905601726';
  const dummyIFSC = 'ICIC0004204';
  const dummyLogo = '/logo1.png'; // Replace with an actual path to the logo image

  return (
    <div className="flex flex-col md:flex-row justify-center">
    {/* Payment Form */}
   
<div className="min-h-screen flex justify-center bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Enrollment Number</label>
              <input
                type="text"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.enrollmentNumber ? 'border-red-500' : 'border-gray-300'} border-2 rounded mt-1`}
              />
              {errors.enrollmentNumber && <p className="text-red-500 text-sm">{errors.enrollmentNumber}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} border-2 rounded mt-1`}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.courseName ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.courseName && <p className="text-red-500 text-sm">{errors.courseName}</p>}
            </div>
          </div>
          
          {/* Second Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Year</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.year ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Semester</label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.semester ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.semester && <p className="text-red-500 text-sm">{errors.semester}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Transaction ID</label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.transactionId ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.transactionId && <p className="text-red-500 text-sm">{errors.transactionId}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Transaction Proof (Image)</label>
              <input
                type="file"
                accept="image/*"
                name="transactionProof"
                onChange={handleChange}
                className={`w-full p-2 border ${errors.transactionProof ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
              />
              {errors.transactionProof && <p className="text-red-500 text-sm">{errors.transactionProof}</p>}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    {/* Bank Account Details */}
    <div className="bg-white p-14 rounded-lg shadow-lg max-w-md mx-4 md:mx-8 mt-8 md:mt-0 border-2">
      <h3 className="text-xl font-bold mb-4">Pay via Bank Account</h3>
      <img src={dummyLogo} alt="College Logo" className="mx-auto mb-4" />
      <p className="text-center mb-4 text-2xl p-6">Account Number: {dummyAccountNumber}</p>
      <p className="text-center mb-4 text-2xl">IFSC Code: {dummyIFSC}</p>
      <p className="text-red-500 mb-4">Note: Mail your payment screenshot to the given email address.</p>
    </div>
  </div>
  );
};

export default NetBankingComponent;
