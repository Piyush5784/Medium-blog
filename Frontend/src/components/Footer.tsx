import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-black rounded-lg shadow m-4 ml-9 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2024 <a className="hover:underline">Medium</a>. All Rights
            Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  text-white sm:mt-0 gap-8">
            <li>
              <a href="https://twitter.com/Piyush5784" target="blank">
                <FaXTwitter fontSize={26} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/piyush-jha-a29619239/"
                target="blank"
              >
                <FaLinkedin fontSize={26} />
              </a>
            </li>
            {/* <li> */}
            {/* <a href="">
                <FaDiscord fontSize={26} />
              </a> */}
            {/* </li> */}
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushjha5668@gmail.com"
                target="blank"
              >
                <BiLogoGmail fontSize={26} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
