import { useEffect, useState } from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeachers(data);
      })
      .catch((error) => {
        console.log(error, "This error occurred");
      });
  }, []);
  return (
    <div className="max-w-7xl m-auto">
      <Fade>
        <h1 className="text-center py-4 text-5xl font-semibold">
          All Teachers
        </h1>
      </Fade>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-6 mt-9 place-items-center">
        {teachers.map((teacher) => (
          <Slide direction="up">
            <div
              key={teacher.id}
              className="border-2 border-s-violet-700 border-s-8 rounded-sm p-4 max-w-[300px] flex flex-col h-[225px] hover:shadow-lg hover:shadow-blue-900/50
              hover:border-s-red-700 hover:scale-105 transition-all duration-300"
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
              <Zoom className="flex flex-col">
                <button className="rounded-sm bg-violet-500 px-4 py-2  text-white font-semibold hover:bg-red-500 transition-all duration-500">
                  Burn
                </button>
              </Zoom>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}
