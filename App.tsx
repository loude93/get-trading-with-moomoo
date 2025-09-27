import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-base-100 text-content-primary font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Offer />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
