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
    let reversedArray = all_Blogs.contents.map(
      (_v: string, index: number, array: Array<String>) => {
        return array[array.length - 1 - index];
      }
    );
    return (
      <>
        <Appbar />

        {reversedArray.map((blog: Blog, index: number) => (
          <div key={index}>
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="17 May 2024"
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
