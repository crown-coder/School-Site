import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const courses = [
    {
        id: 1,
        title: "React for Beginners",
        category: "Programming",
        description: "Learn React from scratch.",
        imageUrl: "coming.jpg",
        price: "$50",
        duration: "10 hours",
        level: "Beginner",
        syllabus: [
            "Introduction to React",
            "JSX and Rendering",
            "Components and Props",
            "State and Lifecycle",
        ],
    },
    {
        id: 2,
        title: "UI/UX Design Basics",
        category: "Design",
        description: "Introduction to UI/UX.",
        imageUrl: "coming.jpg",
        price: "$30",
        duration: "8 hours",
        level: "Intermediate",
        syllabus: ["What is UI/UX?", "Design Principles", "Prototyping Basics"],
    },
    {
        id: 3,
        title: "Digital Marketing 101",
        category: "Marketing",
        description: "Getting started with Digital Marketing.",
        imageUrl: "coming.jpg",
        price: "$40",
        duration: "6 hours",
        level: "Beginner",
        syllabus: ["SEO Basics", "Social Media Marketing", "Content Strategy"],
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
                            <p>{course.description}</p>
                            <p><strong>Price:</strong> {course.price}</p>
                            <p><strong>Duration:</strong> {course.duration}</p>
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
