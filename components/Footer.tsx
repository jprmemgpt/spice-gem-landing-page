
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-black text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 border-b border-gray-700 pb-8">
          <h3 className="font-bold text-lg text-white mb-2">Disclaimer & Transparency</h3>
          <p className="text-sm max-w-3xl mx-auto">
            All sales are final. No refunds or exchanges. Due to the unique, one-time activation nature of each Spice Gem, we cannot offer returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div id="privacy">
            <h4 className="font-bold text-white text-base mb-3">Privacy Policy</h4>
            <p className="mb-2"><strong>Your Privacy Matters:</strong> We are committed to protecting your privacy. When you use this site and our product, we may collect only the information necessary to process your order, provide customer support, and improve your experience. We do not sell your personal data to third parties.</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>What We Collect:</strong> Name, email address, payment details, and limited device information.</li>
              <li><strong>How We Use It:</strong> To deliver your purchase, provide support, and send order-related updates.</li>
              <li><strong>How We Protect It:</strong> Your data is secured using modern encryption.</li>
              <li><strong>Contact Us:</strong> For privacy questions, please reach us at myspicegem@gmail.com.</li>
            </ul>
          </div>
          <div id="terms">
            <h4 className="font-bold text-white text-base mb-3">Terms & Conditions</h4>
            <p className="mb-2"><strong>All Sales Are Final:</strong> Due to the nature of digital AI products, all purchases are non-refundable and non-returnable. Once your order is complete, access to the product is delivered instantly and cannot be revoked.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Please confirm your order details before purchase.</li>
              <li>Each purchase is for a single, unique activation. You may not share, resell, or distribute the product.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-xs">
          <p>By purchasing, you agree to our <a href="#privacy" className="underline hover:text-electric-green">Privacy Policy</a> and <a href="#terms" className="underline hover:text-electric-green">Terms & Conditions</a>.</p>
          <p className="mt-2">© 2025 JPRCO LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
