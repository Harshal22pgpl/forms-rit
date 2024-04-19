import React from 'react'
import FeedStu from './components/FeedStu/FeedStu'
import FacultyFeedbackForm from './components/FacultyFeedbackForm/FacultyFeedbackForm'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex justify-between  p-10'>
      <Link className='text-red-500 font-bold hover:text-blue-400' href="/student_feedback">
      Student Feedback
      </Link>
      <Link className='text-red-500 font-bold hover:text-blue-400' href="/faculty_feedback">
      Faculty Feedback
      </Link>
      <Link className='text-red-500 font-bold hover:text-blue-400' href="/anti-ragging">
      Anti Ragging      </Link>
      <Link className='text-red-500 font-bold hover:text-blue-400' href="/student_grievance">
      Griedance Student
      </Link>
    </div>
  )
}
