import RecentReviews from "../components/RecentReviews"
import { FaSearch } from "react-icons/fa"
import { Slide } from "react-awesome-reveal"
import Data from "../components/Data"
import Universities from "../components/Universities"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center space-y-3 md:space-y-4 bg-gradient-to-b from-black to-zinc-900 px-4 py-12 md:py-16">
        <Slide direction="down" duration={1000}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 md:py-3 text-white font-semibold text-center">
            Rate Your Bracademic Experience
          </h1>
        </Slide>
        <Slide direction="down" duration={1000}>
          <p className="text-xs sm:text-sm text-[#D1D5DB] text-center">Help future students make informed decisions</p>
        </Slide>
        <NavLink to="/teachers" className="w-full max-w-[600px] px-4 sm:px-0">
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              id="searchBox"
              placeholder="Search for university or professor..."
              className="w-full rounded-sm py-2 md:py-3 px-4 pr-12 text-white placeholder-gray-400 bg-[#2D2D2D] focus:outline-none"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Search">
              <FaSearch className="text-[#FF5533]" size={16} sm:size={20} />
            </button>
          </div>
        </NavLink>
      </div>
      <RecentReviews />
      <Data />
      <Universities />
    </>
  )
}
