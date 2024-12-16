import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './CourseDetails.css';

const CourseDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollNow = () => {
    setShowConfirmation(true);
  };

  const handleEnrollCourse = () => {
    setShowConfirmation(false);
    setIsEnrolled(true);
    // TODO: Additional enrollment logic here, such as saving enrollment in a database
  };

  return (
    <div className="course-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back to Courses</button>

      <div className="course-content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <div className="video-player">
            <iframe
              src={`https://www.youtube.com/embed/${course?.introVideoId || 'dQw4w9WgXcQ'}`}
              title={course?.title || 'Course Intro Video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className='course-infor'>
            <div className="course-details">
              <h1>{course?.title || "Course Title"}</h1>
              <p>{course?.description || "Course Description"}</p>
              <p><span>{course?.level || "N/A"}</span> | {course?.duration || "N/A"}</p>
              <p>By: {course?.instructorName || "John Doe"}</p>
              {!isEnrolled && (
                <button className="enroll-button" onClick={handleEnrollNow}>Enroll Now</button>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Course Modules</h2>
          <ul>
            {course?.modules?.map((module, index) => (
              <li key={index} className={!isEnrolled ? 'locked' : ''}>
                <span>{module.title || "No Modules for this Course"}</span>
                {!isEnrolled && <span className="lock-icon">🔒</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to enroll in this course?</p>
          <Button text="Enroll Now" onClick={handleEnrollCourse} />
          <Button text="Cancel" onClick={() => setShowConfirmation(false)} />
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
