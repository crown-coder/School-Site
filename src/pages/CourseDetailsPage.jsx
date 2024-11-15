import React from 'react'
import { useLocation } from 'react-router-dom';

import Button from '../components/Button'

const CourseDetailsPage = () => {

  const location = useLocation();
  const course = location.state;

  return (
    <div>
      <h1>{course?.title || "Course Title"}</h1>
      <p>Description: {course?.description || "Course Description"}</p>
      <img src={course.imageUrl} />
      <Button text="Enroll Now" />

      {/* Syllabus Section */}
      <section className='syllabus'>
        <h2>Course Syllabus</h2>
        <ul>
            <li>Module 1: Introduction</li>
            <li>Module 2: HTML and CSS</li>
            <li>Module 3: JavaScript Basics</li>
        </ul>
      </section>
    </div>
  )
}

export default CourseDetailsPage
