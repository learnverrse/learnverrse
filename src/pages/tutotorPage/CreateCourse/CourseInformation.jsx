import React, { useEffect, useRef, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaChevronDown } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
import Button from '@/components/UI/Button';
import { toast } from 'react-toastify';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import Loader from '@/components/UI/Loader';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import useAuthProvider from '@/hooks/useAuthProvider';

const CourseInformation = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuthProvider();

  const navigate = useNavigate();
  const [charNumber, setCharNumber] = useState(0);
  const [totalNum] = useState(1000);

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

  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        const res = await axiosPrivate.get(
          `${import.meta.env.VITE_GET_COURSE_BY_ID}/${courseId}`
        );
        const data = res.data.data;
        console.log(data);
        setCourse(data);
        setTitle(data.title || '');
        setCategory(data.category || '');
        setDescription(data.description || '');
        setCourseImage(data.image || '');
        setPreviewImage(data.image || '');
      } catch (err) {
        toast.error('Failed to load course');
      } finally {
        setIsLoading(false);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  const [imageToUpload, setImageToUpload] = useState(null);

  const handleImageChange = (e) => {
    let selectedFiles = [...e.target.files];

    const previewURL = URL.createObjectURL(selectedFiles[0]);

    setPreviewImage(previewURL);
    setImageToUpload(selectedFiles[0]);
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (!imageToUpload) {
      toast.error('Please select an image to upload');
      return;
    }

    const payload = {
      fileName: imageToUpload.name,
      fileType: imageToUpload.type,
      fileSize: imageToUpload.size,
    };

    try {
      // 1) Get signed upload URL
      setIsLoading(true);
      const response = await axiosPrivate.post(
        `courses/educator/${courseId}/uploads`,
        payload
      );

      console.log(response.data.data);
      const { uploadUrl, fileUrl: finalImageUrl } = response.data.data;

      // 2) PUT file to S3
      try {
        await axios.put(uploadUrl, imageToUpload, {
          headers: {
            'Content-Type': imageToUpload.type,
          },
        });

        // 3) Save final image URL to state
        setCourseImage(finalImageUrl);
        toast.success('Image uploaded successfully!');
      } catch (uploadErr) {
        console.log(uploadErr);
        toast.error('Upload failed during file transfer');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to get upload URL');
    } finally {
      setIsLoading(false);
    }
  };

  const SaveAndContinue = async (e) => {
    e.preventDefault();
    /*  if (!title || !category || !description) {
      toast.error('Please fill in all fields');
      return;
    } */

    // Save course data to context
    const updatedCourse = {
      ...course,
      title,
      category,
      description,
      image: courseImage,
    };

    try {
      setIsLoading(true);
      const res = await axiosPrivate.put(
        `${import.meta.env.VITE_UPDATE_COURSE + '/' + courseId}`,
        updatedCourse
      );
      toast.success(res.data?.message);
      navigate(`/educator/upload-course-content/${courseId}`);
    } catch (err) {
      toast.error('Failed to update course');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav />
      {isLoading ? (
        <Loader isLoading={isLoading} info={'Loading course information...'} />
      ) : (
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
            <div className="mt-4">
              {previewImage && (
                <div className="flex flex-col items-start gap-2">
                  <div className="relative h-50 w-50 overflow-hidden rounded-lg border">
                    <img
                      src={previewImage}
                      alt={`Preview `}
                      className="w-full object-cover object-center"
                    />
                    <FaTimes
                      className="absolute top-2 right-2 text-2xl text-red-500"
                      onClick={() => setPreviewImage(null)}
                    />
                  </div>

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
      )}
    </div>
  );
};

export default CourseInformation;
