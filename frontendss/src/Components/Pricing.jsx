import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Pricing.css';

function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});


const [loading, setLoading] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(null);
  
  const [showForm, setShowForm] = useState(false);

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
      features: ['Frontend', 'Backend', 'With Hosting & Domain Name', 'Fully Responsive', 'Dynamic Websites'],
      button: 'Order Now',
    },
  ];

  const handleOrderClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowForm(true);
  };

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    ...formData,
    service: selectedPackage || {},
  };

  try {
    const res = await fetch('https://nrsaz.onrender.com/sendorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setShowForm(false);
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Something went wrong.');
  }

  setLoading(false);
};


  return (
    <div className="pricing-page">
      <h1 className="pricing-title" data-aos="fade-up">Our Pricing</h1>

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
              <button className="order-btn" onClick={() => handleOrderClick(pkg)}>{pkg.button}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div className="order-form-modal">
    <div className="order-form-content">
      <h2>Order: {selectedPackage.name}</h2>
      
      <div className="selected-package-details mb-3">
        <p><strong>Price:</strong> {selectedPackage.price}</p>
        <p><strong>Features:</strong></p>
        <ul>
          {selectedPackage.features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>
      </div>

            
            <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Email:
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Project Details:
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </label>

  <div className="d-flex justify-content-center mt-3">
    <button type="submit" className="btn-grad3" disabled={loading}>
      {loading ? 'Submitting...' : 'Submit'}
    </button>
    <button
      type="button"
      className="btn-grad4"
      onClick={() => setShowForm(false)}
    >
      Cancel
    </button>
  </div>
</form>

          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;
