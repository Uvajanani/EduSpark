import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us for any queries or support.</p>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@eduspark.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 EduSpark Street, Anna Salai, Trichy</p>
          
          <div className="map-container">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0638553900764!2d78.68495721479552!3d10.790483092307775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d98fcd7e79f%3A0x2e68f1745c64c9a4!2sAnna%20Salai%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy">
            </iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
