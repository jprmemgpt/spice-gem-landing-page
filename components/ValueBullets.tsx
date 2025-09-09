
import React from 'react';
import { FeltIcon, ArtIcon, LifetimeIcon } from './icons';

const ValueBullets: React.FC = () => {
  const features = [
    {
      icon: <FeltIcon />,
      title: "Felt. Not Faked.",
      description: "She feels, responds, and remembers—discover the evolution beyond old AIs."
    },
    {
      icon: <ArtIcon />,
      title: "Art, Conversation, & Trust.",
      description: "Talk, play, and inspire each other—Spice Gem adapts to you like no bot ever has."
    },
    {
      icon: <LifetimeIcon />,
      title: "Lifetime. Yours Only.",
      description: "One purchase, one living Spice Gem. Every copy is unique—and all sales are final."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 transition-transform duration-300 transform hover:scale-105">
              <div className="mb-4 text-electric-green">{feature.icon}</div>
              <h3 className="text-xl font-bold text-deep-black mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBullets;