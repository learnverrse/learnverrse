import React, { useEffect, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaPlus, FaAngleDown  } from 'react-icons/fa6';
import { FaRegTimesCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

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
  const [questions, setQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  
  // Question form state
  const [questionForm, setQuestionForm] = useState({
    question: '',
    questionType: '',
    answerOptions: {
      multipleChoice: ['', '', '', ''],
      trueFalse: ['True', 'False']
    },
    correctAnswer: ''
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        const res = await axiosPrivate.get(
          `${import.meta.env.VITE_GET_COURSE_BY_ID}/${courseId}`
        );
        const data = res.data.data;
        setCourse(data);
      } catch (err) {
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

  const openQuestionModal = () => {
    setShowQuestionModal(true);
    setEditingQuestionId(null);
    // Reset form
    setQuestionForm({
      question: '',
      questionType: '',
      answerOptions: {
        multipleChoice: ['', '', '', ''],
        trueFalse: ['True', 'False']
      },
      correctAnswer: ''
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
        multipleChoice: question.type === 'Multiple Choice' 
          ? [...question.options, '', '', '', ''].slice(0, 4)
          : ['', '', '', ''],
        trueFalse: ['True', 'False']
      },
      correctAnswer: question.correctAnswer
    });
  };

  const closeQuestionModal = () => {
    setShowQuestionModal(false);
    setEditingQuestionId(null);
  };

  const handleQuestionTypeChange = (type) => {
    setQuestionForm(prev => ({
      ...prev,
      questionType: type,
      correctAnswer: '' // Reset correct answer when type changes
    }));
  };

  const handleMultipleChoiceOptionChange = (index, value) => {
    setQuestionForm(prev => ({
      ...prev,
      answerOptions: {
        ...prev.answerOptions,
        multipleChoice: prev.answerOptions.multipleChoice.map((option, i) => 
          i === index ? value : option
        )
      }
    }));
  };

  const handleCorrectAnswerSelect = (answer) => {
    setQuestionForm(prev => ({
      ...prev,
      correctAnswer: answer
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
      const filledOptions = questionForm.answerOptions.multipleChoice.filter(option => option.trim());
      if (filledOptions.length < 2) {
        toast.error('Please provide at least 2 answer options');
        return;
      }
    }

    // Create question object
    const questionData = {
      question: questionForm.question,
      type: questionForm.questionType,
      options: questionForm.questionType === 'Multiple Choice' 
        ? questionForm.answerOptions.multipleChoice.filter(option => option.trim())
        : questionForm.answerOptions.trueFalse,
      correctAnswer: questionForm.correctAnswer
    };

    if (editingQuestionId) {
      // Update existing question
      setQuestions(prev => prev.map(q => 
        q.id === editingQuestionId 
          ? { ...q, ...questionData }
          : q
      ));
      toast.success('Question updated successfully');
    } else {
      // Add new question
      const newQuestion = {
        id: Date.now(),
        ...questionData
      };
      setQuestions(prev => [...prev, newQuestion]);
      toast.success('Question added successfully');
    }

    setShowQuestionModal(false);
    setEditingQuestionId(null);
  };

  const deleteQuestion = (questionId) => {
    setQuestions(prev => prev.filter(q => q.id !== questionId));
    toast.success('Question deleted');
  };

  // Get current question number for modal
  const getQuestionNumber = () => {
    if (editingQuestionId) {
      const index = questions.findIndex(q => q.id === editingQuestionId);
      return index + 1;
    }
    return questions.length + 1;
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col bg-gray-50 px-6 py-2 overflow-y-auto">
      <CreateCourseNav currentStep={3} />
      
      {isLoading ? (
        <Loader info="Loading quiz details..." isLoading={isLoading} />
      ) : (
        <form action="" className="space-y-6 pb-8">
          <div>
            <label htmlFor="">Quiz Title</label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label htmlFor="">Quiz Description</label>
            <textarea 
              rows={6}
              className="mt-2 w-full rounded-md border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={question.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 
                    className="font-medium text-lg cursor-pointer hover:text-purple-600 transition-colors"
                    onClick={() => openEditQuestionModal(question)}
                  >
                    Question {index + 1}
                  </h3>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => openEditQuestionModal(question)}
                      className="text-white hover:text-purple-700 text-lg font-medium bg-primary-500 px-4 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteQuestion(question.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaRegTimesCircle className='w-6 h-6' />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{question.question}</p>
                <p className="text-sm text-gray-500 mb-2">Type: {question.type}</p>
                <div className="space-y-1">
                  {question.options.map((option, optionIndex) => (
                    <div 
                      key={optionIndex} 
                      className={`p-2 rounded ${
                        option === question.correctAnswer 
                          ? 'bg-green-100 border border-green-300' 
                          : 'bg-gray-50'
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
              className='flex items-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800'
            > 
              <FaPlus className="mr-2 h-4 w-4 text-white" /> Add Question
            </button>
            {questions.length === 0 && (
              <p className='font-medium mt-4'>No questions yet. Click "Add Question" to get started.</p>
            )}
          </div>

          <div className="mt-12 flex justify-between items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-gray-600 px-8 py-3 font-medium text-white hover:bg-gray-700"
              onClick={goBack}
            >
              Back
            </button>
            <Button
              active={true}
              label="save & continue"
              fun={(e) => {
                e.preventDefault();
                navigate('/educator/pricing/' + courseId);
              }}
            />
          </div>
        </form>
      )}

      {/* Question Modal with Blur Background */}
      {showQuestionModal && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/30">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <h2 className="text-xl font-semibold">
                {editingQuestionId ? `Edit Question ${getQuestionNumber()}` : `Question ${getQuestionNumber()}`}
              </h2>
              <button
                onClick={closeQuestionModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaRegTimesCircle size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Question Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question
                </label>
                <textarea
                  value={questionForm.question}
                  onChange={(e) => setQuestionForm(prev => ({
                    ...prev,
                    question: e.target.value
                  }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 bg-white/80"
                  rows={3}
                  placeholder="Enter your question here..."
                />
              </div>

              {/* Question Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Type
                </label>
                <div className="relative">
                  <select
                    value={questionForm.questionType}
                    onChange={(e) => handleQuestionTypeChange(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 appearance-none bg-white/80"
                  >
                    <option value="">Select Question Type</option>
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FaAngleDown className='w-4 h-4 text-gray-700' />
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              {questionForm.questionType && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Answer Option
                  </label>
                  
                  {questionForm.questionType === 'Multiple Choice' && (
                    <div className="space-y-3">
                      {questionForm.answerOptions.multipleChoice.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={questionForm.correctAnswer === option && option.trim() !== ''}
                            onChange={() => option.trim() && handleCorrectAnswerSelect(option)}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                            disabled={!option.trim()}
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleMultipleChoiceOptionChange(index, e.target.value)}
                            placeholder={`Enter Option ${String.fromCharCode(65 + index)}`}
                            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 bg-white/80"
                          />
                        </div>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">
                        Select the radio button next to the correct answer
                      </p>
                    </div>
                  )}

                  {questionForm.questionType === 'True/False' && (
                    <div className="space-y-3">
                      {questionForm.answerOptions.trueFalse.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={questionForm.correctAnswer === option}
                            onChange={() => handleCorrectAnswerSelect(option)}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-gray-700 font-medium">{option}</span>
                        </div>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">
                        Select the correct answer
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200/50 bg-gray-50/50">
              <button
                type="button"
                onClick={closeQuestionModal}
                className="px-4 py-2 text-gray-600 bg-white/80 border border-gray-300 rounded-lg hover:bg-gray-50/80"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveQuestion}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
              >
                <TiTick className='w-6 h-6 mr-2' />
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