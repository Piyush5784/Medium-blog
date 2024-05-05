import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Appbar = () => {
  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("authorization");
    navigate("/signin");
  }
  return (
    <>
      <div className="border-b flex py-4 justify-between px-10">
        <div className="flex justify-center items-center cursor-pointer">
          <Link to="/blogs">Medium</Link>
        </div>
        <div className="flex">
          <div>
            <Link to={"/publish"}>
              <button
                type="button"
                className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                New
              </button>
            </Link>
          </div>
          <div>
            <button
              onClick={Logout}
              className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-lg px-5 py-[11px] "
            >
              <BiLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const HomeAppbar = () => {
  return (
    <>
      <div className="flex gap-4 p-2 md:p-5 justify-between items-center">
        <a href="" className="pl-5 font-bold">
          Medium
        </a>
        <div className="flex text-sm justify-center items-center gap-4">
          <a href="">About</a>
          <Link to={"/signin"} className="text-sm">
            Sign in
          </Link>
          <Link to={"/signup"} className="text-sm">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Appbar;
{
  /* <>
<div className="h-24 w-full border flex justify-between">
  <div className="logo font-bold cursor-pointer pl-7 flex justify-center items-center w-32">
    Medium
  </div>
  <div className="flex pl-2 gap-6 w-84 mr-10 justify-center items-center">
    <div className="">
      <a
        href="https://www.linkedin.com/in/piyush-jha-a29619239/"
        target="blank"
      >
        About
      </a>
    </div>
    <div>
      <div className="">
        <Link to={"/signin"}>Sign in</Link>
      </div>
    </div>
    <Link to={"/signup"}>
      <button className="bg-black text-sm hover:bg-white border border-black hover:text-black text-white rounded-3xl px-3 py-2.5">
        Get started
      </button>
    </Link>
  </div>
</div>
</> */
}
