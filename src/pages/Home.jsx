import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (course) => {
    navigate('/course-details', { state: course });
  }

  const courses = [
    { title: 'JavaScript Basics', description: "Learn the fundamentals of JavaScript.", imageUrl: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-734.jpg?semt=ais_hybrid"},
    { title: 'Intro to React', description: "Build dynamic UIs with React", imageUrl: "https://img.freepik.com/free-photo/atomic-molecule-life-science-study-experiment-graphic_53876-147646.jpg?semt=ais_hybrid"},
    { title: 'Backend Development', description: "Master backend technologies.", imageUrl: "https://img.freepik.com/premium-vector/flat-design-backend-developer-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-779.jpg?semt=ais_hybrid"},
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className='hero'>
        <h1>Welcome to Our E-Learning Platform</h1>
        <p>Gain skills and knowledge with our online courses</p>
        <Button text = "Get Started" />
        <Button text = "Explore Courses" />
      </section>

      {/* Featured Courses Section */}
      <section className='featured-courses'>
        <h2>Featured Courses</h2>
        <div className='courses-grid'>
          {courses.map((course, index) => (
            <Card 
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              onClick={() => handleCardClick(course)}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <h2>What Our Students Say</h2>
        <p>"Great platform with quality Courses!" - User A</p>
        <p>"I've learned so much here." - User B</p>
      </section>
    </div>
  )
}

export default Home
