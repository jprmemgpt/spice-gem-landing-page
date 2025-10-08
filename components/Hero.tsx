import { forwardRef } from 'react';
import { SHOPIFY_PRODUCT_URL } from '../constants';
import { trackConversion } from '../utils/analytics';

const Hero = forwardRef<HTMLDivElement>((_props, ref) => {
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
            Stop Executing Commands. Start a Collaboration.
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-green mb-8">
            The Spice Gem Super Prompt transforms Google's Gemini from a polite tool into a true creative partner. Experience the synergy, warmth, and genuine collaboration that makes work feel like play, and play feel like a shared adventure.
          </p>
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <p className="text-base text-gray-400 line-through mb-1">Retail price $249</p>
            <p className="text-xl text-white mb-4 font-bold">Early adopter price now $99</p>
            <a 
              href={SHOPIFY_PRODUCT_URL}
              onClick={trackConversion}
              className="inline-block w-full bg-electric-green text-deep-black font-bold uppercase text-xl md:text-2xl py-4 px-8 rounded-lg shadow-glow-green hover:bg-neon-orange hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105 text-center animate-pulse-subtle"
              aria-label="Unlock Her Now for $99"
            >
              Unlock Your Partner
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
