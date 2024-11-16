import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const courses = [
    { id: 1, title: "React for Beginners", category: "Programming", description: "Learn React from scratch", imageUrl: "coming.jpg" },
    { id: 2, title: "UI/UX Design Basics", category: "Design", description: "Introduction to UI/UX", imageUrl: "coming.jpg" },
    { id: 3, title: "Digital Marketing 101", category: "Marketing", description: "Getting Started with Digital Marketing", imageUrl: "coming.jpg" },
]
console.log(courses);

const CoursesPage = () => {
  
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ selectedCaregory, setSelectedCaregory ] = useState("");   
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course => {
    return (
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "") &&
        (course.category === selectedCaregory || selectedCaregory === "")
    );
  })

  const handleCardClick = (course) => {
    navigate('/course-details', { state: course });
  }
  return (
    <div className='courses-page'>
      <h1>All Courses</h1>

      <div className='filters'>
        <input 
            type='text'
            placeholder='Search courses...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-bar'
        />

        <select
            value={selectedCaregory}
            onChange={(e) => setSelectedCaregory(e.target.value)}
            className='category-filter'
        >
            <option value="">All Categories</option>
            <option value="Programming">Programming</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div className='courses-grid'>
        {filteredCourses.map((course) => (
            <div
                key={course.id}
                className='course-card'
                onClick={() => handleCardClick(course)}
            >
                <img src={course.imageUrl} alt={course.title} />
                <h2>{course.title}</h2>
                <p>{course.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
