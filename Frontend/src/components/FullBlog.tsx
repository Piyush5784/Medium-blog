import { memo } from "react";
import { Blog } from "../pages/Blogs";
import { Appbar } from "./Appbar";
import Avatar from "./Avatar";

const FullBlog = ({ blog }: { blog: Blog }) => {
  const paragraphs: string[] = blog.content.split(".");
  return (
    <>
      <Appbar />
      <div className="pt-12">
        <div className="grid grid-cols-12 px-[12%] w-full max-w-screen-2xl">
          <div className=" col-span-8">
            <div className="md:text-5xl text-3xl w-full font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">Posted on 2nd dec 2023 </div>

            {paragraphs.map((content: string, index: number) => (
              <div key={index} className="pt-4 w-full">
                <br />
                {content}
              </div>
            ))}
          </div>
          <div className="col-span-4">
            <div className="text-slate-500 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar size={"12"} name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch pharse about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FullBlog);
