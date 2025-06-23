import Button from '@/components/UI/Button';
import Loader from '@/components/UI/Loader';
import SingleCourse from '@/components/UI/SingleCourse';
import useAppContext from '@/hooks/useAppContext';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MyCourses = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const axiosPrivate = useAxiosPrivate();

  const [allCourses, setAllCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const fetchAllCourses = async () => {
    try {
      setIsloading(true);
      const response = await axiosPrivate.get(
        import.meta.env.VITE_GET_ALL_COURSES
      );
      console.log('Total courses:', response.data.totalCourses);
      console.log('All courses fetched:', response.data);
      setTotalCourses(response.data.totalCourses);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      const errorMessage =
        error.response.message ||
        error.response.data.message ||
        'Something went Wrong';

      if (errorMessage === 'Network Error') {
        toast.error('Please check your connection');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setIsloading(false);
    }
  };

  // const {data, isLoading} = useQuery(["allCourses"], fetchAllCourses)

  const createCourse = async () => {
    try {
      toast.message('creating');
      const response = await axiosPrivate.post(
        import.meta.env.VITE_CREATE_COURSE
      );
      console.log(response.data.data);
      const newCourse = response.data.data;

      // Dispatch the new course data to the context
      dispatch({
        type: 'CREATE_COURSE',
        payload: newCourse,
      });
      toast.success(
        'Course created successfully! You can now add content to it.'
      );
      toast.message('Click on the First Card to add content to your course');
      // navigate('/educator/upload-course');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateCourse = () => {
    // if (existingCourseData) {
    //   toast.error('You already have a course created');
    //   return;
    // }
    createCourse();
  };
  return (
    <div className="h-full w-full">
      <h1 className="mb-1.5 text-center text-2xl font-bold">My courses</h1>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader isLoading={isLoading} info={'Fetching your courses...'} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="scroll-container overflow-y-auto px-4 py-2">
            {allCourses && allCourses.length ? (
              <>
                <p className="text-heading text-sm">
                  You have {totalCourses} course
                  {totalCourses > 1 ? 's' : ''}
                </p>

                <div className="flex flex-wrap items-center gap-8">
                  {allCourses.map((course) => (
                    <SingleCourse course={course} />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-heading text-sm">You have no courses yet</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-6">
              {/*  <small className="font-inter text-paragraph">
                You currently don’t have any course
              </small> */}

              <Button
                label={'create course'}
                active={true}
                fun={() => handleCreateCourse()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
