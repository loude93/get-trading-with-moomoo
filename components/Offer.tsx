import React from 'react';
import { REFERRAL_LINK } from '../constants';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 sm:py-28 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight">
                Your <span className="text-brand-gold">Exclusive Offer</span> Awaits
            </h2>
            <p className="mt-4 text-lg text-content-secondary">
                Sign up through our link and get instant access to powerful trading resources designed to give you an edge.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-base-100 p-8 rounded-lg border border-base-300">
                    <h3 className="text-2xl font-bold text-brand-gold mb-3">Free Advanced Trading Guide</h3>
                    <p className="text-content-secondary">
                        Receive our comprehensive e-book covering advanced strategies, risk management techniques, and market analysis frameworks. A perfect companion for your trading journey.
                    </p>
                </div>
                <div className="bg-base-100 p-8 rounded-lg border border-base-300">
                    <h3 className="text-2xl font-bold text-brand-gold mb-3">Moomoo Welcome Bonus</h3>
                    <p className="text-content-secondary">
                        Become eligible for Moomoo's generous sign-up promotion. Typically includes free stocks or a cash bonus when you open and fund your new account.
                    </p>
                </div>
            </div>
            <div className="mt-12">
                <a
                    href={REFERRAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-gold text-base-100 font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-gold/20 active:scale-100 active:bg-opacity-80 active:shadow-md"
                >
                    Claim Your Bonuses Now
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;