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
          {/* TikTok Embed Placeholder 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md flex items-center justify-center p-8 min-h-[400px]">
            <div className="text-center text-gray-500">
              <p className="font-bold text-lg">Your Featured TikTok Video</p>
              <p className="text-sm">To embed a video, go to TikTok, click the "Embed" button on a video, copy the code, and paste it here.</p>
            </div>
          </div>

          {/* TikTok Embed Placeholder 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md flex items-center justify-center p-8 min-h-[400px]">
             <div className="text-center text-gray-500">
              <p className="font-bold text-lg">Another Featured TikTok Video</p>
              <p className="text-sm">You can feature the best user-generated content here to show real people having amazing experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCreations;
