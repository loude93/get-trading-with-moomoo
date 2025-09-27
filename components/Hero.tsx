import React from 'react';
import { REFERRAL_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop')"}}
    >
      <div className="absolute inset-0 bg-base-100 bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-content-primary tracking-tight">
          Elevate Your Trades with <span className="text-brand-gold">Moomoo</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-content-secondary">
          Access professional-grade tools, real-time data, and a global community. Sign up today and claim your exclusive welcome bonus to kickstart your journey.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-gold text-base-100 font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-gold/20 flex items-center justify-center space-x-2 active:scale-100 active:bg-opacity-80 active:shadow-md"
          >
            <span>Get Your Free Guide & Join Moomoo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-content-secondary">*Securities trading is offered by Moomoo Financial Inc., Member FINRA/SIPC.</p>
      </div>
    </section>
  );
};

export default Hero;