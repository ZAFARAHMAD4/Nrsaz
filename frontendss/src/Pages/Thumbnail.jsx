import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';

// Import images
import logo1 from '../Images/thumbnail.png';
import logo2 from '../Images/thumbnail2.png';
import logo3 from '../Images/thumbnail3.png';
import logo4 from '../Images/thumbnail4.png';
import logo5 from '../Images/posterdesign6.png';


function Thumbnail() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    logo1, logo2, logo3, logo4, 
  ];

  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of Thumbnail</h1>

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

export default Thumbnail;
