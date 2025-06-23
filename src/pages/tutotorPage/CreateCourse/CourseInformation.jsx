import React, { useRef, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaChevronDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import Button from '@/components/UI/Button';
import useAppContext from '@/hooks/useAppContext';
import { toast } from 'react-toastify';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const CourseInformation = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    dispatch,
    state: { courseData },
  } = useAppContext();

  const navigate = useNavigate();
  const [charNumber, setCharNumber] = useState(0);
  const [totalNum] = useState(2000);

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

  // actuall states

  const [title, setTitle] = useState(courseData?.title || '');
  const [category, setCategory] = useState(courseData?.category || '');
  const [description, setDescription] = useState(courseData?.description || '');
  const [courseImage, setCourseImage] = useState(courseData?.courseImage || '');

  const [previewImage, setPreviewImage] = useState(courseImage);
  const [imageToUpload, setImageToUpload] = useState(null);

  const handleImageChange = (e) => {
    let selectedFiles = [...e.target.files];

    const previewURL = URL.createObjectURL(selectedFiles[0]);

    setPreviewImage(previewURL);
    setImageToUpload(selectedFiles[0]);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    console.log('Uploading image:', {
      fileName: imageToUpload.name,
      fileType: imageToUpload.type,
    });
  };

  const uploadCourseData = async (payload) => {
    try {
      const response = await axiosPrivate.put('/courses/educator/id', payload);

      console.log('Course data uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading course data:', error);
      const errorMessage =
        error.response?.data?.message || 'Something went wrong';
      console.error(errorMessage);
    }
  };
  // uploadCourseData();

  const SaveAndContinue = (e) => {
    e.preventDefault();
    /*  if (!title || !category || !description) {
      toast.error('Please fill in all fields');
      return;
    } */

    // Save course data to context
    dispatch({
      type: 'SAVE_COURSE_INFORMATION',
      payload: {
        title,
        category,
        description,
      },
    });

    console.log('Course data saved:', courseData);

    // Navigate to the next step
    // navigate('/educator/upload-course-content');
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            /*  required */
          />
        </div>
        <div>
          <label htmlFor="">Course Category</label>
          <div className="relative mt-2">
            <select
              id="course-category"
              className="w-full appearance-none rounded-full border border-gray-400 bg-white px-4 py-3 pr-12 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
              value={category}
              /*  required */
              onChange={(e) => setCategory(e.target.value)}
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
        {/*  <div>
          <label htmlFor="">Course Duration</label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div> */}

        <div>
          <label htmlFor="">Course Image Poster</label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            /*  required */
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            onChange={(e) => handleImageChange(e)}
          />
        </div>

        {
          <div className="mt-4 flex flex-wrap gap-4">
            {previewImage && (
              <div>
                <img
                  src={previewImage}
                  alt={`Preview `}
                  className="h-24 w-24 rounded border object-cover"
                />

                <button
                  className="bg-primary-600 mt-2 p-2 text-white"
                  onClick={(e) => uploadImage(e)}
                >
                  upload
                </button>
                <p className="text-red-500">
                  if you've uploaded this content before no need to re-upload
                </p>
              </div>
            )}
          </div>
        }

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
            /*  required */
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
              SaveAndContinue(e);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
