import React from 'react';
import './App.css';

function Booking() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">Sparkle Clean Car Wash</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Book Now</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        <form className="booking-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          
          <label htmlFor="service">Select Service:</label>
          <select id="service" name="service" required>
            <option value="basic">Basic Wash</option>
            <option value="deluxe">Deluxe Wash</option>
            <option value="premium">Premium Wash</option>
            <option value="eco">Eco Wash</option>
          </select>
          
          <label htmlFor="date">Preferred Date:</label>
          <input type="date" id="date" name="date" required />
          
          <label htmlFor="time">Preferred Time:</label>
          <input type="time" id="time" name="time" required />
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Sparkle Clean Car Wash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Booking;
