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
          <p><strong>Duration:</strong> {course?.duration || "N/A"}</p>
          <p><strong>Level:</strong> {course?.level || "N/A"}</p>
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
            {course.syllabus.map((syllabu) => (
              <li key={syllabu}>{syllabu}</li>
            ))}
        </ul>
      </section>
    </div>
  )
}

export default CourseDetailsPage
