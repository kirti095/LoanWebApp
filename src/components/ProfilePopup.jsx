import React from "react";
import Modal from "react-modal";
import "./ProfilePopup.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const data = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Failed", value: 15 },
];

const COLORS = ["#28a745", "#ffc107", "#dc3545"];

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ProfilePopup = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-wrapper" overlayClassName="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onRequestClose}>×</button>

        {/* User Info */}
        <div className="card user-info">
          <h2>Welcome, Kirti Solanki</h2>
          <p><strong>Email:</strong> kirti@email.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
        </div>

        {/* Pie Chart */}
        <div className="card chart-card">
          <h3>EMI Status Overview</h3>
          <PieChart width={250} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Transactions */}
        <div className="card transaction-card">
          <h3>Recent Transactions</h3>
          <ul>
            <li>₹2,500 - Paid on 1 Aug 2025</li>
            <li>₹1,200 - Paid on 20 Jul 2025</li>
            <li>₹900 - Paid on 5 Jul 2025</li>
          </ul>
        </div>

        {/* Dates */}
        <div className="card date-card">
          <h3>Important Dates</h3>
          <ul>
            <li>Next EMI: 15 Aug 2025</li>
            <li>Loan Start Date: 15 Mar 2025</li>
            <li>Tenure End: 15 Mar 2026</li>
          </ul>
        </div>

        {/* Map */}
        <div className="card map-card">
          <h3>Your Location</h3>
          <MapContainer center={[28.6139, 77.209]} zoom={12} scrollWheelZoom={false} className="map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.6139, 77.209]} icon={customIcon}>
              <Popup>Current Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Modal>
  );
};

export default ProfilePopup;
