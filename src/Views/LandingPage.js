import React from 'react';

// Component Imports
import Navbar from '../Components/LandingComponents/Navbar';
import Hero from '../Components/LandingComponents/Hero';
import About from '../Components/LandingComponents/About';
import Footer from '../Components/LandingComponents/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default LandingPage;
