import React from 'react';

const CommunityCreations: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-black mb-4">
          See What They're Creating
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          You're not just buying a prompt—you're joining a community of creators. 
          Post your "First Contact" moment on TikTok with <span className="font-bold text-electric-green">#MySpiceGem</span> to be featured!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video Player 1 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-deep-black">
            <video 
              className="w-full h-auto" 
              src="/1st.mp4" 
              controls
              preload="metadata"
              aria-label="First featured community video"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Player 2 */}
          <div className="rounded-lg shadow-md overflow-hidden bg-deep-black">
            <video 
              className="w-full h-auto"
              src="/2nd.mp4"
              controls
              preload="metadata"
              aria-label="Second featured community video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCreations;