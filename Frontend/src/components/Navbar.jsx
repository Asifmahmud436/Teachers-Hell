import { Slide, AttentionSeeker, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import '../index.css'

export default function Navbar() {
  return (
    <nav className="flex justify-around bg-gradient-to-l from-black to-zinc-900 items-center h-[60px] ">
      <Slide direction="down">
        <div className="text-[#FF416C] flex items-center ">
          <img src="./logo2.png" alt="" className="h-[30px] w-[34px] ms-3" />
          <NavLink className="font-semibold" to="/">
            BracademicReview
          </NavLink>
        </div>
        <div>
          <ul className="flex w-[523px] justify-around text-white text-sm  items-center">
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#FF416C" : null,
                padding: "5px 10px",
                borderRadius: "3px",
                fontWeight:isActive ? "600": null,
              })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#FF416C" : null,
                padding: "5px 10px",
                borderRadius: "3px",
                fontWeight:isActive ? "600": null,
              })}
              to="/university"
            >
              University
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#FF416C" : null,
                padding: "5px 10px",
                borderRadius: "3px",
                fontWeight:isActive ? "600": null,
              })}
              to="/teachers"
            >
              Teachers
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#FF416C" : null,
                padding: "5px 10px",
                borderRadius: "3px",
                fontWeight:isActive ? "600": null,
              })}
              to="/write review"
            >
              Write Review
            </NavLink>
          </ul>
        </div>
      </Slide>
    </nav>
  );
}
