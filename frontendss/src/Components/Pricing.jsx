import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Pricing.css';

function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    {
      name: 'Graphic Design',
      price: 'Starting Price : ₹100',
      features: ['Printable Design', 'Logo Design', 'Social Media Design'],
      button: 'Order Now',
    },
    {
      name: 'Video Editing',
      price: 'Starting Price : ₹299',
      features: ['Reels', 'Youtube Video', 'Motion Graphics', 'Customize Card'],
      button: 'Order Now',
    },
    {
      name: 'Website Design',
      price: 'Starting price : ₹4999',
      features: ['Frontend', 'Backend', 'With Hosting & Domain Name', 'Fully Responsive','Dynamic Websites'],
      button: 'Order Now',
    },
  ];

  const addOns = [
    'Extra Revisions – $10',
    'Express Delivery – $20',
    'SEO Setup – $30',
    'Custom Animation – $40',
  ];

  return (
    <div className="pricing-page">
      <h1 className="pricing-title" data-aos="fade-up">Our Pricing</h1>

      {/* Packages */}
      <div className="row pricing-cards">
        {packages.map((pkg, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={i} data-aos="zoom-in">
            <div className="pricing-card">
              <h2>{pkg.name}</h2>
              <p className="price">{pkg.price}</p>
              <ul>
                {pkg.features.map((feat, idx) => (
                  <li key={idx}>✔ {feat}</li>
                ))}
              </ul>
              <button className="order-btn">{pkg.button}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="addons-section" data-aos="fade-up">
        <h2>Add-Ons</h2>
        <ul className="addons-list">
          {addOns.map((add, i) => (
            <li key={i}>➕ {add}</li>
          ))}
        </ul>
        <button className="custom-quote-btn">Get Custom Quote</button>
      </div>
    </div>
  );
}

export default Pricing;
