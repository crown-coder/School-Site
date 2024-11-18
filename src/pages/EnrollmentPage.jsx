import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EnrollPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  const handleEnroll = () => {
    // Handle the enrollment process (e.g., enroll the user in the course)
    alert('You have been successfully enrolled in the course!');
    navigate('/thank-you'); // Redirect to courses page after successful enrollment
  };

  return (
    <div className='enroll-container'>
      <h1>Enroll in Course</h1>
      <section className='course-details'>
        <h2>Course: {course?.title}</h2>
        <p><strong>Duration:</strong> {course?.duration}</p>
        <p><strong>Level:</strong> {course?.level}</p>
        <p>{course?.description}</p>
        <img src={course?.imageUrl || 'placeholder.jpg'} alt={course?.title} />
      </section>

      <button onClick={handleEnroll} className='enroll-button'>Enroll Now</button>
    </div>
  );
};

export default EnrollPage;
