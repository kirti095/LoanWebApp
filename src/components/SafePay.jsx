import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SafePay.css";

const SafePay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is SafePay?", a: "SafePay is a secure payment solution that protects your online transactions against fraud and unauthorized access." },
    { q: "How can I activate SafePay?", a: "You can activate SafePay by applying through our website and linking it to your EMI card or loan account." },
    { q: "Does SafePay work internationally?", a: "Yes, SafePay works globally wherever digital transactions are supported." },
    { q: "Is there any extra fee for SafePay?", a: "No hidden charges! SafePay is included as a part of your loan protection services." },
  ];

  return (
    <div className="safepay-container">
      {/* Hero Section */}
      <section className="safepay-hero">
        <div className="safepay-hero-text">
          <h1>SafePay – Secure Your Transactions</h1>
          <p>Experience worry-free digital payments with our advanced security system.</p>
          <button className="safepay-btn" onClick={() => navigate("/apply")} >Get Started</button>
        </div>
        <div className="safepay-hero-img">
          <img src="/image/safe-pay.jpeg" alt="SafePay Illustration" />
        </div>
      </section>

      {/* Why SafePay */}
      <section className="safepay-why">
        <h2>Why Choose SafePay?</h2>
        <div className="safepay-cards">
          <div className="safepay-card">
            <h3>🔒 Secure Transactions</h3>
            <p>End-to-end encryption keeps your payments safe from fraud.</p>
          </div>
          <div className="safepay-card">
            <h3>⚡ Instant Alerts</h3>
            <p>Get real-time notifications for every transaction you make.</p>
          </div>
          <div className="safepay-card">
            <h3>🌍 Global Access</h3>
            <p>Use SafePay anywhere, anytime without extra charges.</p>
          </div>
          <div className="safepay-card">
            <h3>🛡️ Fraud Protection</h3>
            <p>Stay protected from unauthorized access and fraudulent activities.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="safepay-steps">
        <h2>How It Works?</h2>
        <div className="safepay-step-container">
          <div className="safepay-step">1. Apply</div>
          <div className="safepay-step">2. Activate</div>
          <div className="safepay-step">3. Use</div>
          <div className="safepay-step">4. Stay Safe</div>
        </div>
      </section>

      {/* Customer Trust */}
      <section className="safepay-trust">
        <h2>Trusted by Millions</h2>
        <p>Over <span>10 Lakh+</span> users are already using SafePay for secure digital payments.</p>
      </section>

      {/* FAQ */}
      <section className="safepay-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="safepay-faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`safepay-faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.q}</h3>
              {activeIndex === index && <p>{item.a}</p>}
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

export default SafePay;
