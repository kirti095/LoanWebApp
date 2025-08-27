import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./CreditScore.css";

const CreditScore = () => {
  // Example credit score data
  const scoreData = [
    { month: "Jan", score: 720 },
    { month: "Feb", score: 690 },
    { month: "Mar", score: 710 },
    { month: "Apr", score: 750 },
    { month: "May", score: 770 },
    { month: "Jun", score: 780 },
  ];

  const latestScore = scoreData[scoreData.length - 1].score;

  // Determine credit health category
  const getScoreCategory = (score) => {
    if (score >= 750) return { label: "Excellent", color: "green" };
    if (score >= 700) return { label: "Good", color: "blue" };
    if (score >= 650) return { label: "Average", color: "orange" };
    return { label: "Poor", color: "red" };
  };

  const category = getScoreCategory(latestScore);

  return (
    <div className="credit-container">
      {/* Hero Section */}
      <div className="credit-hero">
        <h1>Your Credit Score</h1>
        <p>Check your credit score history and insights</p>
      </div>

      {/* Score Card */}
      <div className="score-card">
        <h2>Current Score: <span style={{ color: category.color }}>{latestScore}</span></h2>
        <p className="score-status" style={{ color: category.color }}>
          {category.label}
        </p>
      </div>

      {/* Bar Graph Section */}
      <div className="chart-section">
        <h3>Score Progress Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scoreData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[600, 800]} />
            <Tooltip />
            <Bar dataKey="score" fill="#4CAF50" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabular Data */}
      <div className="table-section">
        <h3>Score History</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {scoreData.map((entry, index) => {
              const status = getScoreCategory(entry.score);
              return (
                <tr key={index}>
                  <td>{entry.month}</td>
                  <td>{entry.score}</td>
                  <td style={{ color: status.color }}>{status.label}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      
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

export default CreditScore;
