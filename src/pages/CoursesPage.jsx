import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursesPage.css';

import ReactThumbnail from '../assets/react.jpeg';
import UiUx from '../assets/ui:ux.jpeg';
import Digital from '../assets/digital.jpeg';
import Js from '../assets/js.jpeg';


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
      introVideoId: "_VyA2f6hGW4", // Replace with an actual video ID
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
  

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    // Filter courses based on search and category
    const filteredCourses = courses.filter(course => {
        return (
            (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
            (course.category === selectedCategory || selectedCategory === '')
        );
    });

    // Handle navigation to CourseDetailsPage
    const handleCardClick = (course) => {
        navigate('/course-details', { state: course });
    };

    return (
        <div className='courses-page'>
            <h1>All Courses</h1>

            {/* Filters */}
            <div className='filters'>
                <input
                    type='text'
                    placeholder='Search courses...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-bar'
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className='category-filter'
                >
                    <option value=''>All Categories</option>
                    <option value='Programming'>Programming</option>
                    <option value='Design'>Design</option>
                    <option value='Marketing'>Marketing</option>
                </select>
            </div>

            {/* Courses Grid */}
            <div className='courses-grid'>
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div
                            key={course.id}
                            className='course-card'
                            onClick={() => handleCardClick(course)}
                        >
                            <img src={course.imageUrl} alt={course.title} className='course-image' />
                            <h2>{course.title}</h2>
                            <p className='description-text'>{course.description}</p>
                            <p className='price-duration'>{course.price} | {course.duration}</p>
                        </div>
                    ))
                ) : (
                    <p className='no-result'>No courses found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;
