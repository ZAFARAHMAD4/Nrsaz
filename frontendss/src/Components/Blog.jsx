import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Blog.css';

import blog1 from '../Images/logodesign.png';
import blog2 from '../Images/logodesign.png';
import blog3 from '../Images/logodesign.png';

const allPosts = [
  {
    title: 'Top 5 Design Trends in 2025',
    image: blog1,
    excerpt: 'Stay ahead of the curve with these modern design inspirations...',
    category: 'Design Tips'
  },
  {
    title: 'How to Make Your Website More Effective',
    image: blog2,
    excerpt: 'Learn practical steps to improve your website performance...',
    category: 'Website Advice'
  },
  {
    title: 'Branding Mistakes to Avoid',
    image: blog3,
    excerpt: 'A strong brand identity is key. Avoid these common pitfalls...',
    category: 'Branding'
  }
];

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [filter, setFilter] = useState('All');

  const filteredPosts =
    filter === 'All' ? allPosts : allPosts.filter(post => post.category === filter);

  const categories = ['All', 'Design Tips', 'Website Advice', 'Branding'];

  return (
    <div className="blog-page">
      <h1 className="blog-title" data-aos="fade-down">Our Blog</h1>
      <p className="blog-subtitle" data-aos="fade-up">Explore expert tips, trends, and insights</p>

      <div className="blog-filters" data-aos="fade-up">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <div className="blog-card" key={index} data-aos="fade-up">
            <img src={post.image} alt={post.title} className="blog-img" />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
