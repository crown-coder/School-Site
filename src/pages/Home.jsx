import React from 'react'
import './Home.css';
import Shelf from '../assets/shelf.png';

import { useNavigate } from 'react-router-dom'

import FAQPage from '../components/FAQPage'
import ContactPage from '../components/ContactPage'
import Footer from '../components/Footer'

import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
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
      imageUrl: "coming.jpg",
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
      imageUrl: "coming.jpg",
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
      imageUrl: "coming.jpg",
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
      imageUrl: "coming.jpg",
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
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='left'>
          <h1>Welcome to Our <br/>E-Learning Platform</h1>
          <p>Gain skills and knowledge with our online <br />courses and our expect, certified mentors, <br />both online and physical.</p>
          <Button text = "Get Started" />
          <Button text = "Explore Courses" />
        </div>
        <div className='right'>
          <img src={Shelf} alt="Hero photo" />
        </div>
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
        
        <button 
            onClick={() => navigate('/courses')} className="view-courses-button">
            View All Courses
        </button>

      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <h2>What Our Students Say</h2>
        <p>"Great platform with quality Courses!" - User A</p>
        <p>"I've learned so much here." - User B</p>
      </section>

      {/* FAQ Section */}
      <section className='faq'>
        <FAQPage />
      </section>

      {/* Contact Section */}
      <section className='contact'>
        <ContactPage />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
