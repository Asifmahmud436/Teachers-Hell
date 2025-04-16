// import Navbar from "../components/Navbar";
import RecentReviews from "../components/RecentReviews";
import Teachers from "../components/Teachers";
import { FaSearch } from "react-icons/fa";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import Data from "../components/Data";
import Universities from "../components/Universities";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-[400px] flex flex-col items-center justify-center space-y-4 bg-gradient-to-b from-black to-zinc-900">
        <Slide direction="down" duration={1000}>
          <h1 className="text-4xl py-3 text-white font-semibold">
            Rate Your Bracademic Experience
          </h1>
        </Slide>
        <Slide direction="down" duration={1000}>
          <p className="text-sm text-[#D1D5DB]">
            Help future students make informed decisions
          </p>
        </Slide>
        <NavLink to='/teachers'>
          <div className="relative w-[600px]">
            <input
              type="text"
              name="search"
              id="searchBox"
              placeholder="Search for university or professor..."
              className="w-full rounded-sm py-3 px-4 pr-12 text-white placeholder-gray-400 bg-[#2D2D2D] focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              aria-label="Search"
            >
              <FaSearch className="text-[#FF5533]" size={20} />
            </button>
          </div>
        </NavLink>
      </div>
      <RecentReviews />
      <Data />
      <Universities />
    </>
  );
}
