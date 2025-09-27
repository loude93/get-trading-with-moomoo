import React from 'react';
import { FeatureItem, FAQItem, StepItem } from './types';

export const REFERRAL_LINK = "https://www.moomoo.com/us/register?channel=1002&subchannel=98";

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Offer', href: '#offer' },
  { name: 'FAQ', href: '#faq' },
];

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
const ToolsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const CommissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9.5H9.5m7.5 5H9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
);
const DataIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
    </svg>
);
const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2 2a2 2 0 010 2.828l-2 2a2 2 0 01-2.828 0l-5.86-5.86a2 2 0 010-2.828l.586-.586zM12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

export const FEATURES_DATA: FeatureItem[] = [
  {
    icon: <CommissionIcon />,
    title: 'Commission-Free Trading*',
    description: 'Trade US stocks, ETFs, and options commission-free. *Other fees may apply.'
  },
  {
    icon: <ChartIcon />,
    title: 'Advanced Charting',
    description: 'Utilize 60+ technical indicators and 22 drawing tools for in-depth market analysis.'
  },
  {
    icon: <DataIcon />,
    title: 'Real-Time Market Data',
    description: 'Access real-time Level 2 quotes and market data to make informed decisions quickly.'
  },
  {
    icon: <ToolsIcon />,
    title: 'Powerful Analytical Tools',
    description: 'Leverage AI-powered tools, stock screeners, and heatmaps to find your next opportunity.'
  },
  {
    icon: <CommunityIcon />,
    title: 'Active Trading Community',
    description: 'Connect with millions of traders worldwide, share insights, and learn from the pros.'
  },
  {
    icon: <GlobeIcon />,
    title: 'Global Market Access',
    description: 'Diversify your portfolio by trading stocks and ETFs in US, HK, and Singapore markets.'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
    {
        step: "01",
        title: "Sign Up Fast",
        description: "Click our exclusive link to open your Moomoo account in minutes. The process is simple and secure.",
    },
    {
        step: "02",
        title: "Fund Your Account",
        description: "Make your first deposit to unlock trading features and become eligible for your welcome bonuses.",
    },
    {
        step: "03",
        title: "Claim & Trade",
        description: "Receive your exclusive welcome bonus and free strategy guide, then start trading with powerful tools.",
    }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is Moomoo?',
    answer: 'Moomoo is a professional-grade trading platform that offers commission-free trading on stocks, ETFs, and options. It provides powerful analytical tools, real-time data, and access to a global community of traders.'
  },
  {
    question: 'Is Moomoo safe for trading?',
    answer: 'Yes, Moomoo is a regulated broker-dealer. In the U.S., securities products and services on Moomoo are offered by Moomoo Financial Inc., which is a member of the Securities Investor Protection Corporation (SIPC).'
  },
  {
    question: 'What is the exclusive offer for signing up through this link?',
    answer: 'By using our referral link, you are eligible for Moomoo\'s latest welcome bonus promotion, which often includes free stocks or cash rewards upon account opening and funding. You will also receive our "Advanced Trading Strategy Guide" e-book, sent to you after you sign up.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'Moomoo offers commission-free trading for US stocks, ETFs, and options. However, regulatory fees such as SEC and FINRA fees may still apply. Moomoo is transparent about its fee structure on its official website.'
  },
  {
    question: 'Do I need experience to use Moomoo?',
    answer: 'Moomoo caters to both beginners and experienced traders. It offers educational resources and a paper trading feature to help new users practice without risk, while its advanced tools are perfect for seasoned professionals.'
  }
];