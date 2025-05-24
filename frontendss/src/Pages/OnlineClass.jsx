import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/OnlineClass.css';
import { Link } from 'react-router-dom';

function OnlineClass() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const classes = [
    { title: 'Class 1: HTML Basics', description: 'Learn the building blocks of the web.' },
    { title: 'Class 2: CSS Styling', description: 'Make your web pages look amazing.' },
    { title: 'Class 3: JavaScript Essentials', description: 'Make your sites interactive and dynamic.' },
    { title: 'Class 4: React Introduction', description: 'Build modern user interfaces.' },
  ];

  return (
    <div className="online-class-page container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">📚 Online Classes</h2>
      <div className="row">
        {classes.map((cls, index) => (
          <div className="col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card class-card h-100 shadow-sm p-3">
              <h5 className="card-title">{cls.title}</h5>
              <p className="card-text">{cls.description}</p>
              <Link to={`/online-class/class-${index + 1}`} className=" btn-grad5 mt-3">
                🎥 View Class
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineClass;
