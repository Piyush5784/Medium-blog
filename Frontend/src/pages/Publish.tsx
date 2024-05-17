import { ChangeEvent, useCallback, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { allBlogs } from "../Atoms/BlogAtom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const refresh = useRecoilRefresher_UNSTABLE(allBlogs);

  const navigate = useNavigate();

  const publishPost = useCallback(async () => {
    if (title == "" || description == "") {
      return toast.warn("Please fill all inputs");
    }
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content: description,
      },
      {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      }
    );
    refresh();
    navigate(`/blog/${response.data.id}`);
  }, [title, description]);

  return (
    <>
      <Appbar />
      <div className="flex justify-center items-center">
        <div className="max-w-screen w-[60%]">
          <input
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            type="text"
            placeholder="Title"
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full m-2.5 p-4"
          />
          <TextEditor
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button
            onClick={publishPost}
            type="button"
            className="inline-flex ml-2.5 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </>
  );
};

function TextEditor({
  onChange,
  value,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}) {
  return (
    <>
      <div>
        <div className="w-full mb-4 border border-gray-300 rounded-xl ml-2.5">
          <div className="flex items-center justify-between  border-gray-600">
            {/* <div className="flex flex-wrap items-center sm:divide-x sm:rtl:divide-x-reverse  divide-gray-600"></div> */}
          </div>

          <div className="p-2 rounded-b-lg">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              value={value}
              onChange={onChange}
              id="editor"
              rows={8}
              className="block w-full px-0 text-sm focus:outline-none text-gray-800 bg-white  placeholder-gray-400"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish;
