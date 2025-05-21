import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert('Message sent!');
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong.');
    }

    setLoading(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      <h1 className="contact-title" data-aos="fade-up">Contact Us</h1>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
              <option value="Website Design">Website Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="PPT Design">PPT Design</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="col-lg-6 contact-info" data-aos="fade-left">
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195837220834!2d-122.4194151846817!3d37.77492977975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e5f3f2f%3A0x257a1a7375641c9c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614461876585"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-details">
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>Email:</strong> contact@arnrsaz.com</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
