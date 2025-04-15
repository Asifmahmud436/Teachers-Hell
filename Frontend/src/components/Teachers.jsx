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
        window.scrollTo({ top: 850, behavior: "smooth" });
      });
  }
  function handlePrevious() {
    fetch(previousPage)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.results);
        setPreviousPage(data.previous);
        setNextPage(data.next);
        window.scrollTo({ top: 850, behavior: "smooth" });
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
    <div className="max-w-7xl m-auto">
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
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-6 mt-9 place-items-center ">
          {teachers.map((teacher) => (
            <Slide direction="up">
              <div
                key={teacher.id}
                className="border-2 border-green-500 border-s-green-500 border-s-8 rounded-sm p-4 max-w-[300px] flex flex-col h-[290px] hover:shadow-lg hover:shadow-blue-400
              hover:border-s-blue-700
              hover:border-blue-700
              hover:scale-105 transition-all duration-600"
              >
                <h1 className="text-2xl text-blue-800 font-bold mb-6">
                  {teacher.name}
                </h1>
                <p className="mb-2 ">
                  Designation:{" "}
                  <span className="font-bold">{teacher.designation}</span>
                </p>
                <h3 className="text-violet-800 font-semibold flex-grow">
                  {teacher.department}
                </h3>
                <div className="flex">
                  <button className="rounded-sm bg-green-700 px-4 py-2  text-white font-semibold hover:bg-green-500 transition-all duration-500 me-4">
                    <NavLink to={`/${teacher.name}`}>
                      Bless
                    </NavLink>
                  </button>
                  <button className="rounded-sm bg-green-700 px-4 py-2  text-white font-semibold hover:bg-red-500 transition-all duration-500">
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
            className="me-12 px-5 py-2 bg-gray-300 rounded-sm hover:shadow-md hover:scale-105 transition-all hover:font-bold duration-300"
            onClick={handlePrevious}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="me-12 px-5 py-2 bg-gray-300 rounded-sm hover:shadow-md hover:scale-105 transition-all hover:font-bold duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
