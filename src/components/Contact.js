import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yq8t6uk",      // Your Service ID
      "template_j52902p",     // Your Template ID
      e.target,
      "SUHHrSMucP6NohdNp"      // Your Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-wrapper">
        
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-box">
            <h3>
              <span className="info-icon">📍</span>
              Address
            </h3>
            <p>
              13-1-57/13/18, Avanthinagarthota,<br />
              Moti Nagar,<br />
              Hyderabad, Telangana
            </p>
          </div>

          <div className="info-box">
            <h3>
              <span className="info-icon">📞</span>
              Call Us
            </h3>
            <p>+91 9010482645</p>
          </div>

          <div className="info-box">
            <h3>
              <span className="info-icon">✉️</span>
              Email
            </h3>
            <p>futurekids.in@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={sendEmail}>
            
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="user_name" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="user_email" 
                placeholder="Enter your email" 
                required 
              />
            </div>

            {/* ✅ NEW CONTACT NUMBER FIELD */}
            <div className="form-group">
              <label>Contact Number</label>
              <input 
                type="tel" 
                name="user_phone" 
                placeholder="Enter your contact number" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                placeholder="Write your message here..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
