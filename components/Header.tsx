import React from 'react';
import { NAV_LINKS, REFERRAL_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
               <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
                    <path d="M110.792 74.8392L128 108.8H96.8584L82.1793 74.8392H72.766L64.0016 88.591L55.2355 74.8392H45.8223L31.1432 108.8H0L17.2064 74.8392C23.0113 65.7331 31.8152 59.2016 41.7161 56.7335V0H58.9225V56.7335C61.419 57.3411 63.7885 58.2195 66.0016 59.3548C68.2147 58.2195 70.5842 57.3411 73.0807 56.7335V0H90.2871V56.7335C100.188 59.2016 108.992 65.7331 110.792 74.8392Z" fill="currentColor"/>
                </svg>
              <span className="text-2xl font-bold text-content-primary">moomoo</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-content-secondary hover:text-brand-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-brand-gold text-base-100 font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-100 active:bg-opacity-80"
            >
              Claim Bonus Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;