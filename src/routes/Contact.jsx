import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get in Touch</h1>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your email" 
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Your message" 
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-title">Location</h3>
              <p className="info-text">Tiruppur, India</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-title">Phone</h3>
              <p className="info-text">+91 93459 82505</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-title">Website</h3>
              <p className="info-text">www.myprofie.com</p>
            </div>
          </div>
          
        
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;