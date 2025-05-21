import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';

// Import images
import logo1 from '../Images/logoDesign2.png';
import logo2 from '../Images/logoDesign3.png';
import logo3 from '../Images/logoDesign4.png';
import logo4 from '../Images/logoDesign5.png';
import logo5 from '../Images/logoDesign6.png';
import logo6 from '../Images/logoDesign7.png';
import logo7 from '../Images/logoDesign8.png';
import logo8 from '../Images/logoDesign9.png';
import logo9 from '../Images/logoDesign10.png';
import logo10 from '../Images/logoDesign11.png';
import logo11 from '../Images/logoDesign12.png';
import logo12 from '../Images/logoDesign13.png';
import logo13 from '../Images/logoDesign13.png';

function LogoDesign() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
  ];

  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of Logo Designs</h1>

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

export default LogoDesign;
