import { GridLoader } from 'react-spinners';

const Loader = ({ isLoading, info }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <GridLoader
        color="#6d28d2"
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mx-auto mt-10"
      />
      <p className="text-center text-xl text-gray-500">{info}</p>
    </div>
  );
};

export default Loader;
