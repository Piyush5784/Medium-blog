import { atom, selector } from "recoil";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const allBlogs = atom({
  key: "all_blogs_atom",
  default: selector({
    key: "all_blog_selector",
    get: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      });
      return res.data;
    },
  }),
});
