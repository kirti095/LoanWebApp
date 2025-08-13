import React from 'react';
import { Link } from 'react-router-dom';
import './Extendedwarranty.css';
import warrantyImg from '../image/extended-warranty.jpg';
import icon1 from '../image/repair.jpeg';
import icon2 from '../image/shield.jpeg';
import icon3 from '../image/support.jpeg';

const ExtendedWarranty = () => {
  return (
    <div className="ew-container">
      {/* Hero Split Layout */}
      <section className="ew-hero">
        <div className="ew-left">
          <img src={warrantyImg} alt="Extended Warranty" className="ew-image" />
        </div>
        <div className="ew-right">
          <h1>Extend Your Warranty, Extend Your Peace of Mind</h1>
          <p>Our Extended Warranty plan gives your electronics extra protection after the manufacturer’s warranty ends.</p>
          <Link to="/home-application" className="ew-cta-btn">Buy Now</Link>
        </div>
      </section>

      {/* Features */}
      <section className="ew-features">
        <h2>Why Choose Our Warranty?</h2>
        <div className="ew-feature-grid">
          <div className="feature-card">
            <img src={icon1} alt="Repair" />
            <h4>Free Repairs</h4>
            <p>Zero cost repairs for covered damages.</p>
          </div>
          <div className="feature-card">
            <img src={icon2} alt="Shield" />
            <h4>Trusted Protection</h4>
            <p>Protects against electrical and mechanical breakdowns.</p>
          </div>
          <div className="feature-card">
            <img src={icon3} alt="Support" />
            <h4>24/7 Support</h4>
            <p>Always available for claim assistance.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="ew-timeline">
        <h2>How It Works</h2>
        <div className="timeline">
          <div className="step">🛒 <p>Buy with product</p></div>
          <div className="step">📩 <p>Get digital warranty</p></div>
          <div className="step">🧾 <p>Claim anytime</p></div>
          <div className="step">🔧 <p>Get free repair/replacement</p></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ew-faq">
        <h2>FAQs</h2>
        <details>
          <summary>Can I buy warranty later?</summary>
          <p>Yes, within 30 days of purchase.</p>
        </details>
        <details>
          <summary>Is accidental damage included?</summary>
          <p>No, it covers only mechanical/electrical failures.</p>
        </details>
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

export default ExtendedWarranty;

