import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  split(arg0: string): unknown;
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/getBlog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    blog,
  };
};

export default useBlog;
