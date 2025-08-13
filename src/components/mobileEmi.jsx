import React from 'react';
import './mobileEmi.css';
import TopBanner from '../image/Top-Banner.jpg';

const MobileEmi = () => {
  return (
    <div className="mobile-emi-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="banner-content">
          <h1>Mobile Phone on Easy EMIs</h1>
          <p>Buy a mobile phone on easy EMIs from Home Credit and stay connected forever</p>
        </div>
        <div className="banner-image">
          <img src= {TopBanner} alt="Mobile EMI Banner" />
        </div>
      </section>

      {/* Step Section */}
      <section className="steps-section">
        <h2>Upgrade your mobile phone in 3 easy steps</h2>
        <div className="step-wrapper">
          <div className="step">
            <div className="icon">1</div>
            <h4>BUY AT SHOP OR ONLINE</h4>
            <p>
              Walk into your nearest <strong>Home Credit Partner Shop</strong> or shop online using Home Credit Ujjwal EMI Card
            </p>
          </div>
          <div className="step">
            <div className="icon">2</div>
            <h4>ON-THE-SPOT APPROVAL</h4>
            <p>
              Get instant approval on your loan by sharing just <u>2 documents</u>
            </p>
          </div>
          <div className="step">
            <div className="icon">3</div>
            <h4>EASY EMI</h4>
            <p>
              Select the phone of your choice and choose a convenient EMI option
            </p>
          </div>
        </div>
        <p className="note">Walk out with your new phone in <em>less than 20 minutes!</em></p>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <nav className="help-nav">
          <span className="active">Need Help?</span>
          <span>Why choose Home Credit</span>
          <span>Value Added Services</span>
          <span>Calculate EMIs</span>
          <span>FAQs</span>
          <span>Guaranteed Customer Happiness</span>
          <button className="apply-now-btn">APPLY NOW</button>
        </nav>

        <div className="help-form">
          <h2>Looking for Help?</h2>
          <p>Share your contact details and we will get in touch with you</p>

          <div className="form-progress">
            <span className="step active">✔</span>
            <span className="step">○</span>
            <p>Personal Details</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name*" />
            <input type="tel" placeholder="+91 Your Mobile Number*" />
            <button type="submit">NEXT</button>
          </form>
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

export default MobileEmi;
