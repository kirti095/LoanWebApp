import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const PersonalLoan = () => (
  <div className="product-page">
    <h1>Personal Loan</h1>
    <p className="subheading">Paayein ₹4.8 Lakh tak ka Personal Loan • EMI starts at ₹929/Month</p>
    <div className="steps">
      {[
        'Enter your phone number and download the app',
        'Get instant online approval',
        'Disbursal within hours'
      ].map((step, idx) => (
        <div key={idx} className="step-card">
          <div className="step-index">{idx + 1}</div>
          <p>{step}</p>
        </div>
      ))}
    </div>
    <Link to="/apply" className="ew-cta-btn">Buy Now</Link>
    <section className="info">
      <h2>Why Choose This Loan?</h2>
      <ul>
        <li>100% online process, no branch visit</li>
        <li>Only 2 documents required (PAN & address proof)</li>
        <li>Loan amount up to ₹4.8 Lakh</li>
      </ul>
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

export default PersonalLoan;
