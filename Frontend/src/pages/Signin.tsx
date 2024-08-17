import { Link, useNavigate } from "react-router-dom";
import LabeledInput from "../components/LabeledInput";
import Quote from "../components/Quote";
import { SigninInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-hot-toast";

import Loading from "../components/Loading";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useRecoilState } from "recoil";
import { post_inputs } from "../Atoms/BlogAtom";

const Signin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useRecoilState<SigninInput>(post_inputs);

  async function sendRequest(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (postInputs.username == "" || postInputs.password == "") {
      return toast.error("Please fill all inputs");
    }

    try {
      const response = await toast.promise(
        axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
          username: postInputs.username,
          password: postInputs.password,
        }),
        {
          loading: "Signing in...",
          success: <b>Successfully signed in!</b>,
          error: <b>Failed to sign in. Please check your credentials.</b>,
        }
      );
      const jwt = await response.data.jwt;
      localStorage.setItem("authorization", "Bearer " + jwt);
      navigate("/blogs");
    } catch (error) {
      toast.error("Invalid inputs");
    }
  }

  async function handleGuestLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
          username: "Guest@gmail.com",
          password: "123456789",
        }),
        {
          loading: "Signing in...",
          success: <b>Successfully signed in!</b>,
          error: <b>Failed to sign in. Please check your credentials.</b>,
        }
      );
      const jwt = await response.data.jwt;
      localStorage.setItem("authorization", "Bearer " + jwt);
      toast("Sign in success");
      navigate("/blogs");
    } catch (error) {
      toast.error("Invalid inputs");
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <Link to={"/"}>
            <button className="bg-black hover:bg-white border border-black hover:text-black text-white  rounded-md px-5 py-2.5 ml-[24%] mt-5">
              <div className="flex justify-center items-center gap-2">
                <IoMdArrowRoundBack /> Home
              </div>
            </button>{" "}
          </Link>
          <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <div className="text-center w-full">
                <div className="text-3xl font-bold">Login to your account</div>
                <div className="text-slate-400">
                  Don't have an account
                  <Link to={"/signup"} className="underline pl-2">
                    {"Sign up"}
                  </Link>
                </div>
              </div>

              <div className="w-[50%] mt-2">
                <LabeledInput
                  label="Email"
                  placeholder="Piyush"
                  onChange={(e) =>
                    setPostInputs((c: any) => ({
                      ...c,
                      username: e.target.value,
                    }))
                  }
                />
                <LabeledInput
                  label="Password"
                  type="password"
                  placeholder="Piyush"
                  onChange={(e) =>
                    setPostInputs((c: any) => ({
                      ...c,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  className="text-white bg-gray-800 w-full mt-6 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={sendRequest}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 w-full mt-2 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={handleGuestLogin}
                >
                  Sign in as Guest
                </button>
              </div>
            </div>
          </div>
          ;
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Signin;
