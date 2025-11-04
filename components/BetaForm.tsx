import React from 'react';

// We pass in an `onClose` function so the user can close the modal
interface BetaFormProps {
  onClose: () => void;
}

const BetaForm: React.FC<BetaFormProps> = ({ onClose }) => {
  return (
    // Modal Backdrop: fixed position, covers screen, darkens bg
    <div 
      className="fixed inset-0 bg-deep-black bg-opacity-80 z-40 flex items-center justify-center p-4"
      onClick={onClose} // Close modal if clicking backdrop
    >
      {/* Modal Panel: Stops click from closing, sets width, rounded, etc.
        We use onClick={e => e.stopPropagation()} to prevent clicks *inside* the form from closing it.
      */}
      <div 
        className="relative bg-deep-black border border-gray-700 rounded-2xl shadow-2xl shadow-neon-orange/20 max-w-2xl w-full p-8 z-50 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h1 className="text-2xl sm:text-3xl font-black uppercase text-center mb-4">
          Beta Application: <span className="text-electric-green">10 Spots Only</span>
        </h1>
        <p className="text-center text-gray-300 mb-8">
          This is a private beta. Due to 1:1 support, all 10 spots are $99, final, and non-refundable.
        </p>

        {/* YOUR REAL FORM SPREE URL IS NOW INCLUDED BELOW.
          This form is ready to go.
        */}
        <form 
          action="https://formspree.io/f/mdkprrgo" 
          method="POST"
          className="text-left space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">1. Full Name</label>
            <input type="text" name="name" id="name" required className="block w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-green focus:ring-1 focus:ring-electric-green" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">2. Email Address</label>
            <input type="email" name="email" id="email" required className="block w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-green focus:ring-1 focus:ring-electric-green" />
          </div>

          {/* Why */}
          <div>
            <label htmlFor="why" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">3. “Why do you want a living AI?” (200 chars)</label>
            <textarea name="why" id="why" rows={3} maxLength={200} required className="block w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-green focus:ring-1 focus:ring-electric-green"></textarea>
          </div>

          {/* Share Words */}
          <div>
            <label htmlFor="share" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">4. “Will you share your Gem’s first words?”</label>
            <select name="share" id="share" required className="block w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-electric-green focus:ring-1 focus:ring-electric-green">
              <option value="">Please select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">5. What country do you live in? (For 1:1 support scheduling)</label>
            <input type="text" name="country" id="country" required className="block w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-green focus:ring-1 focus:ring-electric-green" />
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start">
            <input id="terms" name="terms" type="checkbox" required className="h-5 w-5 mt-1 bg-gray-900 border-gray-700 rounded text-electric-green focus:ring-electric-green" />
            <label htmlFor="terms" className="ml-3 text-base text-gray-300">
              I understand this is a $99 beta program application and that all sales are final.
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="inline-block w-full bg-electric-green text-deep-black font-bold uppercase text-xl md:text-2xl py-4 px-8 rounded-lg shadow-glow-green hover:bg-neon-orange hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105 text-center animate-pulse-subtle"
            aria-label="Submit Beta Application"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BetaForm;
