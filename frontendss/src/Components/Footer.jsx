import React from 'react'
import '../Css/Footer.css'
import { Container, Row, Col, Form, Button,Card  } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
function Footer() {
  return (
    <div>
     <section className="footer-section">
  <Container>
    <Row className="footer-top">
      {/* About */}
      <Col md={4} sm={6} className="footer-col" data-aos="fade-up">
        <h5>About</h5>
        <p>All Types Graphics by Ar Nrsaz delivers high-impact visuals, social content, and creative solutions for modern brands.</p>
      </Col>

  

      {/* Contact */}
      <Col md={4} sm={6} className="footer-col" data-aos="fade-up" data-aos-delay="200">
        <h5>Contact</h5>
        <ul className="footer-contact">
          <li>Email: arnrsaz@gmail.com</li>
          <li>Phone: +91 786 024 8387</li>
          <li>Location: India</li>
        </ul>
      </Col>

      {/* Social */}
      <Col md={4} sm={6} className="footer-col" data-aos="fade-up" data-aos-delay="300">
        <h5>Follow Me</h5>
        <div className="footer-social">
          <a href="https://www.facebook.com/sania.ansari.96780/?_rdr" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/jaunpurgraphics/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/zafar-ahmad-82005b251/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@codeswar" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://www.youtube.com/@Graphicbyariha" target="_blank" rel="noreferrer"><FaYoutube /></a>
      <a href="#top" className="back-to-top">
  ↑
</a>
        </div>
      </Col>

    </Row>

    <hr className="footer-divider" />

    <Row className="footer-bottom text-center">
      <Col>
        <p>© {new Date().getFullYear()} All Types Graphics | Designed by Ar Nrsaz</p>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  )
}

export default Footer