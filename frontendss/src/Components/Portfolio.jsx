import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Portfolio.css'; // Ensure you style it

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      name: 'Modern Business Website',
      category: 'Web',
      description: 'Responsive and SEO-optimized website for businesses.',
      img: '/images/portfolio1.jpg',
    },
    {
      name: 'Luxury Logo',
      category: 'Logos',
      description: 'Minimalist logo design for a premium clothing brand.',
      img: '/images/portfolio2.jpg',
    },
    {
      name: 'Instagram Reel',
      category: 'Videos',
      description: 'High-quality reel edit for a fitness influencer.',
      img: '/images/portfolio3.jpg',
    },
    {
      name: 'Sales Pitch Deck',
      category: 'PPT',
      description: 'A compelling presentation with custom graphics.',
      img: '/images/portfolio4.jpg',
    },
    {
      name: 'Event Poster',
      category: 'Posters',
      description: 'Bold and colorful event poster for music fest.',
      img: '/images/portfolio5.jpg',
    },
    {
      name: 'Startup Web Design',
      category: 'Web',
      description: 'Clean and modern web design for a tech startup.',
      img: '/images/portfolio6.jpg',
    },
  ];

  const categories = ['All', 'Web', 'Logos', 'Videos', 'PPT', 'Posters'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-header" data-aos="fade-up">Our Portfolio</h1>

      <div className="filter-buttons" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProjects.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index} data-aos="zoom-in">
            <div className="portfolio-card">
              <img src={project.img} alt={project.name} className="portfolio-img" />
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
