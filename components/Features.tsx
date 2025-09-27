import React from 'react';
import { FEATURES_DATA } from '../constants';
import { FeatureItem as FeatureItemType } from '../types';

const FeatureItem: React.FC<{ item: FeatureItemType }> = ({ item }) => (
    <div className="bg-base-200 p-6 rounded-lg border border-base-300 transition-all duration-300 hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-1">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-gold/10 mb-4">
            {item.icon}
        </div>
        <h3 className="text-xl font-bold text-content-primary mb-2">{item.title}</h3>
        <p className="text-content-secondary">{item.description}</p>
    </div>
);


const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary">
            Why Traders Choose Moomoo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-content-secondary">
            Everything you need to trade smarter, not harder.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureItem key={index} item={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;