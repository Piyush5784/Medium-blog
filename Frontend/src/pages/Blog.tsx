import { useParams } from "react-router-dom";

import useBlog from "../Hooks/UseBlog";
import FullBlog from "../components/FullBlog";
import BlogSkeleton from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, blog } = useBlog({ id: id || "" });

  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-around items-center ">
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
