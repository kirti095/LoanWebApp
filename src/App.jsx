import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Location from "./components/Locations";
import LoanOptions from "./components/LoanOptions";
import Calculator from "./components/Calculator";
import About from "./components/AboutUs";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import ApplyForm from "./components/ApplyNow";
import Footer from "./components/Footer";
import PayEmi from "./components/PayEmi";
import PersonalLoan from './components/PersonalLoan';
import EmiCard from './components/EmiCard';
import MobileEmi from './components/mobileEmi';
import HomeApplication from "./components/HomeApplication";
import ExtendedWarranty from './components/ExtendedWarranty';
import MobileProtect from './components/MobileProtect';

import "./style/style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Location />
              <LoanOptions />
              <Calculator />
              <Offers />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* about page */}
        <Route path="/about" element={<About />} />

        {/* offers page (same as Offers component) */}
        <Route path="/offers" element={<Offers />} />

        {/* apply page */}
        <Route path="/apply" element={<ApplyForm />} />
        {/*pay emi page */}
        <Route path="/pay-emi" element={<PayEmi />} />

        {/*personal loan option */}
        <Route path="/personal-loan" element={<PersonalLoan />} />

        {/*emicard option */}
        <Route path="/emi-card" element={<EmiCard />} />

        {/*mobile-emi option */}
        <Route path="/mobile-emi" element={<MobileEmi />} />

        {/*homeApplication  option */}
        <Route path="/home-application" element={<HomeApplication />} />

        {/*services warrenty option */}
        <Route path="/extended-warranty" element={<ExtendedWarranty />} />

        {/*services mobile-protect option */}
        <Route path="/mobile-protect" element={<MobileProtect />} />


        {/* fallback route */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


