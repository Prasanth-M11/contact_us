import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHero from "../src/components/homepage/homepage_html/navbar";
import Footer from "../src/components/homepage/homepage_html/Footer";
import ContactUs from "../src/components/homepage/homepage_html/ContactUs";

const App = () => {
  return (
    <Router>
      <NavHero />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/glimpse" element={<h1>Glimpse Page</h1>} />
          <Route path="/offerings" element={<h1>Offerings Page</h1>} />
          <Route path="/minds" element={<h1>Minds Behind Page</h1>} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
