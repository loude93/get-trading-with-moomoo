import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { FAQItem as FAQItemType } from '../types';

const FAQItemComponent: React.FC<{ item: FAQItemType }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-base-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <span className="text-lg font-semibold text-content-primary">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-content-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-6 text-content-secondary">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-content-secondary">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <FAQItemComponent key={index} item={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
