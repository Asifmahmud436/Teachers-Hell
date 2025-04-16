"use client"

import { useEffect, useState } from "react"
import { Slide, Fade } from "react-awesome-reveal"
import { NavLink } from "react-router-dom"

export default function Teachers() {
  const [teachers, setTeachers] = useState([])
  const [nextPage, setNextPage] = useState("")
  const [previousPage, setPreviousPage] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results)
        setNextPage(data.next)
      })
      .catch((error) => {
        console.log(error, "This error occurred")
      })
  }, [])

  function handleNext() {
    fetch(nextPage)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results)
        setNextPage(data.next)
        setPreviousPage(data.previous)
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }
  function handlePrevious() {
    fetch(previousPage)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results)
        setPreviousPage(data.previous)
        setNextPage(data.next)
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }

  function handleSearch(event) {
    const { value } = event.currentTarget
    fetch(`http://127.0.0.1:8000/api/faculty/?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results)
      })
  }

  return (
    <div className="w-full bg-gradient-to-l from-black to-zinc-900 text-white py-6 md:py-9">
      <Fade>
        <h1 className="text-center py-4 text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 md:mt-12 mb-8 md:mb-16">
          Our Teachers
        </h1>
      </Fade>

      {/* search field */}
      <div>
        <div className="flex justify-center px-4 sm:px-6">
          <input
            type="text"
            name=""
            id="searchBox"
            placeholder="Md. Sai..."
            className="border-1 rounded-sm py-2 md:py-3 ps-4 w-full max-w-[600px] me-3"
            onChange={handleSearch}
          />
        </div>
      </div>

      {teachers ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-9 place-items-center px-4 sm:px-6">
          {teachers.map((teacher) => (
            <Slide direction="up" key={teacher.id}>
              <div className="p-4 bg-[#2A2A2A] w-[302px] min-h-[280px] flex flex-col justify-between rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl">


                <h1 className="text-white font-bold mb-4 md:mb-6 text-lg md:text-xl">{teacher.name}</h1>
                <p className="mb-2 text-[#D1D5DB] text-xs md:text-sm">
                  Designation: <span className="font-bold">{teacher.designation}</span>
                </p>
                <h3 className="text-[#D1D5DB] font-semibold flex-grow pb-2 text-xs md:text-sm">{teacher.department}</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="text-rose-400 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                    <NavLink to={`/${teacher.name}`}>Bless</NavLink>
                  </button>
                  <button className="text-rose-400 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                    <NavLink to={`/${teacher.name}`}>Burn</NavLink>
                  </button>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">Loading All teachers</div>
      )}
      {/* pagination */}
      <div className="text-center my-8 md:my-12">
        {previousPage && (
          <button
            className="text-rose-400 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 me-4 hover:scale-115 duration-300 transition-all"
            onClick={handlePrevious}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="text-rose-400 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 me-4 hover:scale-115 duration-300 transition-all"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
