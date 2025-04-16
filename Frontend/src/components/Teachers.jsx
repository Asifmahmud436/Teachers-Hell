import { useEffect, useState } from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results);
        setNextPage(data.next);
      })
      .catch((error) => {
        console.log(error, "This error occurred");
      });
  }, []);

  function handleNext() {
    fetch(nextPage)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
  function handlePrevious() {
    fetch(previousPage)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results);
        setPreviousPage(data.previous);
        setNextPage(data.next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }

  function handleSearch(event) {
    const { value } = event.currentTarget;
    fetch(`http://127.0.0.1:8000/api/faculty/?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results);
      });
  }

  return (
    <div className="bg-gradient-to-l from-black to-zinc-900 text-white py-9">
      <Fade>
        <h1 className="text-center py-4 text-5xl font-semibold mt-12 mb-16 ">
          Our Teachers
        </h1>
      </Fade>

      {/* search field */}
      <div>
        <div className="flex justify-center">
          <input
            type="text"
            name=""
            id="searchBox"
            placeholder="Md. Sai..."
            className=" border-1 rounded-sm py-3 ps-4 w-[600px] me-3"
            onChange={handleSearch}
          />
        </div>
      </div>

      {teachers ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-y-6 mt-9 place-items-center ">
          {teachers.map((teacher) => (
            <Slide direction="up">
              <div
                key={teacher.id}
                className="p-4 bg-[#2A2A2A] w-[442px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl"
              >
                <h1 className="text-white font-bold mb-6">
                  {teacher.name}
                </h1>
                <p className="mb-2 text-[#D1D5DB] text-sm">
                  Designation:{" "}
                  <span className="font-bold">{teacher.designation}</span>
                </p>
                <h3 className="text-[#D1D5DB] font-semibold flex-grow pb-2 text-sm">
                  {teacher.department}
                </h3>
                <div className="flex">
                  <button className="text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors me-3">
                    <NavLink to={`/${teacher.name}`}>
                      Bless
                    </NavLink>
                  </button>
                  <button className="text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                    <NavLink to={`/${teacher.name}`}>
                      Burn
                    </NavLink>
                  </button>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      ) : (
        <div>Loading All teachers</div>
      )}
      {/* pagination */}
      <div className="text-center my-12">
        {previousPage && (
          <button
            className="text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30  me-4 hover:scale-115 duration-300 transition-all"
            onClick={handlePrevious}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 me-4 hover:scale-115 duration-300 transition-all"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
