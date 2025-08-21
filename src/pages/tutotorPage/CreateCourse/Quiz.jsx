import React, { useEffect, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaPlus, FaAngleDown } from 'react-icons/fa6';
import { FaRegTimesCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

import Button from '@/components/UI/Button';
import { useNavigate, useParams } from 'react-router';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import Loader from '@/components/UI/Loader';

const Quiz = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState(null);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [editingQuestionId, setEditingQuestionId] = useState(null);

  // Store quiz data for each section
  const [sectionQuizzes, setSectionQuizzes] = useState({}); // { sectionId: { duration, questions: [] } }
  const [currentSectionId, setCurrentSectionId] = useState('');

  // Question form state
  const [questionForm, setQuestionForm] = useState({
    question: '',
    questionType: '',
    answerOptions: {
      multipleChoice: ['', '', '', ''],
      trueFalse: ['True', 'False'],
    },
    correctAnswer: '',
  });

  // Duration options (in minutes)
  const durationOptions = [
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 45, label: '45 minutes' },
    { value: 60, label: '1 hour' },
    { value: 90, label: '1 hour 30 minutes' },
    { value: 120, label: '2 hours' },
  ];

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        const res = await axiosPrivate.get(
          `${import.meta.env.VITE_GET_COURSE_BY_ID}/${courseId}`
        );
        const data = res.data.data;
        setCourse(data);

        // Initialize section quizzes state with existing quiz data if available
        const initialQuizzes = {};
        data.sections?.forEach((section) => {
          // Check if section has existing quiz data
          if (section.quiz && section.quiz.length > 0) {
            // Map existing quiz data
            const existingQuestions = section.quiz.map((q, index) => ({
              id: Date.now() + index, // Generate unique ID for frontend
              question: q.question,
              type: q.questionType || 'Multiple Choice',
              options: q.options || [],
              correctAnswer: q.correctAnswer || '',
            }));

            initialQuizzes[section.sectionId] = {
              duration: section.quizDuration || '',
              questions: existingQuestions,
            };
          } else {
            // Initialize empty quiz structure
            initialQuizzes[section.sectionId] = {
              duration: '',
              questions: [],
            };
          }
        });
        setSectionQuizzes(initialQuizzes);

        // Set first section as current if available
        if (data.sections?.length > 0) {
          setCurrentSectionId(data.sections[0].sectionId);
        }
      } catch {
        toast.error('Failed to load course');
      } finally {
        setIsLoading(false);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  const goBack = () => {
    navigate(`/educator/upload-course-content/${courseId}`);
  };

  // Get current section data
  const getCurrentSection = () => {
    return course?.sections?.find((s) => s.sectionId === currentSectionId);
  };

  // Get current section quiz data
  const getCurrentSectionQuiz = () => {
    return sectionQuizzes[currentSectionId] || { duration: '', questions: [] };
  };

  // Handle section change
  const handleSectionChange = (sectionId) => {
    setCurrentSectionId(sectionId);
  };

  // Update duration for current section
  const updateSectionDuration = (duration) => {
    setSectionQuizzes((prev) => ({
      ...prev,
      [currentSectionId]: {
        ...prev[currentSectionId],
        duration: duration,
      },
    }));
  };

  const openQuestionModal = () => {
    setShowQuestionModal(true);
    setEditingQuestionId(null);
    // Reset form
    setQuestionForm({
      question: '',
      questionType: '',
      answerOptions: {
        multipleChoice: ['', '', '', ''],
        trueFalse: ['True', 'False'],
      },
      correctAnswer: '',
    });
  };

  const openEditQuestionModal = (question) => {
    setShowQuestionModal(true);
    setEditingQuestionId(question.id);

    // Populate form with existing question data
    setQuestionForm({
      question: question.question,
      questionType: question.type,
      answerOptions: {
        multipleChoice:
          question.type === 'Multiple Choice'
            ? [...question.options, '', '', '', ''].slice(0, 4)
            : ['', '', '', ''],
        trueFalse: ['True', 'False'],
      },
      correctAnswer: question.correctAnswer,
    });
  };

  const closeQuestionModal = () => {
    setShowQuestionModal(false);
    setEditingQuestionId(null);
  };

  const handleQuestionTypeChange = (type) => {
    setQuestionForm((prev) => ({
      ...prev,
      questionType: type,
      correctAnswer: '', // Reset correct answer when type changes
    }));
  };

  const handleMultipleChoiceOptionChange = (index, value) => {
    setQuestionForm((prev) => ({
      ...prev,
      answerOptions: {
        ...prev.answerOptions,
        multipleChoice: prev.answerOptions.multipleChoice.map((option, i) =>
          i === index ? value : option
        ),
      },
    }));
  };

  const handleCorrectAnswerSelect = (answer) => {
    setQuestionForm((prev) => ({
      ...prev,
      correctAnswer: answer,
    }));
  };

  const saveQuestion = () => {
    // Validation
    if (!questionForm.question.trim()) {
      toast.error('Please enter a question');
      return;
    }

    if (!questionForm.questionType) {
      toast.error('Please select a question type');
      return;
    }

    if (!questionForm.correctAnswer) {
      toast.error('Please select the correct answer');
      return;
    }

    if (questionForm.questionType === 'Multiple Choice') {
      const filledOptions = questionForm.answerOptions.multipleChoice.filter(
        (option) => option.trim()
      );
      if (filledOptions.length < 2) {
        toast.error('Please provide at least 2 answer options');
        return;
      }
    }

    // Create question object
    const questionData = {
      question: questionForm.question,
      type: questionForm.questionType,
      options:
        questionForm.questionType === 'Multiple Choice'
          ? questionForm.answerOptions.multipleChoice.filter((option) =>
              option.trim()
            )
          : questionForm.answerOptions.trueFalse,
      correctAnswer: questionForm.correctAnswer,
    };

    if (editingQuestionId) {
      // Update existing question
      setSectionQuizzes((prev) => ({
        ...prev,
        [currentSectionId]: {
          ...prev[currentSectionId],
          questions: prev[currentSectionId].questions.map((q) =>
            q.id === editingQuestionId ? { ...q, ...questionData } : q
          ),
        },
      }));
      toast.success('Question updated successfully');
    } else {
      // Add new question
      const newQuestion = {
        id: Date.now(),
        ...questionData,
      };
      setSectionQuizzes((prev) => ({
        ...prev,
        [currentSectionId]: {
          ...prev[currentSectionId],
          questions: [...prev[currentSectionId].questions, newQuestion],
        },
      }));
      toast.success('Question added successfully');
    }

    setShowQuestionModal(false);
    setEditingQuestionId(null);
  };

  const deleteQuestion = (questionId) => {
    setSectionQuizzes((prev) => ({
      ...prev,
      [currentSectionId]: {
        ...prev[currentSectionId],
        questions: prev[currentSectionId].questions.filter(
          (q) => q.id !== questionId
        ),
      },
    }));
    toast.success('Question deleted');
  };

  // Get current question number for modal
  const getQuestionNumber = () => {
    const currentQuiz = getCurrentSectionQuiz();
    if (editingQuestionId) {
      const index = currentQuiz.questions.findIndex(
        (q) => q.id === editingQuestionId
      );
      return index + 1;
    }
    return currentQuiz.questions.length + 1;
  };

  // Get section index
  const getSectionIndex = (sectionId) => {
    if (!course?.sections) return 0;
    return course.sections.findIndex((s) => s.sectionId === sectionId) + 1;
  };

  // Check if all sections have been completed
  const isAllSectionsCompleted = () => {
    if (!course?.sections) return false;

    return course.sections.every((section) => {
      const quiz = sectionQuizzes[section.sectionId];
      return quiz && quiz.duration && quiz.questions.length > 0;
    });
  };

  // Get completion status for each section
  const getSectionCompletionStatus = (sectionId) => {
    const quiz = sectionQuizzes[sectionId];
    if (!quiz) return 'Not Started';

    const hasDuration = quiz.duration !== '';
    const hasQuestions = quiz.questions.length > 0;

    if (hasDuration && hasQuestions) return 'Complete';
    if (hasDuration || hasQuestions) return 'In Progress';
    return 'Not Started';
  };

  const validateAndSave = () => {
    if (!isAllSectionsCompleted()) {
      toast.error('Please complete quizzes for all sections before proceeding');
      return;
    }

    // Here you would typically save the quiz data
    console.log('All Section Quizzes:', sectionQuizzes);

    toast.success('All quizzes saved successfully!');
    navigate('/educator/pricing/' + courseId);
  };

  const currentSection = getCurrentSection();
  const currentSectionQuiz = getCurrentSectionQuiz();

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col overflow-y-auto bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={3} />

      {isLoading ? (
        <Loader info="Loading quiz details..." isLoading={isLoading} />
      ) : (
        <form action="" className="space-y-6 pb-8">
          {/* Section Selection */}
          <div>
            <label htmlFor="">Select Section for Quiz</label>
            <div className="relative mt-2">
              <select
                value={currentSectionId}
                onChange={(e) => handleSectionChange(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-400 bg-white px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select a section to create quiz</option>
                {course?.sections?.map((section, index) => (
                  <option key={section.sectionId} value={section.sectionId}>
                    Section {index + 1}: {section.sectionTitle}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <FaAngleDown className="h-4 w-4 text-gray-700" />
              </div>
            </div>
          </div>

          {/* Section Progress Overview */}
          {course?.sections && course.sections.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="mb-3 font-medium text-gray-900">
                Quiz Progress Overview
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {course.sections.map((section, index) => {
                  const status = getSectionCompletionStatus(section.sectionId);
                  const isActive = section.sectionId === currentSectionId;

                  return (
                    <div
                      key={section.sectionId}
                      className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                        isActive
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleSectionChange(section.sectionId)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Section {index + 1}
                        </span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            status === 'Complete'
                              ? 'bg-green-100 text-green-700'
                              : status === 'In Progress'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs text-gray-600">
                        {section.sectionTitle}
                      </p>
                      {sectionQuizzes[section.sectionId] && (
                        <p className="mt-1 text-xs text-gray-500">
                          {sectionQuizzes[section.sectionId].questions.length}{' '}
                          questions
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Current Section Quiz Form */}
          {currentSectionId && currentSection && (
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold">
                Quiz for Section {getSectionIndex(currentSectionId)}:{' '}
                {currentSection.sectionTitle}
              </h2>

              {/* Quiz Duration Selection */}
              <div className="mb-6">
                <label htmlFor="">Quiz Duration</label>
                <div className="relative mt-2">
                  <select
                    value={currentSectionQuiz.duration}
                    onChange={(e) => updateSectionDuration(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-400 bg-white px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select quiz duration</option>
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <FaAngleDown className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Current Section Quiz Summary */}
              {(currentSectionQuiz.duration ||
                currentSectionQuiz.questions.length > 0) && (
                <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <h3 className="mb-2 font-medium text-blue-900">
                    Current Quiz Summary
                  </h3>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>
                      <strong>Section:</strong> {currentSection.sectionTitle}
                    </p>
                    {currentSectionQuiz.duration && (
                      <p>
                        <strong>Duration:</strong>{' '}
                        {
                          durationOptions.find(
                            (d) => d.value == currentSectionQuiz.duration
                          )?.label
                        }
                      </p>
                    )}
                    <p>
                      <strong>Questions:</strong>{' '}
                      {currentSectionQuiz.questions.length}
                    </p>
                  </div>
                </div>
              )}

              {/* Questions List for Current Section */}
              <div className="mb-6 space-y-4">
                {currentSectionQuiz.questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3
                        className="cursor-pointer text-lg font-medium transition-colors hover:text-purple-600"
                        onClick={() => openEditQuestionModal(question)}
                      >
                        Question {index + 1}
                      </h3>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => openEditQuestionModal(question)}
                          className="bg-primary-500 rounded-md px-3 py-1 text-sm font-medium text-white hover:text-purple-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteQuestion(question.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaRegTimesCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <p className="mb-2 text-gray-700">{question.question}</p>
                    <p className="mb-2 text-sm text-gray-500">
                      Type: {question.type}
                    </p>
                    <div className="space-y-1">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`rounded p-2 ${
                            option === question.correctAnswer
                              ? 'border border-green-300 bg-green-100'
                              : 'border border-gray-200 bg-white'
                          }`}
                        >
                          {option} {option === question.correctAnswer && '✓'}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Question Button */}
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={openQuestionModal}
                  className="flex items-center rounded-md bg-black px-6 py-2 text-white hover:bg-gray-800"
                >
                  <FaPlus className="mr-2 h-4 w-4 text-white" /> Add Question
                </button>
                {currentSectionQuiz.questions.length === 0 && (
                  <p className="mt-4 font-medium">
                    No questions yet. Click "Add Question" to get started.
                  </p>
                )}
              </div>
            </div>
          )}

          {!currentSectionId &&
            course?.sections &&
            course.sections.length > 0 && (
              <div className="py-8 text-center">
                <p className="text-lg text-gray-600">
                  Please select a section to create a quiz
                </p>
              </div>
            )}

          <div className="mt-12 flex items-center justify-between gap-4">
            <button
              type="button"
              className="rounded-full bg-gray-600 px-8 py-3 font-medium text-white hover:bg-gray-700"
              onClick={goBack}
            >
              Back
            </button>
            <Button
              active={isAllSectionsCompleted()}
              label={
                isAllSectionsCompleted()
                  ? 'save & continue'
                  : `Complete ${course?.sections?.length - Object.values(sectionQuizzes).filter((quiz) => quiz.duration && quiz.questions.length > 0).length} more sections`
              }
              fun={(e) => {
                e.preventDefault();
                validateAndSave();
              }}
            />
          </div>
        </form>
      )}

      {/* Question Modal with Blur Background */}
      {showQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-white/30 bg-white/90 shadow-xl backdrop-blur-sm">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200/50 p-6">
              <h2 className="text-xl font-semibold">
                {editingQuestionId
                  ? `Edit Question ${getQuestionNumber()}`
                  : `Question ${getQuestionNumber()}`}
                <span className="block text-sm font-normal text-gray-600">
                  for {currentSection?.sectionTitle}
                </span>
              </h2>
              <button
                onClick={closeQuestionModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaRegTimesCircle size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 p-6">
              {/* Question Input */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Question
                </label>
                <textarea
                  value={questionForm.question}
                  onChange={(e) =>
                    setQuestionForm((prev) => ({
                      ...prev,
                      question: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Enter your question here..."
                />
              </div>

              {/* Question Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Question Type
                </label>
                <div className="relative">
                  <select
                    value={questionForm.questionType}
                    onChange={(e) => handleQuestionTypeChange(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white/80 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Question Type</option>
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <FaAngleDown className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              {questionForm.questionType && (
                <div>
                  <label className="mb-4 block text-sm font-medium text-gray-700">
                    Answer Option
                  </label>

                  {questionForm.questionType === 'Multiple Choice' && (
                    <div className="space-y-3">
                      {questionForm.answerOptions.multipleChoice.map(
                        (option, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <input
                              type="radio"
                              name="correctAnswer"
                              checked={
                                questionForm.correctAnswer === option &&
                                option.trim() !== ''
                              }
                              onChange={() =>
                                option.trim() &&
                                handleCorrectAnswerSelect(option)
                              }
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                              disabled={!option.trim()}
                            />
                            <input
                              type="text"
                              value={option}
                              onChange={(e) =>
                                handleMultipleChoiceOptionChange(
                                  index,
                                  e.target.value
                                )
                              }
                              placeholder={`Enter Option ${String.fromCharCode(65 + index)}`}
                              className="flex-1 rounded-lg border border-gray-300 bg-white/80 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        )
                      )}
                      <p className="mt-2 text-sm text-gray-500">
                        Select the radio button next to the correct answer
                      </p>
                    </div>
                  )}

                  {questionForm.questionType === 'True/False' && (
                    <div className="space-y-3">
                      {questionForm.answerOptions.trueFalse.map(
                        (option, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <input
                              type="radio"
                              name="correctAnswer"
                              checked={questionForm.correctAnswer === option}
                              onChange={() => handleCorrectAnswerSelect(option)}
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="font-medium text-gray-700">
                              {option}
                            </span>
                          </div>
                        )
                      )}
                      <p className="mt-2 text-sm text-gray-500">
                        Select the correct answer
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 border-t border-gray-200/50 bg-gray-50/50 p-6">
              <button
                type="button"
                onClick={closeQuestionModal}
                className="rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-gray-600 hover:bg-gray-50/80"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveQuestion}
                className="flex items-center rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700"
              >
                <TiTick className="mr-2 h-6 w-6" />
                {editingQuestionId ? 'Update Question' : 'Save Question'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
