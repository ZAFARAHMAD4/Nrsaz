import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/LogoDesign.css';
import { Link } from 'react-router-dom';

// Import images
import logo1 from '../Images/weblogo.png';
import logo2 from '../Images/weblogo2.png';
import logo3 from '../Images/spotify.png';
import logo4 from '../Images/chatwithfrend.png';
import logo5 from '../Images/epassbook.png';
import logo6 from '../Images/claver.png';
import logo7 from '../Images/RSKD.png';


function Webdesign() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

const galleryImages = [
  {
    category: 'Online Examination System Using Blockchain and IPFS ',
    img: logo1,
    description: 'A online examination system most conducting exam online secure and safe Application with Database management.',
    link: 'https://onine-exam.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Blockchain','IPFS','BOOTSRAP5']
  },
  {
    category: 'eCommerce Websites',
    img: logo2,
    description: 'Create a unique brand product and sale online with responsive websites with most optimization and Free delivery and increase more bussiness products etc.',
    link: 'https://medicalstore-eta.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    category: 'Chat with Friend',
    img: logo4,
    description: 'A real-time chat application using MERN stack with Firebase authentication and Socket.IO for messaging..',
    link: 'https://chatwithfriend.onrender.com/',
    tech: ['MERN Stack', 'Firebass', 'Socket.io', 'DaisyUI','BOOTSRAP5']
  },
  {
    category: 'Spotify Clone',
    img: logo3,
    description: 'A sleek clone of Spotify built using ReactJS with Tailwind CSS. Includes dynamic playlists, audio playback, and responsive design..',
    link: 'https://clonespotify-navy.vercel.app/',
    tech: ['TailWind CSS','React Router','Audio PLayer', 'React']
  },
  {
    category: 'E-Passbook',
    img: logo5,
    description: 'A Laravel-based financial management system that tracks loan spending and lending amounts with secure transaction history.',
    link: 'https://epassbook.vercel.app/',
    tech: ['Laravel','MySql','Bootstrap5','Firebass Authentication' ,'React']
  },
  {
    category: 'Clevar E-Commerce',
    img: logo6,
    description: 'A feature-rich e-commerce platform with product management, order tracking, and secure payment integration.',
    link: 'https://clevar.rf.gd/',
    tech: ['Laravel','MySql','Bootstrap5','Firebass Authentication' ,]
  },
  {
    category: 'RSKD School Website',
    img: logo7,
    description: 'A responsive school website built using Laravel, featuring student management, event updates, and an interactive gallery.',
    link: 'https://rskdbelaparjaunpur.com/?i=1',
    tech: ['Laravel','MySql','PHP','MySql','CSS',]
  },
];

  return (
    <div className="logo-gallery-page">
      <h1 className="gallery-title" data-aos="fade-up">Gallery of WebDesign Templates</h1>

      <div className="container">
        <div className="row">
          {galleryImages.map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index} data-aos="zoom-in">
              <div className="service-card">
                <img src={img.img} alt={img.category} className="service-icon" />
              <h3>{img.category}</h3>
                <p>{img.description}</p>
                <div className="tech-badges">
                  {img.tech.map((badge, i) => (
                    <span className="badge" key={i}>{badge}</span>
                  ))}
                </div>
                <br />
                 <a href={img.link} target="_blank" rel="noopener noreferrer">
                        <button className='service-btn'>Visit Full Website</button>
                        
                        </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Webdesign;
