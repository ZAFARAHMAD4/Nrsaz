import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/MetaAds.css'; // Create this CSS file

function MetaAds() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const ads = [
    {
      title: 'Product Launch Ad',
      description: 'Promotional ad for a new product launch campaign.',
      src: '/videos/meta1.mp4',
    },
    {
      title: 'Service Branding Ad',
      description: 'Ad focused on professional services branding.',
      src: '/videos/meta2.mp4',
    },
    {
      title: 'E-commerce Sale Ad',
      description: 'Sale-driven campaign targeting Instagram shoppers.',
      src: '/videos/meta3.mp4',
    },
  ];

  return (
    <div className="meta-ads-page container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">📢 Meta Ads Management</h2>
      <p className="text-center mb-5" data-aos="fade-up">
        Here's a showcase of professionally managed Meta (Facebook & Instagram) ad campaigns we’ve created.
      </p>

      <div className="row">
        {ads.map((ad, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="card shadow-sm h-100">
              <video
                src={ad.src}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{ad.title}</h5>
                <p className="card-text">{ad.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetaAds;
