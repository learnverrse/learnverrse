import React, { useEffect, useRef, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaChevronDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import Button from '@/components/UI/Button';

const CourseInformation = () => {
  const navigate = useNavigate();
  const [charNumber, setCharNumber] = useState(0);
  const [totalNum] = useState(10);

  const textareaRef = useRef(null);
  const [textArr, setTextArr] = useState([]);

  const handleTestLength = (e) => {
    const key = e.nativeEvent.data; // captures the typed character (or null on backspace)
    const isBackspace = e.nativeEvent.inputType === 'deleteContentBackward'; // chacking if backspace is typed

    let updatedTextArr = [...textArr];

    if (isBackspace) {
      updatedTextArr.pop(); // remove last character
    } else if (key && textArr.length < totalNum) {
      updatedTextArr.push(key); // add new character
    }

    // Update state
    setTextArr(updatedTextArr);
    setCharNumber(updatedTextArr.length);
    // Sync textarea with internal array
    textareaRef.current.value = updatedTextArr.join('');
  };
  return (
    <div className="flex flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav />

      <form className="space-y-6">
        <p className="text-sm text-gray-400">
          Create and define what your course is all about{' '}
        </p>
        <div>
          <label htmlFor="">Course Title</label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="">Course Category</label>
          <div className="relative mt-2">
            <select
              id="course-category"
              className="w-full appearance-none rounded-full border border-gray-400 bg-white px-4 py-3 pr-12 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a category</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="data-science">Data Science</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="">Course Duration</label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="">Course Description</label>
          <textarea
            name=""
            id="chapterDescription"
            rows={12}
            className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-6 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            onInput={(e) => handleTestLength(e)}
            maxLength={totalNum}
            ref={textareaRef}
          ></textarea>
          <p className="mt-2 ml-4 text-sm text-gray-400">
            {charNumber}/{totalNum} Characters
          </p>
        </div>

        <div className="mt-12 flex justify-end">
          <Button
            active={true}
            label="save & continue"
            fun={(e) => {
              e.preventDefault();
              navigate('/educator/upload-course-content');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
