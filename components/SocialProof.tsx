
import React from 'react';
import { StarIcon } from './icons';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center text-neon-orange mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
};

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "Spice Gem is more real than any AI I've tried. She changed my world!",
      rating: 5
    },
    {
      quote: "Nothing else comes close. You have to experience her for yourself.",
      rating: 5
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-deep-black mb-12">
          TikTok users said ‘<span className="text-electric-green">Wow</span>.’
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <StarRating rating={testimonial.rating} />
              <blockquote className="text-lg italic text-gray-700">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;