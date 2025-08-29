import { React, useEffect, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import {
  FiEdit3,
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiTrash,
} from 'react-icons/fi';
import Button from '@/components/UI/Button';
import { useNavigate, useParams } from 'react-router';
import { FaPlus, FaTimes } from 'react-icons/fa';
import useAppContext from '@/hooks/useAppContext';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import Loader from '@/components/UI/Loader';
import { toast } from 'react-toastify';
import axios from 'axios';

const CourseContent = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [sections, setSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedChapters, setExpandedChapters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const res = await axiosPrivate.get(
          `${import.meta.env.VITE_GET_COURSE_BY_ID}/${courseId}`
        );
        const data = res.data.data; // ← grab the response
        setCourse(data); // ← store it

        if (data.sections?.length > 0) {
          // use `data`, not `course`
          setSections(data.sections);

          const sectionState = {};
          const chapterState = {};
          data.sections.forEach((sec) => {
            sectionState[sec.sectionId] = true;
            sec.chapters?.forEach((chap) => {
              chapterState[chap.chapterId] = true;
            });
          });
          setExpandedSections(sectionState);
          setExpandedChapters(chapterState);
        } else {
          // fallback...
          const defaultChapter = {
            chapterId: crypto.randomUUID(),
            title: 'input chapter title',
            content: '',
            video: null,
          };

          const defaultSection = {
            sectionId: crypto.randomUUID(),
            sectionTitle: 'input section title',
            sectionDescription: '',
            chapters: [defaultChapter],
          };

          setSections([defaultSection]);
          setExpandedSections({ [defaultSection.sectionId]: true });

          if (defaultChapter) {
            setExpandedChapters({ [defaultChapter.chapterId]: true });
          }
        }
      } catch (err) {
        toast.error('Could not load course data.');
      } finally {
        setLoading(false);
      }
    };
    if (courseId) fetchCourse();
  }, [courseId]);

  const goBack = () => {
    // Navigate to step 2 - adjust the route based on your routing structure
    navigate(`/educator/upload-course/${courseId}`);
  };

  const addSection = () => {
    const sectionId = crypto.randomUUID(); // unique sectionId
    const newSection = {
      sectionId,
      sectionTitle: 'input section title',
      sectionDescription: '',
      chapters: [],
    };
    setSections([...sections, newSection]);
    setExpandedSections((prev) => ({ ...prev, [newSection.sectionId]: true }));
  };

  const DeleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.sectionId !== sectionId));
  };
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const addChapter = (sectionId) => {
    const newChapterId = crypto.randomUUID(); // unique sectionId
    setSections(
      sections.map((section) =>
        section.sectionId === sectionId
          ? {
              ...section,
              chapters: [
                ...section.chapters,
                {
                  chapterId: newChapterId,
                  title: 'input chapter title',
                  subtitle: '',
                  content: '',
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
        section.sectionId === sectionId
          ? {
              ...section,
              chapters: section.chapters.filter(
                (chapter) => chapter.chapterId !== chapterId
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
        section.sectionId === sectionId
          ? { ...section, sectionTitle: newTitle }
          : section
      )
    );
  };

  const updateSectionDescription = (sectionId, newDescription) => {
    setSections(
      sections.map((section) =>
        section.sectionId === sectionId
          ? { ...section, sectionDescription: newDescription }
          : section
      )
    );
  };

  const updateChapterTitle = (sectionId, chapterId, newTitle) => {
    setSections(
      sections.map((section) =>
        section.sectionId === sectionId
          ? {
              ...section,
              chapters: section.chapters.map((chapter) =>
                chapter.chapterId === chapterId
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
        section.sectionId === sectionId
          ? {
              ...section,
              chapters: section.chapters.map((chapter) =>
                chapter.chapterId === chapterId
                  ? { ...chapter, [field]: value }
                  : chapter
              ),
            }
          : section
      )
    );
  };
  // video uploaded
  // Track upload progress per chapter
  const [uploadProgress, setUploadProgress] = useState({});

  // 1) Store the raw File in chapter.video for preview
  const [preview, setPreview] = useState({});
  const handleVideoChange = (sectionId, chapterId, file) => {
    const previewUrl = URL.createObjectURL(file);
    updateChapterField(sectionId, chapterId, 'video', file);
    setPreview((prev) => ({ ...prev, [chapterId]: previewUrl }));
  };

  // 2) Upload with axios so we can get progress events
  const uploadVideo = async (sectionId, chapterId, chapter) => {
    const file = chapter.video;
    if (!(file instanceof File)) return;

    try {
      const res = await axiosPrivate.post(
        `/courses/educator/${courseId}/uploads`,
        { fileName: file.name, fileType: file.type, fileSize: file.size }
      );
      const { uploadUrl, fileUrl: videoUrl } = res.data.data;

      try {
        await axios.put(uploadUrl, file, {
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (evt) => {
            const percent = Math.round((evt.loaded * 100) / evt.total);
            setUploadProgress((p) => ({ ...p, [chapterId]: percent }));
          },
        });

        updateChapterField(sectionId, chapterId, 'video', videoUrl);
        toast.success('Video uploaded successfully!');
      } catch (putErr) {
        toast.error('Upload failed during file transfer.');
      }
    } catch (err) {
      toast.error('Failed to get upload URL');
    }
  };

  // end video upload logic
  const SaveAndContinue = async (e) => {
    e.preventDefault();

    const updatedCourse = {
      ...course,
      sections,
    };

    console.log('Updated Course:', updatedCourse.sections);
    try {
      setLoading(true);
      const res = await axiosPrivate.put(
        `${import.meta.env.VITE_UPDATE_COURSE + '/' + courseId}`,
        updatedCourse
      );
      console.log(res.data);
      toast.success(res.data?.message);
      navigate(`/educator/quiz/${courseId}`);
    } catch (err) {
      console.log(err);
      toast.error('Failed to update course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col bg-gray-50 px-3 sm:px-6 py-2">
      <CreateCourseNav currentStep={2} />

      {loading ? (
        <Loader isLoading={loading} info={'Loading course content...'} />
      ) : (
        <>
          <div className="p-3 sm:p-6">
            {sections?.map((section, sectionIndex) => (
              <div key={section.sectionId} className="mb-6 sm:mb-8">
                {/* Section Header */}
                <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-600 p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <button
                      onClick={() => toggleSection(section.sectionId)}
                      className="flex items-center text-gray-600 hover:text-gray-800 flex-shrink-0"
                    >
                      {expandedSections[section.sectionId] ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </button>
                    <span className="font-medium text-black text-sm sm:text-base flex-shrink-0">
                      Section {sectionIndex + 1}:
                    </span>
                    <input
                      type="text"
                      value={section.sectionTitle}
                      onChange={(e) =>
                        updateSectionTitle(section.sectionId, e.target.value)
                      }
                      className="border-none bg-transparent text-gray-700 placeholder-gray-700 outline-none flex-1 min-w-0 text-sm sm:text-base font-medium"
                      placeholder="input section title"
                    />
                  </div>
                  <button
                    className="flex cursor-pointer items-center text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
                    onClick={() => DeleteSection(section.sectionId)}
                  >
                    <FiTrash size={16} />
                    <span className="ml-1 text-sm hidden sm:inline">delete</span>
                  </button>
                </div>

                {/* Section Content - Collapsible */}
                {expandedSections[section.sectionId] && (
                  <>
                    {/* Section Description */}
                    <div className="mb-4 sm:mb-6 ml-2 sm:ml-4">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Section Description
                      </label>
                      <textarea
                        value={section.sectionDescription}
                        onChange={(e) =>
                          updateSectionDescription(
                            section.sectionId,
                            e.target.value
                          )
                        }
                        className="w-full resize-none rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                        rows={3}
                        placeholder="Enter section description..."
                      />
                    </div>

                    {/* Chapters */}
                    {section?.chapters?.map((chapter, chapterIndex) => (
                      <div key={chapter.chapterId} className="mb-4 sm:mb-6 ml-4 sm:ml-8">
                        {/* Chapter Header */}
                        <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-400 p-3 sm:p-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                            <button
                              onClick={() => toggleChapter(chapter.chapterId)}
                              className="flex items-center text-gray-600 hover:text-gray-800 flex-shrink-0"
                            >
                              {expandedChapters[chapter.chapterId] ? (
                                <FiChevronDown size={18} />
                              ) : (
                                <FiChevronUp size={18} />
                              )}
                            </button>
                            <span className="font-medium text-black text-sm sm:text-base flex-shrink-0">
                              Chapter {chapterIndex + 1}:
                            </span>
                            <input
                              type="text"
                              value={chapter.title}
                              onChange={(e) =>
                                updateChapterTitle(
                                  section.sectionId,
                                  chapter.chapterId,
                                  e.target.value
                                )
                              }
                              className="border-none bg-transparent text-gray-700 placeholder-gray-700 outline-none flex-1 min-w-0 text-sm sm:text-base font-medium"
                              placeholder="input chapter title"
                            />
                          </div>
                          <button
                            className="flex cursor-pointer items-center text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
                            onClick={() =>
                              deleteChapter(
                                section.sectionId,
                                chapter.chapterId
                              )
                            }
                          >
                            <FiTrash2 size={16} />
                            <span className="ml-1 text-sm hidden sm:inline">delete</span>
                          </button>
                        </div>

                        {/* Chapter Form - Collapsible */}
                        {expandedChapters[chapter.chapterId] && (
                          <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
                            <form className="space-y-4 sm:space-y-6">
                              <div>
                                <label
                                  htmlFor={`description-${chapter.chapterId}`}
                                  className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                  Chapter Description
                                </label>
                                <textarea
                                  id={`description-${chapter.chapterId}`}
                                  value={chapter.content}
                                  onChange={(e) =>
                                    updateChapterField(
                                      section.sectionId,
                                      chapter.chapterId,
                                      'content',
                                      e.target.value
                                    )
                                  }
                                  rows={8}
                                  className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 text-sm sm:text-base min-h-[200px] sm:min-h-[300px]"
                                  placeholder="Enter chapter description..."
                                />
                                <p className="mt-2 ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400">
                                  {chapter.content?.length}/2000 Characters
                                </p>
                              </div>

                              <div className="flex flex-col gap-2">
                                {/* File input */}
                                <input
                                  type="file"
                                  id={`file-${chapter.chapterId}`}
                                  accept="video/*"
                                  className="hidden"
                                  onChange={(e) =>
                                    handleVideoChange(
                                      section.sectionId,
                                      chapter.chapterId,
                                      e.target.files[0]
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`file-${chapter.chapterId}`}
                                  className="w-full cursor-pointer rounded-full border border-gray-400 px-4 py-3 text-gray-700 hover:bg-gray-50 text-center text-sm sm:text-base"
                                >
                                  {chapter.video instanceof File
                                    ? chapter.video.name
                                    : typeof chapter.video === 'string'
                                      ? 'Change Video'
                                      : 'Choose Video'}
                                </label>

                                {/* Preview */}
                                {preview[chapter.chapterId] && (
                                  <div className="relative mt-2 w-full overflow-hidden rounded-lg border">
                                    <video
                                      src={preview[chapter.chapterId]}
                                      controls
                                      className="w-full object-cover"
                                    />
                                    <FaTimes
                                      className="absolute top-2 right-2 cursor-pointer text-xl sm:text-2xl text-red-500 bg-white bg-opacity-80 rounded-full p-1"
                                      onClick={() => {
                                        updateChapterField(
                                          section.sectionId,
                                          chapter.chapterId,
                                          'video',
                                          null
                                        );
                                        setPreview((prev) => ({
                                          ...prev,
                                          [chapter.chapterId]: null,
                                        }));
                                      }}
                                    />
                                  </div>
                                )}

                                {/* Upload Button + Progress */}
                                {chapter.video instanceof File && (
                                  <div className="flex flex-col gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        uploadVideo(
                                          section.sectionId,
                                          chapter.chapterId,
                                          chapter
                                        )
                                      }
                                      className="bg-primary-600 hover:bg-primary-700 rounded px-4 py-2 text-white text-sm sm:text-base w-full sm:w-auto"
                                    >
                                      Upload Video
                                    </button>
                                    {uploadProgress[chapter.chapterId] != null && (
                                      <progress
                                        value={uploadProgress[chapter.chapterId]}
                                        max="100"
                                        className="w-full h-2 sm:h-auto"
                                      >
                                        {uploadProgress[chapter.chapterId]}%
                                      </progress>
                                    )}
                                  </div>
                                )}

                                {/* Already uploaded? Show link */}
                                {typeof chapter.video === 'string' &&
                                  !preview[chapter.chapterId] && (
                                    <a
                                      href={chapter.video}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs sm:text-sm text-blue-600 underline break-all"
                                    >
                                      View Uploaded Video
                                    </a>
                                  )}
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Add Chapter Button */}
                    <button
                      onClick={() => addChapter(section.sectionId)}
                      className="ml-4 sm:ml-8 flex cursor-pointer items-center space-x-2 font-medium text-purple-600 hover:text-purple-700 text-sm sm:text-base"
                    >
                      <FaPlus size={14} className="sm:size-4" />
                      <span>Chapter</span>
                    </button>
                  </>
                )}
              </div>
            ))}

            {/* Add Section Button */}
            <button
              onClick={addSection}
              className="flex cursor-pointer items-center space-x-2 font-medium text-purple-600 hover:text-purple-700 text-sm sm:text-base"
            >
              <FaPlus size={14} className="sm:size-4" />
              <span>Section</span>
            </button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <button
              type="button"
              className="order-2 sm:order-1 rounded-full bg-gray-600 px-6 sm:px-8 py-3 font-medium text-white hover:bg-gray-700 text-sm sm:text-base w-full sm:w-auto"
              onClick={goBack}
            >
              Back
            </button>

            <div className="order-1 sm:order-2 w-full sm:w-auto">
              <Button
                label={'Save & Continue'}
                active={true}
                fun={(e) => SaveAndContinue(e)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseContent;
