import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Services.css'; // Make sure this CSS exists

// Images for the cards
import onlineClassImg from '../Images/onlineclass.jpeg';
import metaAdsImg from '../Images/metaadds.png';
import graphicDesignImg from '../Images/grapgicdesign.jpeg';

function MultiServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: 'Online Class',
      description: 'Live and recorded classes for design, development, and marketing.',
      img: onlineClassImg,
      route: '/online-class',
    },
    {
      title: 'Meta Ads Management',
      description: 'Professional management of your Facebook & Instagram ad campaigns.',
      img: metaAdsImg,
      route: '/services/meta-ads',
    },
    {
      title: 'Graphic Design',
      description: 'High-quality logos, banners, social posts, and more.',
      img: graphicDesignImg,
      route: '/services/graphic-design',
    },
  ];

  return (
    <div className="services-page container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Our Multi Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="card service-card h-100 shadow-sm">
              <img src={service.img} className="card-img-top" alt={service.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
                <a href={service.route} className="btn-grad6 mt-3">
                  👁 View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiServices;
