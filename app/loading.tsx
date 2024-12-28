import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-600">
      <div className="animate-spin">
        <Loader size={150} />
        <p>Loading....</p>
      </div>
    </div>
  );
};

export default Loading;
