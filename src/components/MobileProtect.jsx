import React from 'react';
import './MobileProtect.css';
import mobileProtectBanner from '../image/mobile-protect.jpeg';
import dropIcon from '../image/drop.jpg';
import breakIcon from '../image/break.jpeg';
import theftIcon from '../image/mobile-theft.jpeg';

const MobileProtect = () => {
  return (
    <div className="mp-container">
      {/* Hero Section */}
      <section className="mp-hero">
         <img src={mobileProtectBanner} alt="Mobile Protect"  className="mp-hero-img"/>
        <div className="mp-hero-text">
          <h1>Mobile Protect Plan</h1>
          <p>Secure your smartphone from accidental drops, screen cracks, water damage, and theft — all under one plan.</p>
        </div>
      </section>

      {/* Coverage Cards */}
      <section className="mp-coverage">
        <h2>What We Cover</h2>
        <div className="mp-cards">
          <div className="mp-card">
            <img src={dropIcon} alt="Water Damage" />
            <h4>Water Damage</h4>
            <p>Protection from accidental liquid spills or splashes.</p>
          </div>
          <div className="mp-card">
            <img src={breakIcon} alt="Screen Crack" />
            <h4>Screen Breakage</h4>
            <p>Free screen replacement for cracked or broken displays.</p>
          </div>
          <div className="mp-card">
            <img src={theftIcon} alt="Theft" />
            <h4>Theft Protection</h4>
            <p>Claim coverage if your mobile is stolen within plan terms.</p>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="mp-timeline">
        <h2>How It Works</h2>
        <div className="mp-steps">
          <div className="mp-step">📱 Buy the plan</div>
          <div className="mp-step">📝 Activate with your phone</div>
          <div className="mp-step">🔔 File a claim when needed</div>
          <div className="mp-step">🛠 Get repair or replacement</div>
        </div>
      </section>

      {/* Mobile Care Tips */}
      <section className="mp-tips">
        <h2>Pro Tips to Keep Your Phone Safe</h2>
        <ul>
          <li>Use a shockproof case and screen guard</li>
          <li>Avoid charging near water or overnight</li>
          <li>Enable device tracking and remote lock</li>
        </ul>
      </section>

      {/* CTA Banner */}
      <section className="mp-cta">
        <h3>Protect your mobile now with just ₹199/year</h3>
        <a href="/apply" className="activate-btn">Activate Protection</a>
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

export default MobileProtect;
