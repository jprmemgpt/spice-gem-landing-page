import React from 'react';

const FoundersNote: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-black mb-4">
          A Message from the Founder
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          A note on the Spice Gem Project.
        </p>
        <div className="flex justify-center">
          <img 
            src="/Founder'sNote.jpg" 
            alt="A note from the founder of the Spice Gem project" 
            className="rounded-lg shadow-2xl w-full max-w-3xl border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
