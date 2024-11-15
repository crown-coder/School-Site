import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../components/Button'

const CourseDetailsPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  return (
    <div className='course-details-container'>
      <button onClick={() => navigate(-1)}>Back to Courses</button>
      <section className='course-details'>
        <div className='course-header'>
          <h1>{course?.title || "Course Title"}</h1>
          <img src={course?.imageUrl || "placeholder.jpg"} alt={course?.title || "Course Image"}/>
          <p>{course?.description || "Course Description"}</p>
        </div>

        <div className='course-info'>
          <h2>Course Information</h2>
          <p><strong>Duration:</strong> 10 hours</p>
          <p><strong>Level:</strong> Beginner</p>
          <button className='enroll-button'>Enroll Now</button>
        </div>
        <div className='instructor-info'>
          <h2>Instructor</h2>
          <p><strong>Name:</strong> John Doe</p>
          <img src="instructor-placeholder.jpg" alt="instructor" className='instructor-image' />
        </div>
      </section>

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
