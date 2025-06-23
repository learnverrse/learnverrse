import { React, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import {
  FiEdit3,
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiTrash,
} from 'react-icons/fi';
import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router';
import { FaPlus } from 'react-icons/fa';
import useAppContext from '@/hooks/useAppContext';

const CourseContent = () => {
  const navigate = useNavigate();

  const {
    dispatch,
    state: { courseData },
  } = useAppContext();

  const [sections, setSections] = useState(
    courseData.sections || [
      {
        id: 1,
        sectionTitle: 'input section title',
        sectionDescription: '',
        chapters: [
          {
            id: 1,
            title: 'input chapter title',
            subtitle: '',
            description: '',
            file: null,
            video: null,
          },
        ],
      },
    ]
  );

  const [expandedSections, setExpandedSections] = useState({ 1: true });
  const [expandedChapters, setExpandedChapters] = useState({ 1: true });

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      sectionTitle: 'input section title',
      SectionDescription: '',
      chapters: [],
    };
    setSections([...sections, newSection]);
    setExpandedSections((prev) => ({ ...prev, [newSection.id]: true }));
  };

  const DeleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const addChapter = (sectionId) => {
    const newChapterId = Date.now();
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              chapters: [
                ...section.chapters,
                {
                  id: newChapterId,
                  title: 'input chapter title',
                  subtitle: '',
                  content: '',
                  file: null,
                  video: null,
                },
              ],
            }
          : section
      )
    );
    setExpandedChapters((prev) => ({ ...prev, [newChapterId]: true }));
  };

  const deleteChapter = (sectionId, chapterId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              chapters: section.chapters.filter(
                (chapter) => chapter.id !== chapterId
              ),
            }
          : section
      )
    );
  };

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const updateSectionTitle = (sectionId, newTitle) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, sectionTitle: newTitle }
          : section
      )
    );
  };

  const updateSectionDescription = (sectionId, newDescription) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, sectionDescription: newDescription }
          : section
      )
    );
  };

  const updateChapterTitle = (sectionId, chapterId, newTitle) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              chapters: section.chapters.map((chapter) =>
                chapter.id === chapterId
                  ? { ...chapter, title: newTitle }
                  : chapter
              ),
            }
          : section
      )
    );
  };

  const updateChapterField = (sectionId, chapterId, field, value) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              chapters: section.chapters.map((chapter) =>
                chapter.id === chapterId
                  ? { ...chapter, [field]: value }
                  : chapter
              ),
            }
          : section
      )
    );
  };
  // video uploaded
  const [filesToUpload, setFilesToUpload] = useState({});
  const handleVideoChange = (sectionId, chapterId, file, chapter) => {
    const { name, type } = file;
    setFilesToUpload({
      fileName: name,
      fileType: type,
    });
    console.log(name, type);
    console.log(chapter);
    console.log(courseData.sections);
    updateChapterField(sectionId, chapterId, file);
  };

  // end video upload logic
  const SaveAndContinue = (e) => {
    e.preventDefault();
    // Here you can handle the save logic, currently saving to context

    // later reference below
    /*  const sectionToSend = sections.map((section) => ({
    ...section,
    chapters: section.chapters.map((chapter)  => ({
      ...chapter,
      file: chapter.file ? chapter.file.name : null, // Only send file name
    }))
   })) */
    console.log(sections);
    dispatch({
      type: 'SAVE_COURSE_CONTENT',
      payload: {
        courseContent: sections,
      },
    });
    navigate('/educator/quiz');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={2} />

      <div className="p-6">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-8">
            {/* Section Header */}
            <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-600 p-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  {expandedSections[section.id] ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </button>
                <span className="font-medium text-black">
                  Section {sectionIndex + 1}:
                </span>
                <input
                  type="text"
                  value={section.sectionTitle}
                  onChange={(e) =>
                    updateSectionTitle(section.id, e.target.value)
                  }
                  className="border-none bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                  placeholder="input section title"
                />
              </div>
              <button
                className="flex cursor-pointer items-center text-gray-400 hover:text-gray-600"
                onClick={() => DeleteSection(section.id)}
              >
                <FiTrash size={16} />
                <span className="ml-1 text-sm">delete</span>
              </button>
            </div>

            {/* Section Content - Collapsible */}
            {expandedSections[section.id] && (
              <>
                {/* Section Description */}
                <div className="mb-6 ml-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Section Description
                  </label>
                  <textarea
                    value={section.sectionDescription}
                    onChange={(e) =>
                      updateSectionDescription(section.id, e.target.value)
                    }
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    rows={3}
                    placeholder="Enter section description..."
                  />
                </div>

                {/* Chapters */}
                {section.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="mb-6 ml-8">
                    {/* Chapter Header */}
                    <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-400 p-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleChapter(chapter.id)}
                          className="flex items-center text-gray-600 hover:text-gray-800"
                        >
                          {expandedChapters[chapter.id] ? (
                            <FiChevronDown size={18} />
                          ) : (
                            <FiChevronUp size={18} />
                          )}
                        </button>
                        <span className="font-medium text-black">
                          Chapter {chapterIndex + 1}:
                        </span>
                        <input
                          type="text"
                          value={chapter.title}
                          onChange={(e) =>
                            updateChapterTitle(
                              section.id,
                              chapter.id,
                              e.target.value
                            )
                          }
                          className="border-none bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                          placeholder="input chapter title"
                        />
                      </div>
                      <button
                        className="flex cursor-pointer items-center text-gray-400 hover:text-gray-600"
                        onClick={() => deleteChapter(section.id, chapter.id)}
                      >
                        <FiTrash2 size={16} />

                        <span className="ml-1 text-sm">delete</span>
                      </button>
                    </div>

                    {/* Chapter Form - Collapsible */}
                    {expandedChapters[chapter.id] && (
                      <div className="rounded-lg border border-gray-200 bg-white p-6">
                        <form className="space-y-6">
                          {/*   <div>
                            <label
                              htmlFor={`subtitle-${chapter.id}`}
                              className="mb-2 block text-sm font-medium text-gray-700"
                            >
                              Chapter Subtitle
                            </label>
                            <input
                              type="text"
                              id={`subtitle-${chapter.id}`}
                              value={chapter.subtitle}
                              onChange={(e) =>
                                updateChapterField(
                                  section.id,
                                  chapter.id,
                                  'subtitle',
                                  e.target.value
                                )
                              }
                              className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                              placeholder="Enter chapter subtitle..."
                            />
                          </div> */}

                          <div>
                            <label
                              htmlFor={`description-${chapter.id}`}
                              className="mb-2 block text-sm font-medium text-gray-700"
                            >
                              Chapter Description
                            </label>
                            <textarea
                              id={`description-${chapter.id}`}
                              value={chapter.content}
                              onChange={(e) =>
                                updateChapterField(
                                  section.id,
                                  chapter.id,
                                  'content',
                                  e.target.value
                                )
                              }
                              rows={12}
                              className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-6 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                              placeholder="Enter chapter description..."
                            />
                            <p className="mt-2 ml-4 text-sm text-gray-400">
                              {chapter.content?.length}/2000 Characters
                            </p>
                          </div>

                          <div className="flex flex-col">
                            <label
                              htmlFor={`file-${chapter.id}`}
                              className="mb-2 text-sm font-medium text-gray-700"
                            >
                              Choose Video
                            </label>
                            <input
                              type="file"
                              accept="video/mp4,video/x-m4v,video/*"
                              className="hidden"
                              id={`file-${chapter.id}`}
                              onChange={(e) =>
                                handleVideoChange(
                                  section.id,
                                  chapter.id,
                                  e.target.files[0],
                                  chapter
                                )
                              }
                            />
                            <label
                              htmlFor={`file-${chapter.id}`}
                              className="w-full cursor-pointer rounded-full border border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-50"
                            >
                              {chapter.file ? chapter.file.name : 'Choose file'}
                            </label>
                          </div>
                          {chapter.file ? <button>upload video</button> : null}
                        </form>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add Chapter Button */}
                <button
                  onClick={() => addChapter(section.id)}
                  className="ml-8 flex cursor-pointer items-center space-x-2 font-medium text-purple-600 hover:text-purple-700"
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
          className="flex cursor-pointer items-center space-x-2 font-medium text-purple-600 hover:text-purple-700"
        >
          <FaPlus size={16} />
          <span>Section</span>
        </button>
      </div>

      <div className="mt-12 flex justify-end">
        <Button
          label={'Save & Continue'}
          active={true}
          fun={(e) => SaveAndContinue(e)}
        />
      </div>
    </div>
  );
};

export default CourseContent;
