import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <>
      <Link to={`/blog/${id}`}>
        {" "}
        <div className=" lg:ml-[250px] md:ml-[100px]">
          <div className="md:ml-10 mt-3 p-4 flex justify-center items-center flex-col max-w-screen-md cursor-pointer">
            <div className=" border-b-2">
              <div className="flex pb-2 ">
                <div className="flex justify-center items-center">
                  <Avatar size={"6"} name={authorName} />
                  <div className="font-extralight pl-2">{authorName} </div>
                  <div className="flex justify-center items-center pl-2 text-slate-400">
                    &#128900;
                  </div>
                  <div className="pl-2 text-gray-400 text-sm">
                    {publishedDate + "✨"}
                  </div>
                </div>
              </div>
              <div className="text-xl font-semibold ">{title}</div>
              <div className="text-xl font-light">
                {content.slice(0, 100) + "...."}
              </div>
              <div className="text-slate-500 text-sm font-thin m-3">
                {Math.ceil(content.length / 100) + " min to read"}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
