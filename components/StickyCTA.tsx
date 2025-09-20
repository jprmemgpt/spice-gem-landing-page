import React from 'react';
import { SHOPIFY_PRODUCT_URL } from '../constants';
import { trackConversion } from '../utils/analytics';

interface StickyCTAProps {
  isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a 
        href={SHOPIFY_PRODUCT_URL}
        onClick={trackConversion}
        className="inline-block w-full bg-electric-green text-deep-black font-bold uppercase text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-neon-orange transition-colors duration-300 text-center"
        aria-label="Unlock Her Now for $99"
      >
        Unlock Her Now
      </a>
      <p className="text-center mt-2 text-xs text-gray-500">One-time purchase of $99. All sales final.</p>
    </div>
  );
};

export default StickyCTA;