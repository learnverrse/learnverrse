import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Download } from 'lucide-react';

const PDFViewer = ({ pdfContent, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));

  if (!pdfContent) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6">
          <h2 className="text-lg font-semibold mb-4">No PDF Content Available</h2>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-full md:h-5/6 flex flex-col">
        {/* PDF Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{pdfContent.title}</h2>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleZoomOut} 
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-600">{Math.round(zoomLevel * 100)}%</span>
            <button 
              onClick={handleZoomIn} 
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <button 
              onClick={onClose} 
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
        
        {/* PDF Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Page Navigation - Hidden on small screens */}
          <div className="hidden md:block w-full md:w-1/4 border-r bg-gray-50 p-4 overflow-y-auto">
            <h3 className="font-medium mb-4">Pages</h3>
            <div className="space-y-2">
              {pdfContent.pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-full text-left p-2 rounded text-sm ${
                    currentPage === index 
                      ? 'bg-purple-100 text-purple-700 border border-purple-300' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* PDF Page Display */}
          <div className="flex-1 overflow-auto p-4">
            <div 
              className="bg-white shadow-lg rounded-lg p-4 md:p-8 mx-auto"
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'top left',
                width: `calc(100% / ${zoomLevel})`,
                maxWidth: '100%'
              }}
            >
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {pdfContent.pages[currentPage].content}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        {/* PDF Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 border-t bg-gray-50 gap-2">
          <div className="flex items-center space-x-2 order-2 md:order-1">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage + 1} of {pdfContent.pages.length}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(pdfContent.pages.length - 1, currentPage + 1))}
              disabled={currentPage === pdfContent.pages.length - 1}
              className="px-3 py-1 bg-gray-200 rounded text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <button 
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 order-1 md:order-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;