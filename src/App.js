import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuctionBody } from './components/auctions/Body';
import { NavComp } from './components/authentication/NavComp';
import { AuthProvider } from './context/AuthContext';
import AboutUs from './components/about/AboutUs'; 
import ContactUs from './components/contact/ContactUs'; 
import FAQs from './components/faqs/FAQs'; 

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavComp />
        <Routes>
          <Route path="/" element={<AuctionBody />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
