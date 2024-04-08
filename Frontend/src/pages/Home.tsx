import { Link } from "react-router-dom";
import { HomeAppbar } from "../components/Appbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeAppbar />
      <div className=" border-black ">
        <div className="ml-8 flex flex-col gap-10 pb-20">
          <div className="text-[70px] font-extrabold">Stay curious.</div>
          <p className="text-3xl">
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
          </p>
          <div>
            <Link to={"/signup"}>
              <button className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-3xl px-5 py-2.5">
                Sign up for free
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pl-9 mt-10  border-t">
        <p className="font-bold text-[50px]">Explore, Engage, Evolve ,</p>
        <p className="text-[17px]">
          {" "}
          Your digital hub for enriching content, thoughtful insights. Embark on
          a journey of discovery as you delve into a world of knowledge,
          inspiration, and creativity. <br /> <br />
          Discover Our Categories <br />
          <br /> Navigate through our diverse array of categories tailored to
          cater to your interests and curiosity: <br /> <br />
          Depth of Content: Our articles are meticulously researched and
          thoughtfully crafted to offer in-depth analysis and actionable advice.
          Diverse Perspectives: Benefit from a multitude of viewpoints and
          experiences shared by our diverse roster of writers and contributors.
          Interactive Engagement: Engage in meaningful discussions, exchange
          ideas, and build connections within our vibrant community. Start Your
          Journey Today Embark on a transformative journey of exploration and
          growth with Medium. Whether you're seeking practical solutions,
          creative inspiration, or thought-provoking insights, our blog is your
          ultimate destination for personal and professional development.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Home;
