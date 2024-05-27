'use client'
import React, { useState, useEffect } from 'react';
import UPIComponent from '@/app/components/UPIComponent/UPIComponent';
import NetBankingComponent from '@/app/components/NetBankingComponent/NetBankingComponent';
import { useRouter } from 'next/navigation';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    course: '',
    year: '',
    semester: '',
    amount: '',
    paymentMethod: ''
  });

  const [errors, setErrors] = useState({});
  const [collegeName, setCollegeName] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const college = params.get('college');
    if (college) {
      setCollegeName(college.toLowerCase()); // Set collegeName from URL params and convert to lowercase
    }
  }, []);

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
      newErrors.fathersName = "Father's Name is required";
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
      setShowComponent(true);
    }
  };

  if (showComponent) {
    if (formData.paymentMethod === 'upi') {
      return <UPIComponent collegeName={collegeName} />;
    } else if (formData.paymentMethod === 'bank') {
      return <NetBankingComponent collegeName={collegeName} />;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Form</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Fathers Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.fathersName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
              />
              {errors.fathersName && <p className="text-red-500 text-xs italic">{errors.fathersName}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-course">
                Course
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.course ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="grid-course"
                type="text"
                placeholder="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
              {errors.course && <p className="text-red-500 text-xs italic">{errors.course}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-year">
                Year
              </label>
              <select
                className={`block appearance-none w-full bg-gray-200 border ${errors.year ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                id="grid-year"
                name="year"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year, index) => (
                  <option key={index + 1} value={index + 1}>{year}</option>
                ))}
              </select>
              {errors.year && <p className="text-red-500 text-xs italic">{errors.year}</p>}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-semester">
                Semester
              </label>
              <select
                className={`block appearance-none w-full bg-gray-200 border ${errors.semester ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                id="grid-semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                {Array.from({ length: 8 }, (_, i) => i + 1).map(sem => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
              {errors.semester && <p className="text-red-500 text-xs italic">{errors.semester}</p>}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-amount">
                Amount
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.amount ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                id="grid-amount"
                type="number"
                placeholder="Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
              {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-payment-method">
                Payment Method
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  id="upi"
                  name="paymentMethod"
                  value="upi"
                  onChange={handleChange}
                />
                {/* <label htmlFor="upi" className="mr-4">UPI</label> */}
                <label htmlFor="upi" type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">UPI Payment</label>
                <input
                  className="mr-2"
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  onChange={handleChange}
                />
                {/* <label htmlFor="bank" cla>Bank Account</label> */}
                <label  htmlFor="bank" type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bank Account</label>

              </div>
              {errors.paymentMethod && <p className="text-red-500 text-xs italic">{errors.paymentMethod}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 mx-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
