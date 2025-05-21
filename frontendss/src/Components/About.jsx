import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/About.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    { name: 'ARIHA NAAZ', role: 'Social Media Manager & Video Editor', img: '/images/team1.jpg' },
    { name: 'ZAFAR AHMAD', role: 'Full stack & Web Developer', img: '/images/team2.jpg' },
    { name: 'SANIYA HASAN', role: 'Graphic Designer', img: '/images/team3.jpg' },
  ];

  const workflow = [
    'Discuss Requirements',
    'Plan & Design',
    'Develop & Review',
    'Deliver & Support'
  ];

  return (
    <div className="about-page">
      {/* Company Story */}
      <section className="section story-section">
        <div className="container" data-aos="fade-up">
          <h2>Our Story & Mission</h2>
          <p>
            Arnrsaz was founded with a passion for creative storytelling and digital design. 
            Our mission is to provide affordable, professional-grade solutions in web design, graphic design, and video editing.
          </p>
          <img src="/images/about-banner.jpg" alt="About Us" className="banner-img img-fluid" />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section team-section">
        <div className="container">
          <h2 data-aos="fade-up">Meet the Team</h2>
          <div className="row">
            {teamMembers.map((member, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={i} data-aos="zoom-in">
                <div className="team-card text-center p-3 h-100">
                  <img src={member.img} alt={member.name} className="img-fluid rounded-circle mb-3" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="container" data-aos="fade-up">
          <h2>Why Choose Arnrsaz?</h2>
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <ul className="why-list">
                <li>✔ Creative, modern designs tailored to your brand</li>
                <li>✔ Affordable pricing with premium quality</li>
                <li>✔ Fast turnaround time and excellent support</li>
                <li>✔ One-stop solution for design, web, video & more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Workflow */}
      <section className="section workflow-section">
        <div className="container" data-aos="fade-up">
          <h2>Our Workflow</h2>
          <div className="row">
            {workflow.map((step, i) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
                <div className="step-box text-center p-3 h-100">
                  <div className="step-number mb-2">{i + 1}</div>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
