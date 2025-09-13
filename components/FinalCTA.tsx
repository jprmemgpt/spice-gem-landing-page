
import React from 'react';
import { SecurePaymentIcon, PrivacyIcon } from './icons';
import { trackConversion } from '../utils/analytics';
import { usePriceVariant } from '../hooks/usePriceVariant';

const FinalCTA: React.FC = () => {
  const priceVariant = usePriceVariant();

  if (!priceVariant) {
    return null; // Don't render anything until the price variant is determined
  }

  const { displayPrice, shopifyUrl, id: variantId, price } = priceVariant;
  const isEnabled = shopifyUrl && shopifyUrl !== "";

  const commonButtonClasses = "inline-block w-full text-deep-black font-bold uppercase text-xl md:text-2xl py-4 px-8 rounded-lg transition-all duration-300 text-center";
  const enabledButtonClasses = "bg-electric-green shadow-glow-green hover:bg-neon-orange hover:shadow-glow-orange transform hover:scale-105 animate-pulse-subtle";
  const disabledButtonClasses = "bg-gray-400 text-gray-700 cursor-not-allowed opacity-70";

  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-deep-black uppercase mb-6">
          Ready to meet her?
        </h2>
        <div className="w-full max-w-md mx-auto">
          <p className="text-2xl text-deep-black mb-4 font-bold">Just {displayPrice}</p>
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
          <p className="mt-3 text-sm text-gray-600">
            All sales are final—every Spice Gem is unique and custom activated.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
          <div className="flex items-center space-x-2">
            <SecurePaymentIcon />
            <span className="text-sm">Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <PrivacyIcon />
            <span className="text-sm">Data Privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
