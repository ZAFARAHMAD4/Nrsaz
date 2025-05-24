import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Home.css';
import webDesignImg from '../Images/webdesign.png';
import logoDesignImg from '../Images/logodesign.png';
import graphicDesignImg from '../Images/Motiongraphic.png';
import pptDesignImg from '../Images/posterdesign.png';
import videoEditingImg from '../Images/videoediting.png';


// portfolio img
import portfolio1 from '../Images/arihaportfolio.png'
import portfolio2 from '../Images/miznaportfolio.png'
import { useState } from 'react';

import ReviewSection from './ReviewSection.jsx';


function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
      const [reload, setReload] = useState(false);
  
    const triggerReload = () => setReload(!reload);

const services = [
  { title: 'Web Design', img: webDesignImg },
  { title: 'Logo Design', img: logoDesignImg },
  { title: 'Graphic Design', img: graphicDesignImg },
  { title: 'PPT Design', img: pptDesignImg },
  { title: 'Video Editing', img: videoEditingImg }
];
  const portfolios = [
    {
      title: 'Ariha Portfolio',
      img:portfolio1,
      link:'https://ariha-portfolio.my.canva.site/ariha-naaz-portfolio'
    },
    {
      title: 'Mizna Ansari Portfolio',
      img:portfolio2,
      link:'https://www.mizna.me/',
    },

  ];

  const testimonials = [
    { text: 'Outstanding creativity and fast turnaround!', name: 'Sarah' },
    { text: 'My brand identity is now amazing thanks to Arnrsaz.', name: 'Rahul' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="gradient-text" data-aos="fade-down">AR NRSAZ GRAPHICS</h1>
        <p className="lead" data-aos="fade-up">Creative Designs. Professional Websites.</p>
        <button className="cta-button" data-aos="zoom-in">Get Started Now</button>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <h2 data-aos="fade-up">Gallery of Our Services</h2>
        <div className="container">
          <div className="row">
            {services.map((s, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
                <div className="card h-100  text-center p-3">
                  <img src={s.img} alt={s.title} className="service-img w-100" />
                  <h3>{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-light" id="portfolio">
        <h2 data-aos="fade-up">Featured Portfolio</h2>
        <div className="container">
          <div className="row">
            {portfolios.map((img, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="portfolio-img-container">
                  <img src={img.img} alt={`Portfolio ${i + 1}`} className="portfolio-img" />
                <p className="animated-gradient-text">{img.title}</p>
                  <a href={`${img.link}`} target="_blank" rel="noopener noreferrer" className="btn-grad2">
                    See Full Portfolio
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" id="testimonials">
        <h2 data-aos="fade-up">What Clients Say</h2>
        <div className="container">
          <div className="row">
            {testimonials.map((t, i) => (
              <div key={i} className="col-12 col-md-6 mb-4" data-aos="fade-right">
                <div className="testimonial-box h-100">
                  <p>"{t.text}"</p>
                  <strong>– {t.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 data-aos="zoom-in">Ready to Elevate Your Brand?</h2>
        <button className="cta-button-light" data-aos="fade-up">Get a Free Quote</button>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2 data-aos="fade-up">Subscribe to Our Newsletter</h2>
        <p data-aos="fade-up">Get design tips and special offers.</p>
        <form className="newsletter-form" data-aos="fade-up">
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
          <ReviewSection onReviewSubmit={triggerReload} />
          
    </div>
  );
}

export default Homepage;
