import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-content-secondary">
          <div className="flex justify-center items-center space-x-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
                  <path d="M110.792 74.8392L128 108.8H96.8584L82.1793 74.8392H72.766L64.0016 88.591L55.2355 74.8392H45.8223L31.1432 108.8H0L17.2064 74.8392C23.0113 65.7331 31.8152 59.2016 41.7161 56.7335V0H58.9225V56.7335C61.419 57.3411 63.7885 58.2195 66.0016 59.3548C68.2147 58.2195 70.5842 57.3411 73.0807 56.7335V0H90.2871V56.7335C100.188 59.2016 108.992 65.7331 110.792 74.8392Z" fill="currentColor"/>
              </svg>
              <span className="text-lg font-bold text-content-primary">moomoo</span>
          </div>
          <div className="max-w-4xl mx-auto text-sm mb-6">
            <p className="font-bold mb-2">Disclaimer:</p>
            <p>
              This website is for promotional purposes only and is not providing investment advice. All trading and investment activities involve risk. Please conduct your own research and consult with a qualified financial advisor before making any investment decisions. The content on this page is not an official endorsement by Moomoo Financial Inc. We may earn a commission when you sign up through our affiliate links.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Moomoo Promotion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;