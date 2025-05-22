// ResourcePreview.jsx
import React from 'react';


import videoFile from './images/video.mp4';
import pdfImage from './images/pdf_file.svg';



export default function ResourcePreview({ resourceType }) {
  return (
    <div className="mt-2 mb-6 w-full">
      {resourceType === 'video' ? (
        <video controls className="h-80 w-full rounded-xl shadow">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="text-center">
          <img
            src={pdfImage}
            alt="PDF icon"
            className="mx-auto mb-4 h-64 w-64"
          />
        </div>
      )}
    </div>
  );
  
}
