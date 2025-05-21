import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/FAQs.css';

function FAQs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqData = [
    {
      question: "What is your typical delivery time?",
      answer: "Most projects are delivered within 3–7 business days, depending on the complexity.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we offer 2–3 free revisions based on the package. Additional revisions may cost extra.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, PayPal, Google Pay, and Bank Transfers.",
    },
    {
      question: "Can I get a custom quote for a specific project?",
      answer: "Absolutely! Just fill out our contact form or use the 'Get Custom Quote' button on the Pricing page.",
    },
    {
      question: "Do you provide source files?",
      answer: "Yes, final files (PSD, AI, MP4, PPT, etc.) are included as per the service.",
    },
    {
      question: "Is there any refund policy?",
      answer: "Refunds are provided only if the work hasn’t started. Once initiated, we follow a no-refund policy.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <h1 className="faqs-title" data-aos="fade-up">Frequently Asked Questions</h1>

      <div className="faqs-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            data-aos="fade-up"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
