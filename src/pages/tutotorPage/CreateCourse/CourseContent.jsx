import { React, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FiEdit3, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router';
import { FaPlus } from "react-icons/fa";

const CourseContent = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'input section title',
      description: '',
      chapters: [
        {
          id: 1,
          title: 'input chapter title',
          subtitle: '',
          description: '',
          file: null
        }
      ]
    }
  ]);

  const [expandedSections, setExpandedSections] = useState({ 1: true }); 
  const [expandedChapters, setExpandedChapters] = useState({ 1: true });

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: 'input section title',
      description: '',
      chapters: []
    };
    setSections([...sections, newSection]);
    setExpandedSections(prev => ({ ...prev, [newSection.id]: true }));
  };

  const addChapter = (sectionId) => {
    const newChapterId = Date.now();
    setSections(sections.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            chapters: [
              ...section.chapters,
              { 
                id: newChapterId, 
                title: 'input chapter title',
                subtitle: '',
                description: '',
                file: null
              }
            ]
          }
        : section
    ));
    setExpandedChapters(prev => ({ ...prev, [newChapterId]: true }));
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const updateSectionTitle = (sectionId, newTitle) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? { ...section, title: newTitle }
        : section
    ));
  };

  const updateSectionDescription = (sectionId, newDescription) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? { ...section, description: newDescription }
        : section
    ));
  };

  const updateChapterTitle = (sectionId, chapterId, newTitle) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            chapters: section.chapters.map(chapter =>
              chapter.id === chapterId
                ? { ...chapter, title: newTitle }
                : chapter
            )
          }
        : section
    ));
  };

  const updateChapterField = (sectionId, chapterId, field, value) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            chapters: section.chapters.map(chapter =>
              chapter.id === chapterId
                ? { ...chapter, [field]: value }
                : chapter
            )
          }
        : section
    ));
  };

  const handleFileChange = (sectionId, chapterId, file) => {
    updateChapterField(sectionId, chapterId, 'file', file);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={2} />

      <div className="p-6">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-8">
            {/* Section Header */}
            <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg mb-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  {expandedSections[section.id] ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </button>
                <span className="font-medium text-black">Section {sectionIndex + 1}:</span>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-700"
                  placeholder="input section title"
                />
              </div>
              <button className="text-gray-400 hover:text-gray-600 flex">
                <FiEdit3 size={16} />
                <span className="ml-1 text-sm">edit</span>
              </button>
            </div>

            {/* Section Content - Collapsible */}
            {expandedSections[section.id] && (
              <>
                {/* Section Description */}
                <div className="mb-6 ml-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Description
                  </label>
                  <textarea
                    value={section.description}
                    onChange={(e) => updateSectionDescription(section.id, e.target.value)}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    rows={3}
                    placeholder="Enter section description..."
                  />
                </div>

                {/* Chapters */}
                {section.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="mb-6 ml-8">
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between p-4 border border-gray-400 rounded-lg mb-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleChapter(chapter.id)}
                          className="text-gray-600 hover:text-gray-800 flex items-center"
                        >
                          {expandedChapters[chapter.id] ? (
                            <FiChevronDown size={18} />
                          ) : (
                            <FiChevronUp size={18} />
                          )}
                        </button>
                        <span className="font-medium text-black">Chapter {chapterIndex + 1}:</span>
                        <input
                          type="text"
                          value={chapter.title}
                          onChange={(e) => updateChapterTitle(section.id, chapter.id, e.target.value)}
                          className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-700"
                          placeholder="input chapter title"
                        />
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 flex">
                        <FiEdit3 size={16} />
                        <span className="ml-1 text-sm">edit</span>
                      </button>
                    </div>

                    {/* Chapter Form - Collapsible */}
                    {expandedChapters[chapter.id] && (
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <form className="space-y-6">
                          <div>
                            <label htmlFor={`subtitle-${chapter.id}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Chapter Subtitle
                            </label>
                            <input
                              type="text"
                              id={`subtitle-${chapter.id}`}
                              value={chapter.subtitle}
                              onChange={(e) => updateChapterField(section.id, chapter.id, 'subtitle', e.target.value)}
                              className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                              placeholder="Enter chapter subtitle..."
                            />
                          </div>
                          
                          <div>
                            <label htmlFor={`description-${chapter.id}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Chapter Description
                            </label>
                            <textarea
                              id={`description-${chapter.id}`}
                              value={chapter.description}
                              onChange={(e) => updateChapterField(section.id, chapter.id, 'description', e.target.value)}
                              rows={12}
                              className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-6 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                              placeholder="Enter chapter description..."
                            />
                            <p className="mt-2 ml-4 text-sm text-gray-400">{chapter.description.length}/2000 Characters</p>
                          </div>
                          
                          <div className="flex flex-col">
                            <label htmlFor={`file-${chapter.id}`} className="mb-2 text-sm font-medium text-gray-700">
                              Choose File
                            </label>
                            <input 
                              type="file" 
                              className="hidden" 
                              id={`file-${chapter.id}`}
                              onChange={(e) => handleFileChange(section.id, chapter.id, e.target.files[0])}
                            />
                            <label
                              htmlFor={`file-${chapter.id}`}
                              className="w-full cursor-pointer rounded-full border border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-50"
                            >
                              {chapter.file ? chapter.file.name : 'Choose file'}
                            </label>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add Chapter Button */}
                <button
                  onClick={() => addChapter(section.id)}
                  className="flex items-center space-x-2 ml-8 text-purple-600 hover:text-purple-700 font-medium"
                >
                  <FaPlus size={16} />
                  <span>Chapter</span>
                </button>
              </>
            )}
          </div>
        ))}

        {/* Add Section Button */}
        <button
          onClick={addSection}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
        >
          <FaPlus size={16} />
          <span>Section</span>
        </button>
      </div>

      <div className="mt-12 flex justify-end">
        <Button
          label={'Save & Continue'}
          active={true}
          fun={(e) => {
            e.preventDefault();
            navigate('/educator/quiz');
          }}
        />
      </div>
    </div>
  );
};

export default CourseContent;