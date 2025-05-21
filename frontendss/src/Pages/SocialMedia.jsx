import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';

// Import images
import logo3 from '../Images/posterdesign3.png';
import logo4 from '../Images/posterdesign4.png';
import logo5 from '../Images/posterdesign6.png';
import logo6 from '../Images/posterdesign7.png';
import logo7 from '../Images/posterdesign8.png';
import logo8 from '../Images/posterdesign9.png';
import logo9 from '../Images/posterdesign10.png.jpg';
import logo10 from '../Images/posterdesign11.png';
import logo11 from '../Images/posterdesign12.png';
import logo12 from '../Images/posterdesign13.png';
import logo13 from '../Images/posterdesign14.png';
import logo14 from '../Images/posterdesign14.png';
import logo15 from '../Images/posterdesign15.png';
import logo16 from '../Images/posterdesign16.png';
import logo17 from '../Images/posterdesign17.png';
import logo18 from '../Images/posterdesign18.png';
import logo19 from '../Images/posterdesign19.png';
import logo20 from '../Images/posterdesign20.png';
import logo21 from '../Images/posterdesign21.png';
import logo22 from '../Images/posterdesign22.png';
import logo23 from '../Images/posterdesign23.png';
import logo24 from '../Images/posterdesign24.png';
import logo25 from '../Images/posterdesign25.png';
import logo26 from '../Images/posterdesign26.png';
import logo27 from '../Images/posterdesign27.png';
import logo28 from '../Images/posterdesign28.png';
import logo29 from '../Images/posterdesign29.png';
import logo30 from '../Images/posterdesign30.png';
import logo31 from '../Images/posterdesign31.png';
import logo32 from '../Images/posterdesign32.png';
import logo33 from '../Images/posterdesign33.png';
import logo34 from '../Images/posterdesign35.png';
import logo35 from '../Images/posterdesign36.png';
import logo36 from '../Images/posterdesign37.png';
import logo37 from '../Images/posterdesign14.png';
import logo38 from '../Images/postdesign.png';
import logo39 from '../Images/postdesign5.png';
import logo40 from '../Images/postdesign6.png';

function SocialMedia() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
     logo3,  logo6,
    ,logo16,logo19,logo25
    ,logo28,logo32,logo35,logo36,logo38,
  ];

  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of Social media & graphics</h1>

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

export default SocialMedia;
