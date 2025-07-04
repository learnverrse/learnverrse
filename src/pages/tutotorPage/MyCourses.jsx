import Button from '@/components/UI/Button';
import Loader from '@/components/UI/Loader';
import SingleCourse from '@/components/UI/SingleCourse';
import useAppContext from '@/hooks/useAppContext';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MyCourses = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const axiosPrivate = useAxiosPrivate();

  const [page, setPage] = useState(1);
  const limit = 5;

  // ✅ Fetch courses with pagination
  const fetchAllCourses = async ({ queryKey }) => {
    const [_key, currentPage] = queryKey;

    try {
      const response = await axiosPrivate.get(
        `courses/educator?page=${currentPage}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
     

      const errorMessage =
        error.response?.data?.message || 'Something went wrong';

      if (errorMessage === 'Network Error') {
        toast.error('Please check your connection');
      } else {
        toast.error(errorMessage);
      }
    }
  };

  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(['allCourses', page], fetchAllCourses);

  const createCourse = async () => {
    try {
      toast('Creating course...');
      const response = await axiosPrivate.post(
        import.meta.env.VITE_CREATE_COURSE
      );

      if(response.data){
        navigate(`/educator/upload-course/${response.data.data._id}`)
        toast.success(
          'Course created successfully! You can now add content to it.'
        );
        await refetch();

      }
     
    } catch (error) {
      
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-fit">
      <div className='flex justify-between p-4 md:p-12 gap-4 items-center'>
        <h1 className="mb-1.5 text-center text-xl md:text-2xl font-bold">My Courses</h1>
        <div>
              <Button
                label={'Create Course'}
                active={true}
                fun={createCourse}
              />
            </div>

      </div>
      

      {isLoading || isFetching ? (
        <div className="flex h-full items-center justify-center">
          <Loader isLoading={isLoading} info={'Fetching your courses...'} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="scroll-container overflow-y-auto px-4 py-2">
            {data?.data && data?.data.length ? (
              <>
                <p className="text-heading text-sm">
                  You have {data?.totalCourses} course
                  {data?.totalCourses > 1 ? 's' : ''}
                </p>

                <div className="flex flex-wrap items-center gap-8">
                  {data?.data.map((course) => (
                    <SingleCourse course={course} key={course._id} />
                  ))}
                </div>

                {/* ✅ Pagination Controls */}
                <div className="mt-6 flex items-center gap-4">
                  {data?.pagination?.hasPrevPage && (
                    <button
                      onClick={() => setPage((prev) => prev - 1)}
                      className="text-primary-500 p-2 cursor-pointer"
                    >
                      Previous
                    </button>
                  )}

                  <span className="text-gray-500">
                    Page {data?.pagination?.currentPage}
                  </span>

                  {data?.pagination?.hasNextPage && (
                    <button
                      onClick={() => setPage((prev) => prev + 1)}
                      className="text-primary-500 p-2 cursor-pointer"
                    >
                      Next
                    </button>
                  )}
                </div>
              </>
            ) : (
              <p className="text-heading text-sm">You have no courses yet</p>
            )}
          </div>

          
        </div>
      )}
    </div>
  );
};

export default MyCourses;
