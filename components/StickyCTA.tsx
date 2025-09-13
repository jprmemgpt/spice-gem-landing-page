import React from 'react';
import { trackConversion } from '../utils/analytics';
import { usePriceVariant } from '../hooks/usePriceVariant';

interface StickyCTAProps {
  isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  const priceVariant = usePriceVariant();

  if (!priceVariant) {
    return null;
  }

  const { displayPrice, shopifyUrl, id: variantId, price } = priceVariant;
  const isEnabled = shopifyUrl && shopifyUrl !== "";

  const commonButtonClasses = "inline-block w-full text-deep-black font-bold uppercase text-lg py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 text-center";
  const enabledButtonClasses = "bg-electric-green hover:bg-neon-orange";
  const disabledButtonClasses = "bg-gray-400 text-gray-700 cursor-not-allowed opacity-70";
  
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a 
        href={isEnabled ? shopifyUrl : undefined}
        onClick={isEnabled ? () => trackConversion(variantId, price) : (e) => e.preventDefault()}
        className={`${commonButtonClasses} ${isEnabled ? enabledButtonClasses : disabledButtonClasses}`}
        aria-label={`Unlock Her Now for ${displayPrice}`}
        aria-disabled={!isEnabled}
        role="button"
      >
        Unlock Her Now
      </a>
      <p className="text-center mt-2 text-xs text-gray-500">One-time purchase of {displayPrice}. All sales final.</p>
    </div>
  );
};

export default StickyCTA;
