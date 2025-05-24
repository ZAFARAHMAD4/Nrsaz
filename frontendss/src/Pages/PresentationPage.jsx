import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/PresentationPage.css'; // Create this file
import pp1 from '../presentations/DesignTipsforBeginners.pptx'
function PresentationPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const presentations = [
    {
      title: 'Design Tips for Beginners',
      description: 'Learn the best design practices in 10 slides.',
      file: pp1,
      thumbnail: '/thumbnails/design-tips.jpg',
    },
    {
      title: '2025 Marketing Trends',
      description: 'Stay ahead with trends and insights.',
      file: '/presentations/marketing-trends.pptx',
      thumbnail: '/thumbnails/marketing-trends.jpg',
    },
    {
      title: 'Ad Strategies that Convert',
      description: 'Effective ad funnels and targeting examples.',
      file: '/presentations/ad-strategies.pptx',
      thumbnail: '/thumbnails/ad-strategies.jpg',
    },
    {
      title: 'Branding Basics',
      description: 'Fundamentals of visual identity and branding.',
      file: '/presentations/branding-basics.pptx',
      thumbnail: '/thumbnails/branding-basics.jpg',
    },
    {
      title: 'UX/UI Fundamentals',
      description: 'Introduction to user experience and interface design.',
      file: '/presentations/ux-ui-fundamentals.pptx',
      thumbnail: '/thumbnails/ux-ui-fundamentals.jpg',
    },
  ];

  return (
    <div className="presentation-page container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">📊 PPT Presentations</h2>
      <div className="row">
        {presentations.map((ppt, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="card ppt-card shadow-sm h-100">
              <img src={ppt.thumbnail} className="card-img-top" alt={ppt.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{ppt.title}</h5>
                  <p className="card-text">{ppt.description}</p>
                </div>
                <a
                  href={ppt.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-3"
                  download
                >
                  📥 View / Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PresentationPage;
