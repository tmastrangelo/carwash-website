import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Services() {
  const navigate = useNavigate();

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
      <div className="services-container">
        <button 
          className="back-to-home"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Basic Wash</h3>
            <p>Includes exterior hand wash, drying, and tire cleaning.</p>
          </div>
          <div className="service-item">
            <h3>Deluxe Wash</h3>
            <p>Includes Basic Wash plus interior vacuuming and window cleaning.</p>
          </div>
          <div className="service-item">
            <h3>Premium Wash</h3>
            <p>Includes Deluxe Wash plus waxing and interior detailing.</p>
          </div>
          <div className="service-item">
            <h3>Eco Wash</h3>
            <p>Our environmentally friendly option using waterless cleaning technology.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Sparkle Clean Car Wash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;