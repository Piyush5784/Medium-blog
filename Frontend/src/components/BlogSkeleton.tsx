const BlogSkeleton = () => {
  return (
    <>
      <div role="status" className="w-[430px] animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full  w-[300px] mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full  w-[100px]  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  w-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[200px]  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[250px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export const AllBlogSkeleton = () => {
  return (
    <>
      <div role="status" className="w-[70%] animate-pulse">
        <div className="h-4 bg-gray-200 rounded-full  w-[300px] mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full  w-[100px]  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  w-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[200px]  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[250px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default BlogSkeleton;
