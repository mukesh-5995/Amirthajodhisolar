import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Get in Touch</h2>
      <p className="contact-us-description">
        We'd love to hear from you! Whether you have a question or need
        assistance, you can reach us using the form below.
      </p>

      <div className="contact-us-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea
          placeholder="Your Message"
          className="textarea-field"
        ></textarea>
        <button className="submit-button">Send Message</button>
      </div>

      <div className="contact-info">
        <div className="contact-info-item">
          <i className="fas fa-phone-alt"></i>
          <span>123456789</span>
        </div>
        <div className="contact-info-item">
          <i className="fas fa-envelope"></i>
          <span>amirthajodhisolar@gmail.com</span>
        </div>
        <div className="contact-info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Madurai</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
