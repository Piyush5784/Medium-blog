import { useRecoilValueLoadable } from "recoil";
import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { allBlogs } from "../Atoms/BlogAtom";
import { AllBlogSkeleton } from "../components/BlogSkeleton";

export type Blog = {
  author: {
    name: string;
  };
  content: string;
  id: number;
  title: string;
};

const Blogs = () => {
  const all_Blogs = useRecoilValueLoadable(allBlogs);

  if (all_Blogs.state == "loading") {
    return (
      <div>
        <Appbar />{" "}
        <div className="flex justify-center items-center m-5 flex-col lg:ml-[100px] gap-5">
          <AllBlogSkeleton />
          <AllBlogSkeleton />
          <AllBlogSkeleton />
          <AllBlogSkeleton />
        </div>
      </div>
    );
  } else if (all_Blogs.state == "hasValue") {
    return (
      <>
        <Appbar />

        {all_Blogs.contents.map((blog: Blog, index: number) => (
          <div key={index}>
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd feb 2024"
            />
          </div>
        ))}
      </>
    );
  } else if (all_Blogs.state == "hasError") {
    return <div>...Error fetching data from backend</div>;
  }
};

export default Blogs;
