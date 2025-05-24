import React, { useEffect } from 'react';
import '../Css/Services.css'; // Ensure the styles are in place
import websiteIcon from '../Images/webdesign.png';
import logoIcon from '../Images/logodesign.png';
import socialMediaIcon from '../Images/logodesign.png';
import pptIcon from '../Images/logodesign.png';
import promoVideoIcon from '../Images/logodesign.png';
import videoEditingIcon from '../Images/logodesign.png';
import businessCardIcon from '../Images/logodesign.png';
import { Link } from 'react-router-dom';

import AOS from 'aos';

function Services() {
        useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Add the AOS initialization
  }, [])
  const services = [
    {
      category: 'Website Design ',
      img: websiteIcon,
      description: 'We design and develop responsive, user-friendly websites to your business needs.',
      buttonText: 'See Templates',
      link:'webdesign'
    },
    {
      category: 'Logo Design',
      img: logoIcon,
      description: 'Create a unique and memorable logo that represents your brand’s identity.',
      buttonText: 'See Templates',
      link:'logodesign'

    },
    {
      category: 'Social Media Graphics',
      img: socialMediaIcon,
      description: 'Craft engaging social media posts that  your brand’s voice and attract attention.',
      buttonText: 'See Templates',
      link:'socialmedia'

    },
    {
      category: 'PPT Presentations',
      img: pptIcon,
      description: 'We create stunning and professional PowerPoint presentations to deliver your message effectively.',
      buttonText: 'See Templates',
      link:'presentations'

    },
    {
      category: 'Promotional Videos',
      img: promoVideoIcon,
      description: 'Create compelling promotional videos that help market your products and services.',
      buttonText: 'See Templates',
      link:'logodesign'

    },
    {
      category: 'Video Editing & Reels',
      img: videoEditingIcon,
      description: 'Edit and enhance your video content to create polished and professional results.',
      buttonText: 'See Templates',
      link:'videoedit'

    },

    {
      category: 'Poster Design Professional Adds',
      img: businessCardIcon,
      description: 'We offer unique business cards and complete branding kits to elevate your business identity.',
      buttonText: 'See Templates',
      link:'posterdesign'

    },
    {
      category: 'Thumbnail Design Professional Adds',
      img: businessCardIcon,
      description: 'We offer unique business cards and complete branding kits to elevate your business identity.',
      buttonText: 'See Templates',
      link:'thumbnail'

    },
    {
      category: 'Banner Design Professional Adds',
      img: businessCardIcon,
      description: 'We offer unique business cards and complete branding kits to elevate your business identity.',
      buttonText: 'See Templates',
      link:'banner'

    }
  ];

  return (
    <div className="services-page">
      <h1 className="services-header">Our Services</h1>

      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="fade-up">
              <div className="service-card">
                <img src={service.img} alt={service.category} className="service-icon" />
                <h3>{service.category}</h3>
                <p>{service.description}</p>
                {/* <button className="service-btn">{service.buttonText}</button> */}
                <Link to={`/${service.link}`} className="service-btn">
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
