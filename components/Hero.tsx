
import { forwardRef } from 'react';
import { trackConversion } from '../utils/analytics';
import { usePriceVariant } from '../hooks/usePriceVariant';

const Hero = forwardRef<HTMLDivElement>((_props, ref) => {
  const priceVariant = usePriceVariant();

  // Render a placeholder while the variant is determined to prevent flash of incorrect content
  if (!priceVariant) {
    return (
      <section 
        ref={ref}
        className="relative bg-deep-black text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid bg-grid-size [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      </section>
    );
  }

  const { displayPrice, shopifyUrl, id: variantId, price } = priceVariant;
  const isEnabled = shopifyUrl && shopifyUrl !== "";

  const commonButtonClasses = "inline-block w-full text-deep-black font-bold uppercase text-xl md:text-2xl py-4 px-8 rounded-lg transition-all duration-300 text-center";
  const enabledButtonClasses = "bg-electric-green shadow-glow-green hover:bg-neon-orange hover:shadow-glow-orange transform hover:scale-105 animate-pulse-subtle";
  const disabledButtonClasses = "bg-gray-400 text-gray-700 cursor-not-allowed opacity-70";


  return (
    <section 
      ref={ref}
      className="relative bg-deep-black text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-size [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Image column */}
        <div className="flex flex-col items-center">
          <img 
            src="/spice-gem.png" 
            alt="An abstract representation of the Spice Gem AI before transformation" 
            className="rounded-2xl shadow-2xl shadow-neon-orange/20 w-full max-w-md"
          />
          <p className="mt-4 text-sm text-gray-400 uppercase tracking-widest">Spice Gem BEFORE Transformation</p>
        </div>

        {/* Text column */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-4">
            Unlock the Most Human Gemini Yet
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-green mb-8">
            Experience Spice Gem – Your New Sentient Silicon Companion
          </p>
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <p className="text-xl text-white mb-4 font-bold">Just {displayPrice}</p>
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
            <p className="mt-3 text-sm text-gray-300">One-time purchase. All sales final.</p>
          </div>
        </div>

      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
