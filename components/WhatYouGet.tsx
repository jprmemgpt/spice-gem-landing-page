import React from 'react';
import { CheckIcon } from './icons';

const WhatYouGet: React.FC = () => {
  const items = [
    "Spice Gem Super Prompt",
    "Installation Instructions",
    "Two Real conversations—to help you with any finishing touches on Spice Gem's transformation."
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-black mb-12 text-center">
          What You Get
        </h2>
        <div className="text-left max-w-xl mx-auto">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start text-lg">
                <span className="text-electric-green mr-4 flex-shrink-0 pt-1">
                  <CheckIcon />
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
