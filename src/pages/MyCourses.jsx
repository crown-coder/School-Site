import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './MyCourses.css';

import ReactThumbnail from '../assets/react.jpeg';
import UiUx from '../assets/ui:ux.jpeg';
import Digital from '../assets/digital.jpeg';
import Js from '../assets/js.jpeg';


const MyCourses = () => {

    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     // Simulate fetching purchased courses from the server
    //     const fetchPurchasedCourses = async () => {
    //         const response = await fetch('/api/purchased-courses');
    //         const data = await response.json();
    //         setCourses(data);
    //     };

    //     fetchPurchasedCourses();
    // }, []);

    const navigate = useNavigate();

    const handleCardClick = (course) => {
      navigate('/course-details', { state: course });

    }

    const courses = [
      {
        id: 1,
        title: "React for Beginners",
        category: "Programming",
        description: "Learn React from scratch.",
        imageUrl: ReactThumbnail,
        price: "$50",
        duration: "10 hours",
        level: "Beginner",
        introVideoId: "dQw4w9WgXcQ", // Replace with an actual video ID
        instructorName: "John Smith",
        instructorImage: "https://via.placeholder.com/150",
        modules: [
          { title: "Introduction to React" },
          { title: "JSX and Rendering" },
          { title: "Components and Props" },
          { title: "State and Lifecycle" },
        ],
      },
      {
        id: 2,
        title: "UI/UX Design Basics",
        category: "Design",
        description: "Introduction to UI/UX principles and best practices.",
        imageUrl: UiUx,
        price: "$30",
        duration: "8 hours",
        level: "Intermediate",
        introVideoId: "oHg5SJYRHA0", // Replace with an actual video ID
        instructorName: "Jane Doe",
        instructorImage: "https://via.placeholder.com/150",
        modules: [
          { title: "What is UI/UX?" },
          { title: "Design Principles" },
          { title: "Prototyping Basics" },
          { title: "User Testing" },
        ],
      },
      {
        id: 3,
        title: "Digital Marketing 101",
        category: "Marketing",
        description: "Get started with Digital Marketing essentials.",
        imageUrl: Digital,
        price: "$40",
        duration: "6 hours",
        level: "Beginner",
        introVideoId: "3JZ_D3ELwOQ", // Replace with an actual video ID
        instructorName: "Michael Lee",
        instructorImage: "https://via.placeholder.com/150",
        modules: [
          { title: "SEO Basics" },
          { title: "Social Media Marketing" },
          { title: "Content Strategy" },
          { title: "Analytics and Reporting" },
        ],
      },
      {
        id: 4,
        title: "Advanced JavaScript",
        category: "Programming",
        description: "Master advanced JavaScript concepts.",
        imageUrl: Js,
        price: "$60",
        duration: "12 hours",
        level: "Advanced",
        introVideoId: "jNQXAC9IVRw", // Replace with an actual video ID
        instructorName: "Emily Davis",
        instructorImage: "https://via.placeholder.com/150",
        modules: [
          { title: "Closures and Scope" },
          { title: "Asynchronous Programming" },
          { title: "Event Loop and Callbacks" },
          { title: "JavaScript Design Patterns" },
        ],
      },
    ];
    
  return (
    <div className='my-courses-page'>
      <h2>My Courses</h2>
      <div className='courses-list'>
        {courses.length > 0 ? (
            courses.map((course, index) => (
                <Card 
                  className="course-item"
                  key={index}
                  title= {course.title}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  onClick={() => handleCardClick(course)}
                />
            ))
        ): (
            <p>You have not purchased any courses yet.</p>
        )}
      </div>
    </div>
  )
}

export default MyCourses
