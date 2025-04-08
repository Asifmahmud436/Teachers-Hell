import { useEffect, useState } from "react";

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
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-9">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="border-2 border-s-8 rounded-sm p-4 max-w-[300px]">
            <h1 className="text-2xl text-blue-800 font-bold mb-6">
              {teacher.name}
            </h1>
            <p className="mb-2">
              Designation:{" "}
              <span className="font-bold">{teacher.designation}</span>
            </p>
            <h3 className="text-violet-800 font-semibold">{teacher.department}</h3>
            <button className="rounded-sm bg-red-500 px-4 py-2 mt-3 text-white font-semibold">Burn</button>
          </div>
        ))}
      </div>
    </div>
  );
}
