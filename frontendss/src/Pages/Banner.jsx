import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';

// Import images
import logo1 from '../Images/banner.png';
import logo2 from '../Images/banner2.png';
import logo3 from '../Images/banner3.png';
import logo4 from '../Images/banner4.png';
import logo5 from '../Images/banner5.png';
import logo6 from '../Images/banner6.png';
import logo7 from '../Images/banner7.png';
import logo8 from '../Images/banner8.png';


function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8,
  ];

  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of Banner Design</h1>

      <div className="container">
        <div className="row">
          {galleryImages.map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="zoom-in">
              <div className="service-card">
                <img src={img} alt={`Logo ${index + 1}`} className="service-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
