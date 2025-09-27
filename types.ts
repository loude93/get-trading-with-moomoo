import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
    step: string;
    title: string;
    description: string;
}
