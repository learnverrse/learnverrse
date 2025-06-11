import { myCourses } from '@/components/details';
import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router';

const MyCourses = () => {
  const navigate = useNavigate();
  return (
    <div class="h-full w-full px-10">
      <h1 class="mb-1.5 text-center text-2xl font-bold">My courses</h1>
      <div class="h-screen">
        {/*     <div class="scroll-container grid h-full grid-cols-2 gap-5 overflow-y-auto pb-40">
          {myCourses.map(({ src, id, heading, text }) => (
            <div class="relative" key={id}>
              <img class="w-full" src={src} alt={text} />
              <p class="text-heading text-sm">{text}</p>
              <p class="jerseyFont">{heading}</p>
              <button
                class="text-heading absolute right-0 bottom-2 cursor-pointer bg-gray-300 p-1.5 font-medium"
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          ))}
        </div> */}

        <div className="flex h-[80%] items-center justify-center">
          <div className="flex flex-col gap-6">
            <small className="font-inter text-paragraph">
              You currently don’t have any course
            </small>

            <Button
              label={'create course'}
              active={true}
              fun={() => navigate('/educator/upload-course')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
