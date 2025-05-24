import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/About.css';

// Images
import zafar from '../Images/zafar.jpg';
import ariha from '../Images/ariha.jpg';
import saniya from '../Images/saniya.jpg';

import about from '../Images/aboutus.jpg';

// Files (Resumes and Certificates)
import zafarresume from '../Resumes/ZAFAR CV.pdf';
import zafarCert1 from '../certificates/zafar1.jpg';
import zafarCert2 from '../certificates/zafar2.png';
import zafarCert3 from '../certificates/zafar3.png';
import zafarCert4 from '../certificates/zafar4.png';

import saniyacert1 from '../certificates/saniya.pdf'
import { Link } from 'react-router-dom';

// Certificate Modal Component
function CertificateModal({ isOpen, onClose, certificates }) {
  if (!isOpen) return null;

  return (
    <div className="cert-modal-overlay">
      <div className="cert-modal" data-aos="zoom-in">
        <button className="close-btn" onClick={onClose}> ✖ Close</button>
        <h5 className="mb-4 text-center fw-bold">Certificates</h5>
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-link">
                {cert.file.endsWith('.pdf') ? (
                  <embed src={cert.file} type="application/pdf" className="cert-embed" />
                ) : (
                  <img src={cert.file} alt={cert.name} className="cert-img" />
                )}
                <p className="cert-name">{cert.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCertificates = (certs) => {
    setSelectedCertificates(certs);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificates([]);
  };

  const teamMembers = [
    {
      name: 'ARIHA NAAZ',
      role: 'Social Media Manager & Video Editor',
      img: ariha,
      resume: '/resumes/ariha-naaz.pdf',
      link:'/services',
      certificates: [
        { name: 'Social Media Certificate', file: '/certificates/ariha-cert1.pdf' },
        { name: 'Video Editing Certificate', file: '/certificates/ariha-cert2.pdf' },
      ],
    },
    {
      name: 'ZAFAR AHMAD',
      role: 'Full Stack & Web Developer',
      img: zafar,
      resume: zafarresume,
      link:'/services',
      certificates: [
        { name: 'Web Development Certificate', file: zafarCert1 },
        { name: 'React Mastery', file: zafarCert2 },
        { name: 'React Mastery', file: zafarCert3 },
        { name: 'React Mastery', file: zafarCert4 },
      ],
    },
    {
      name: 'SANIYA HASAN',
      role: 'Graphic Designer',
      img: saniya,
      resume: '/resumes/saniya-hasan.pdf',
      link:'/MultiServices',

       certificates: [
        { name: 'Web Development Certificate', file: saniyacert1 },

      ],
    },
  ];

  const workflow = [
    'Discuss Requirements',
    'Plan & Design',
    'Develop & Review',
    'Deliver & Support',
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
          <img src={about} alt="About Us" className="banner-img img-fluid" />
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

                  <div className="mt-3 d-flex flex-column gap-2 align-items-center">
                    {/* Resume download */}
                    {member.resume ? (
                      <a
                        href={member.resume}
                        className="btn btn-outline-primary bg-primary btn-grad btn-sm w-75"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 Download Resume
                      </a>
                    ) : (
                      <span className="text-muted">❌ No Resume</span>
                    )}

                    {/* One button for all certificates */}
                    {member.certificates && member.certificates.length > 0 ? (
                      <button
                        onClick={() => openCertificates(member.certificates)}
                        className="btn btn-outline-success btn-grad1 btn-sm w-75"
                      >
                        🎓 View Certificates
                      </button>
                    ) : (
                      <span className="text-muted">❌ No Certificates</span>
                    )}
                  </div>
                  {/* Services Button */}
                  <Link
                    to={`${member.link}`}
                    className="btn-grad2 btn-sm w-75    "
                  >
                    💼 Our Services
                  </Link>
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

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certificates={selectedCertificates}
      />
    </div>
  );
}

export default About;
