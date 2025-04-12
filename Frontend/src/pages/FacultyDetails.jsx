// endpoint add korsi new

// http://127.0.0.1:8000/api/faculty/reviews/list/?faculty_id=1

// /api/faculty/reviews/average-rating/?faculty_id=1

// id unojai kono teacher er average review ar review list gula dekhte parba

// /api/faculty/reviews
// eita post method eida dia review ar rating post korte parba kono faculty _id er against e
// 127.0.0.1

import { useLoaderData } from "react-router-dom";

export default function FacultyDetails() {
  const data = useLoaderData();
  console.log(data.results, name);

  return (
    <div className="max-w-7xl m-auto mt-24 flex justify-evenly">
      <img
        src={data.results[0].profile_picture_url}
        alt=""
        className="w-[300px] h-[350px]"
      />
      <div className="flex flex-col  justify-center">
        <h2 className="text-2xl mb-3">{data.results[0].name}</h2>
        <h2>Designation: {data.results[0].designation}</h2>
        <h2>Department: {data.results[0].department}</h2>
      </div>
    </div>
  );
}
