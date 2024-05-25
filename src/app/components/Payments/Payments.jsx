'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    course: '',
    year: '',
    semester: '',
    amount: '',
    paymentMethod: '' // New state for payment method
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /\S+/;
    const numberRegex = /^[0-9]+$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name is required';
    }
    if (!nameRegex.test(formData.fathersName)) {
      newErrors.fathersName = 'Father\'s Name is required';
    }
    if (!nameRegex.test(formData.course)) {
      newErrors.course = 'Course is required';
    }
    if (!numberRegex.test(formData.year)) {
      newErrors.year = 'Year must be a number';
    }
    if (!numberRegex.test(formData.semester)) {
      newErrors.semester = 'Semester must be a number';
    }
    if (!numberRegex.test(formData.amount)) {
      newErrors.amount = 'Amount must be a number';
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const queryParams = `?collegeName=${formData.collegeName}`;
      if (formData.paymentMethod === 'upi') {
        router.push(`/UPIComponent${queryParams}`);
      } else if (formData.paymentMethod === 'bank') {
        router.push(`/NetBankingComponent${queryParams}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} border-2 rounded mt-1`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fathers Name</label>
            <input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.fathersName ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
            />
            {errors.fathersName && <p className="text-red-500 text-sm">{errors.fathersName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
            />
            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.year ? 'border-red-500' : 'border-gray-300'} border-2 rounded mt-1`}
            >
              <option value="">Select Year</option>
              {Array.from({ length: 10 }, (_, i) => 2015 + i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.semester ? 'border-red-500' : 'border-gray-300'} border-2 rounded mt-1`}
            >
              <option value="">Select Semester</option>
              {Array.from({ length: 8 }, (_, i) => i + 1).map(sem => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
            {errors.semester && <p className="text-red-500 text-sm">{errors.semester}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.amount ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="upi"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="upi" className="mr-4">UPI</label>
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="bank">Bank Account</label>
            </div>
            {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
          </div>
          <div className="col-span-2 mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
