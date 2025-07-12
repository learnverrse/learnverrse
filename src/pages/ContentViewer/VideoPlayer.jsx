import React from 'react'
import { Play, Volume2, Maximize, MoreVertical } from 'lucide-react';

const VideoPlayer = ({ lesson, isPlaying, currentTime, duration, onTogglePlay, onSeek }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      {/* Video Player - Reduced height on desktop */}
      <div 
        className="bg-cover bg-center flex items-center justify-center cursor-pointer
                   aspect-video md:aspect-[16/8] lg:aspect-[16/7]"
        style={{ backgroundImage: `url('${lesson.backgroundImage}')` }}
        onClick={onTogglePlay}
      >
        {!isPlaying && (
          <button className="w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 md:ml-2" />
          </button>
        )}
        {isPlaying && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="text-white text-lg">Playing...</div>
          </div>
        )}
      </div>

      {/* Video Controls - Fixed position */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center justify-between text-white text-sm mb-2">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center space-x-4">
            <Volume2 className="w-5 h-5" />
            <Maximize className="w-5 h-5" />
            <MoreVertical className="w-5 h-5" />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="h-1 bg-white/30 rounded-full cursor-pointer" onClick={onSeek}>
          <div 
            className="h-full bg-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;