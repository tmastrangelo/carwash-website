import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
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
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Sparkle Clean Car Wash</h1>
          <p>Your trusted partner in keeping your vehicle clean and shining.</p>
          <button 
            className="book-now"
            onClick={() => navigate('/booking')}
          >
            Book Now
          </button>
        </div>
      </div>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At Sparkle Clean Car Wash, we pride ourselves on providing top-quality car cleaning services. Our team of professionals ensures that every vehicle leaves our premises looking brand new. We use the latest technology and eco-friendly products to deliver exceptional results.</p>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have questions? Get in touch with us at (123) 456-7890 or visit us at 123 Carwash Lane, Clean City.</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Sparkle Clean Car Wash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;