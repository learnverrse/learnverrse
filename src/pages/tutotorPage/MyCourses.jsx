import { myCourses } from '@/components/details';

const MyCourses = () => {
  return (
    <div class="w-full px-10">
      <h1 class="mb-1.5 text-center text-2xl font-bold">My courses</h1>
      <div class="h-screen">
        <div class="scroll-container grid h-full grid-cols-2 gap-5 overflow-y-auto pb-40">
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
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
