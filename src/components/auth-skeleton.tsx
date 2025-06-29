export const AuthSkeleton = () => {
  return (
    <div className="w-full h-full md:w-[487px] border-none shadow-none">
      <div className="flex flex-col items-center justify-center text-center p-7">
        <div className="text-2xl h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
      </div>
      <div className="px-7">
        <div className="h-px bg-gray-200 w-full" />
      </div>
      <div className="p-7 space-y-4">
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="px-7">
        <div className="h-px bg-gray-200 w-full" />
      </div>
      <div className="p-7 flex flex-col gap-y-4">
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};
