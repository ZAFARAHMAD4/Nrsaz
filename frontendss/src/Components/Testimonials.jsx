import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Testimonials.css';

import client1 from '../Images/logodesign.png';
import client2 from '../Images/logodesign.png';
import client3 from '../Images/logodesign.png';
import logo1 from '../Images/logodesign.png';
import logo2 from '../Images/logodesign.png';
import logo3 from '../Images/logodesign.png';
import videoThumb from '../Images/logodesign.png';

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      name: 'Sarah Sharma',
      review: 'Arnrsaz brought my ideas to life! The designs were fresh, fast, and on-point.',
      img: client1,
    },
    {
      name: 'Rahul Mehta',
      review: 'Great work on our branding kit and website. Highly professional and creative team!',
      img: client2,
    },
    {
      name: 'Emily Dsouza',
      review: 'Super responsive and quick delivery. Highly recommend for video editing.',
      img: client3,
    },
  ];

  const logos = [logo1, logo2, logo3];

  return (
    <div className="testimonials-page">
      <h1 className="title" data-aos="fade-down">What Our Clients Say</h1>

      {/* Testimonials Grid */}
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index} data-aos="zoom-in">
            <img src={t.img} alt={t.name} className="client-img" />
            <p>"{t.review}"</p>
            <h4>– {t.name}</h4>
          </div>
        ))}
      </div>

      {/* Optional Video Testimonial */}
      <div className="video-section" data-aos="fade-up">
        <h2>Client Video Feedback</h2>
        <div className="video-wrapper">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <img src={videoThumb} alt="Client Video Testimonial" className="video-thumb" />
          </a>
        </div>
      </div>

      {/* Client Logos */}
      <div className="logos-section" data-aos="fade-up">
        <h2>Trusted by Brands</h2>
        <div className="logos-grid">
          {logos.map((logo, i) => (
            <img src={logo} alt={`Client ${i}`} key={i} className="logo-img" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
