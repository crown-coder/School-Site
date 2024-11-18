import React, { useState } from 'react'

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit form data logic
    };
  
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  

export default ContactPage
