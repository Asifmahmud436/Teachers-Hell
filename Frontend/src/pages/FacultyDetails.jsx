// http://127.0.0.1:8000/api/faculty/reviews/list/?faculty_id=1

// /api/faculty/reviews/average-rating/?faculty_id=1


import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function FacultyDetails() {
  const data = useLoaderData();
  const id = data.results[0].id;
  const [text, setText] = useState("");
  const [stars, setStars] = useState(1);

  const handleReview = async (event) => {
    event.preventDefault();

    const formData = {
      faculty: id,
      rating: stars,
      review_text: text,
    };

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/faculty/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if(!res.ok){
        const text = await res.text()
        throw new Error(`HTTP ${res.status}: ${text}`)
      }
      const data = await res.json();
      console.log("Response: ", data);
      alert("Your Review is submitted!");
    } catch (err) {
      console.error("Error: ", err);
      alert("Something went wrong!");
    }

    console.log(id, text, stars);
    setStars("");
    setText("");
  };

  return (
    <div className="max-w-7xl m-auto mt-24 ">
      <div className="flex lg:flex-row justify-evenly md:flex-col md:items-center md:space-y-6 md:text-center">
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

      {/* review form */}
      <h1 className="text-3xl text-center my-12">Drop a Review</h1>
      <form
        className="text-center flex flex-col justify-center items-center space-y-4"
        onSubmit={handleReview}
      >
        <select
          name="stars"
          id="stars"
          className="w-[450px] border-2 p-2 rounded-sm"
          onChange={(e) => setStars(e.target.value)}
          value={stars}
        >
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <textarea
          name="text-review"
          id="text-review"
          cols="30"
          className="border-2 rounded-sm w-[450px] p-4"
          placeholder="He/She is a very good/bad..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 font-semibold rounded-sm text-white w-[100px]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
