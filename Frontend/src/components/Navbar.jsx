"use client"

import { useState } from "react"
import { Slide, Fade } from "react-awesome-reveal"
import { NavLink } from "react-router-dom"
import "../index.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#FF416C" : null,
    padding: "5px 10px",
    borderRadius: "3px",
    fontWeight: isActive ? "600" : null,
  })

  return (
    <nav className="bg-gradient-to-l from-black to-zinc-900 text-white">
      <div className="flex justify-between items-center h-[60px] px-4">
        <Slide direction="down" duration={2000}>
          <div className="text-[#FF416C] flex items-center">
            <img src="./logo2.png" alt="Logo" className="h-[30px] w-[34px] ms-3" />
            <NavLink className="font-semibold" to="/">
              BracademicReview
            </NavLink>
          </div>
        </Slide>

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <Slide direction="down" duration={2000}>
            <ul className="flex space-x-6 text-white text-sm items-center">
              <li>
                <NavLink style={navLinkStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={navLinkStyle} to="/teachers">
                  Teachers
                </NavLink>
              </li>
            </ul>
          </Slide>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Fade duration={300}>
          <div className="sm:hidden bg-gradient-to-l from-black to-zinc-900 border-t border-zinc-800">
            <ul className="flex flex-col py-3 px-4">
              <li className="py-2">
                <NavLink style={navLinkStyle} to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink style={navLinkStyle} to="/teachers" onClick={() => setIsMenuOpen(false)}>
                  Teachers
                </NavLink>
              </li>
            </ul>
          </div>
        </Fade>
      )}
    </nav>
  )
}
