import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>EduSpark</h2>
          <p>Empowering Education for Everyone.</p>
        </div>

        <div className='courses'>
            <h3>Courses</h3>
            <p>Maths</p>
            <p>Biology</p>
            <p>Physics</p>
            <p>Chemistry</p>
            <p>History</p>
            <p>Geography</p>
            <p>Civics</p>
        </div>
        <ul className="footer-links">
          <li className='quick'>Quick Links</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className='social-links'>
            <div className='follow'> Follow Us On</div>
            <div className="footer-socials">
                <img src={assets.facebook} alt="Facebook" />
                <img src={assets.twitter} alt="Twitter" />
                <img src={assets.instagram} alt="Instagram" />
                <img src={assets.linkedin} alt="linkedin" />
            </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduSpark. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
