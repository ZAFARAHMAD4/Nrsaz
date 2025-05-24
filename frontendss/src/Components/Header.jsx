import React, { useState } from 'react';
import logo from '../Images/logo.png';
import '../Css/Header.css';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const routeMap = {
  home: '/',
  about: '/about',
  services: '/services',
  portfolio: '/portfolio',
  contact: '/contact',
  pricing: '/pricing',
  team: '/team',
  testimonials: '/testimonials',
  blog: '/blog',
  quote: '/quote',
  faq: '/faq'
};
const handleSearch = (e) => {
  e.preventDefault();
  const trimmed = query.trim().toLowerCase();

  if (trimmed === '') return;

  // Check if query matches any known page/component name
  if (routeMap[trimmed]) {
    navigate(routeMap[trimmed]); // Navigate to the component
  } else {
    navigate(`/search?q=${encodeURIComponent(trimmed)}`); // Fallback: general search
  }
};
  return (
    <div className="header1">
      <div className="header">
        <h1 className="animated-gradient-text">AR NRSAZ GRAPHICS</h1>
      </div>

      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="navbar-logo rounded-pill" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="navbar navbar-expand-lg navbar-dark bg-dark" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100%' }} navbarScroll>
              <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light">Services</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="text-light">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>

              <NavDropdown title="More" id="navbarScrollingDropdown" className="text-light">
                <NavDropdown.Item as={Link} to="/pricing">Pricing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testomonials">Testomonials</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quote">Request a Quote</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex" onSubmit={handleSearch}>
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <Button variant="outline-light" type="submit">Search</Button>
</Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
