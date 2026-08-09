// src/components/HealthServices.jsx
import React, { useState } from "react";
import "./HealthServices.css";

const faqs = [
  {
    question: "What is Health Services Loan?",
    answer: "A loan designed to cover medical expenses, insurance, and health emergencies quickly with flexible EMI options."
  },
  {
    question: "Can I use it for family medical bills?",
    answer: "Yes, our health services loan covers both individual and family healthcare needs."
  },
  {
    question: "How fast is the approval?",
    answer: "Approval is instant with minimal documentation when you apply online."
  },
];

const HealthServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="health-container">
      {/* Hero Section */}
      <section className="health-hero">
        <div className="hero-text">
          <h1>Health Services Loan</h1>
          <p>
            Stay worry-free in medical emergencies. Get instant funds for healthcare expenses,
            insurance, and treatments with easy EMI options.
          </p>
          <button className="health-btn" onClick={() => navigate("/offers")} > Get Started </button>
        </div>
        <div className="hero-img">
          <img src="/image/health-services-top-banner.webp" alt="Health Services" />
        </div>
      </section>

      {/* Services Section */}
      <section className="health-services">
        <h2>Our Health Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/image/insurance.png" alt="Insurance" />
            <h3>Health Insurance</h3>
            <p>Affordable health insurance plans to protect your family’s well-being.</p>
          </div>
          <div className="service-card">
            <img src="/image/loan.png" alt="Emergency Loan" />
            <h3>Emergency Medical Loan</h3>
            <p>Quick loans for unexpected hospital bills and urgent medical needs.</p>
          </div>
          <div className="service-card">
            <img src="/image/consult.png" alt="Consultation" />
            <h3>Teleconsultation</h3>
            <p>Get access to online doctor consultations anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="health-benefits">
        <h2>Why Choose Our Health Services?</h2>
        <ul>
          <li>✅ Instant Loan Approvals</li>
          <li>✅ Low Interest Rates</li>
          <li>✅ Coverage for Family Members</li>
          <li>✅ Cashless Hospitalization Options</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="health-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

       {/* Footer Section */}
      <footer className="pay-emi-footer">
        <p className="faq-note">
            If you have any questions related to repayment, please visit the <span className="faq-link">FAQs</  span> section to know more.
        </p>

       <div className="footer-logo">HOME CREDIT</div>

       <div className="footer-links">
        <span>Privacy Policy</span>
        <span>RBI Disclaimer</span>
        <span>Corporate Governance</span>
       </div>

       <div className="footer-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
       </div>

       <p className="copyright">
          Copyright © Home Credit. All rights reserved
       </p>
      </footer>
    </div>
  );
};

export default HealthServices;
