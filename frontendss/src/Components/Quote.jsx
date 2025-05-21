import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/Quote.css';

function Quote() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    deadline: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('email', form.email);
  formData.append('service', form.service);
  formData.append('budget', form.budget);
  formData.append('deadline', form.deadline);
  formData.append('message', form.message);
  if (form.file) {
    formData.append('file', form.file);
  }

  try {
    const res = await fetch('http://localhost:3000/send-quote', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      alert('Quote request submitted! We’ll contact you shortly.');
      setForm({
        name: '',
        email: '',
        service: '',
        budget: '',
        deadline: '',
        message: '',
        file: null,
      });
    } else {
      alert('Failed to send quote request.');
    }
  } catch (error) {
    console.error('Error submitting quote:', error);
    alert('Something went wrong.');
  }
};


  return (
    <div className="quote-page">
      <h1 className="quote-title" data-aos="fade-down">Request a Quote</h1>
      <p className="quote-subtitle" data-aos="fade-up">Tell us about your project, and we'll get back with a quote.</p>

      <form className="quote-form" onSubmit={handleSubmit} data-aos="zoom-in">
        <div className="row">
          <div className="col">
            <label>Your Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Service Type</label>
            <select name="service" value={form.service} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Website Design</option>
              <option>Logo Design</option>
              <option>Social Media Graphics</option>
              <option>PPT Design</option>
              <option>Video Editing</option>
              <option>Branding Kit</option>
            </select>
          </div>
          <div className="col">
            <label>Budget Range</label>
            <select name="budget" value={form.budget} onChange={handleChange} required>
              <option value="">Select</option>
              <option>$50 - $100</option>
              <option>$100 - $300</option>
              <option>$300 - $500</option>
              <option>$500+</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Deadline</label>
            <input type="date" name="deadline" value={form.deadline} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Reference File</label>
            <input type="file" name="file" onChange={handleChange} />
          </div>
        </div>

        <label>Project Details</label>
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Describe your project..." required></textarea>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
}

export default Quote;
