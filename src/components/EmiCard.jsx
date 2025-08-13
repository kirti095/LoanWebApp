import React from 'react';
import './EMICard.css';
import emicardImage from '../image/emi.jpeg';

const EmiCard = () => (
  <div className="emicard-container">
    <div className="emicard-header">
      <h1>Home Credit Ujjwal EMI Card</h1>
      <p className="subheading">
        Shop now & pay later on easy EMIs – up to ₹75,000 pre-approved limit, 0% interest*, no joining fee*
      </p>
    </div>

    <div className="emicard-image">
      <img src= {emicardImage}  alt="EMI Card" />
    </div>

    <section className="emicard-steps">
      {[
        'Visit partner shop or online portal',
        'Instant approval & activate card',
        'Shop now & convert purchases into EMIs'
      ].map((step, idx) => (
        <div key={idx} className="step-card">
          <div className="step-number">{idx + 1}</div>
          <p>{step}</p>
        </div>
      ))}
    </section>

    <div className="apply-btn-container">
      <a href="/pay-emi" className="cta-btn">Apply for EMI Card</a>
    </div>

    <section className="emicard-section centered">
      <h2>Key Benefits</h2>
      <ul>
        <li>Up to ₹75,000 pre‑approved credit limit</li>
        <li>Use at 53,000+ partner stores (online & offline)</li>
        <li>0% interest*, no joining or processing fee*</li>
        <li>One-time documentation & digital activation</li>
        <li>No foreclosure charges</li>
        <li>Choose tenure from 3–12 months</li>
      </ul>
    </section>

    <section className="emicard-section centered">
      <h2>Eligibility & Fees</h2>
      <ul>
        <li>Indian citizens aged 18–60</li>
        <li>Valid ID & address proof, active bank account</li>
        <li>Monthly household income ≥ ₹25,000</li>
        <li><strong>Membership fee:</strong> ₹549 (one‑time); ₹99/year (waived on usage)</li>
      </ul>
    </section>

    <section className="emicard-section centered">
      <h2>How to Use the EMI Card</h2>
      <ol>
        <li>Select “Easy EMI” at checkout</li>
        <li>Choose Home Credit Ujjwal EMI Card</li>
        <li>Enter mobile & PAN for OTP verification</li>
      </ol>
    </section>

    <section className="emicard-section centered faq">
      <h2>FAQs</h2>
      <p><strong>Q: What is Ujjwal EMI Card?</strong><br />
        A: A digital card with up to ₹75k limit to shop on EMI*</p>
      <p><strong>Q: Physical card?</strong><br />
        A: No, it’s fully virtual — accessible via app</p>
      <p><strong>Q: How instant?</strong><br />
        A: Card is activated instantly post KYC & bank validation</p>
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

export default EmiCard;
