import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import { StepItem as StepItemType } from '../types';

const StepItem: React.FC<{ item: StepItemType, isLast: boolean }> = ({ item, isLast }) => (
    <div className="relative flex-1">
        <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-base-200 border-2 border-brand-gold text-brand-gold font-bold text-2xl">
                {item.step}
            </div>
            {!isLast && <div className="flex-grow border-t-2 border-dashed border-base-300 mx-4"></div>}
        </div>
        <h3 className="text-xl font-bold text-content-primary mb-2">{item.title}</h3>
        <p className="text-content-secondary">{item.description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary">
                        Get Started in 3 Simple Steps
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-content-secondary">
                        Your journey to smarter trading is just a few clicks away.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-12 md:gap-8">
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <StepItem key={index} item={step} isLast={index === HOW_IT_WORKS_STEPS.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;