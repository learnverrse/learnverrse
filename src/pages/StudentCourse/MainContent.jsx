import React from 'react';
import ResourcePreview from './ResourcePreview';
import download_arrow from './images/download_arrow.svg'




export default function MainContent({ resourceType, course, selectedOutline }) {
  const titleToShow = selectedOutline || course.mainContentTitle;

  return (
    <div className="flex w-full flex-grow flex-col overflow-y-auto p-6 text-left md:h-full md:w-2/3 md:px-10">
      <h1 className="font-inter mb-4 text-3xl font-semibold">{titleToShow}</h1>

      <ResourcePreview resourceType={resourceType} />

      <p className="font-inter text-black-600 text-xl font-semibold">
        {course.description}
      </p>

      <div className="mt-10 flex w-full flex-row justify-between space-x-4">
        <button className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700">
          Start Quiz
        </button>
        <a
          href={resourceType === 'video' ? '/video.mp4' : '/file.pdf'}
          download
          className="flex cursor-pointer flex-row gap-3 rounded-lg border-2 border-purple-600 px-4 py-2 text-purple-600 transition hover:bg-purple-50"
        >
        <img src={download_arrow} alt="" />  Download
        </a>
      </div>
    </div>
  );
}
