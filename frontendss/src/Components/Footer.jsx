import React from 'react'
import '../Css/Footer.css'
import { Container, Row, Col, Form, Button,Card  } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';
function Footer() {
  return (
    <div>
     <section className="footer-section">
  <Container>
    <Row className="footer-top">
      {/* About */}
      <Col md={3} sm={6} className="footer-col" data-aos="fade-up">
        <h5>About</h5>
        <p>ChromaFy Graphics by Shabeena Naaz delivers high-impact visuals, social content, and creative solutions for modern brands.</p>
      </Col>

      {/* Services */}
      <Col md={3} sm={6} className="footer-col" data-aos="fade-up" data-aos-delay="100">
        <h5>Services</h5>
        <ul className="footer-links">
          <li><a href="#services">Banner Design</a></li>
          <li><a href="#services">PPT Creation</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
        </ul>
      </Col>

      {/* Contact */}
      <Col md={3} sm={6} className="footer-col" data-aos="fade-up" data-aos-delay="200">
        <h5>Contact</h5>
        <ul className="footer-contact">
          <li>Email: contact@chromafy.com</li>
          <li>Phone: +91 123-456-7890</li>
          <li>Location: India</li>
        </ul>
      </Col>

      {/* Social */}
      <Col md={3} sm={6} className="footer-col" data-aos="fade-up" data-aos-delay="300">
        <h5>Follow Me</h5>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/chromafy_graphics?utm_source=qr&igsh=ZGxldTV1dGkydXNz" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://behance.net" target="_blank" rel="noreferrer"><FaBehance /></a>
        </div>
      </Col>
    </Row>

    <hr className="footer-divider" />

    <Row className="footer-bottom text-center">
      <Col>
        <p>© {new Date().getFullYear()} ChromaFy Graphics | Designed by Shabeena Naaz</p>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  )
}

export default Footer