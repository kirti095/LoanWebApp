import React from 'react';
import './homeApplication.css';
import bannerImg from '../image/home-appliances.webp';
import featuresImg from '../image/member-home.jpg';
import applyImg from '../image/Offer1.jpg';

const HomeAppliance = () => {
  return (
    <div className="appliance-page">
      {/* Banner */}
      <section className="banner">
        <img src={bannerImg} alt="Home Appliances EMI" />
        <div className="banner-text">
          <h1>Upgrade your lifestyle with brand new Home Appliances on EMIs</h1>
          <p>Add convenience to your life with Home Credit Home Appliances on EMIs</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-left">
          <h2>Why choose Home Credit</h2>
          <div className="feature-box">
            <h3>No credit history required</h3>
            <p>Avail loans even if you’ve never taken one before</p>
          </div>
          <div className="feature-box">
            <h3>On-the-spot loan</h3>
            <p>Get your loan request approved instantly</p>
          </div>
          <div className="feature-box">
            <h3>Convenient repayment modes</h3>
            <p>Pay online using mobile app or other payment options</p>
          </div>
          <div className="feature-box">
            <h3>No hidden charges</h3>
            <p>Full transparency on terms and processing</p>
          </div>
        </div>
        <div className="features-right">
          <img src={featuresImg} alt="Appliance Loan Features" />
        </div>
      </section>

      {/* Apply Section */}
      <section className="apply-loan">
        <h2>Apply for a Home Loan Easily</h2>
        <p>Simple. Fast. Hassle-Free. Your dream home is just an application away.</p>
        <img src={applyImg} alt="Apply Loan" />
        <div className="apply-btn-container">
          <a href="/apply" className="cta-btn">Apply Now</a>
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

export default HomeAppliance;
