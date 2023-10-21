// components/VideoCollage.js

import React from 'react';

const VideoCollage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="relative" style={{ paddingTop: '177%' }}>
          <iframe
            src="2.mp4"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowfullscreen
            controls
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="relative" style={{ paddingTop: '177%' }}>
          <iframe
            src="3.mp4"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowfullscreen
            controls
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="relative" style={{ paddingTop: '177%' }}>
          <iframe
            src="1.mp4"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowfullscreen
            controls
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCollage;
