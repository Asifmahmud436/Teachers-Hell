import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { swiffyslider } from "swiffy-slider";
import "swiffy-slider/css";
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});

export default function FacultyDetails() {
  const data = useLoaderData();
  const id = data.results[0].id;
  const [text, setText] = useState("");
  const [stars, setStars] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/faculty/reviews/list/?faculty_id=${id}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setTimeout(() => {
          window.swiffyslider.init();
        }, 100);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/faculty/reviews/average-rating/?faculty_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAvgRating(data.average_rating);
        console.log(data.average_rating);
      });
  }, [id]);

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
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      console.log("Response: ", data);
      alert("Your Review is submitted!");
    } catch (err) {
      console.error("Error: ", err);
      alert("Something went wrong!");
    }
    setStars(1);
    setText("");
  };

  return (
    <div className="bg-gradient-to-l from-black to-zinc-900 py-9 text-white">
      <div className="flex lg:flex-row justify-evenly md:flex-col md:items-center md:space-y-6 md:text-center">
        <img
          src={data.results[0].profile_picture_url}
          alt=""
          className="w-[300px] h-[350px]"
        />
        <div className="flex flex-col  justify-center text-start">
          <h2 className="text-2xl mb-3">{data.results[0].name}</h2>
          <h2>Designation: {data.results[0].designation}</h2>
          <h2>Department: {data.results[0].department}</h2>
          {avgRating ? (
            <h2>Average Rating: {avgRating}</h2>
          ) : (
            <h2>Average Rating: Don't have enough rating information</h2>
          )}
        </div>
      </div>

      {/* review form */}
      <h1 className="text-3xl text-center my-12">Drop a Review</h1>
      <form
        className="text-center flex flex-col justify-center items-center space-y-4 mb-12"
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

      {/* all rating */}
      <h1 className="text-center text-3xl">Recent Reviews</h1>
      {reviews.length != 0 ? (
        <div className="swiffy-slider slider-item-show3 slider-nav-round slider-nav-page my-12 slider-nav-autoplay slider-nav-animation-fast max-w-6xl m-auto items-center">
          <ul className="slider-container">
            {reviews.map((item, idx) => (
              <li key={idx}>
                <div className="card border-0">
                  <div className="card-body p-8 w-[300px] h-[200px]  rounded-sm bg-[#2A2A2A] py-9">
                    <div className="d-flex">
                      <p className="card-text text-2xl mb-4">
                        {item.review_text}
                      </p>
                      <h3 className="flex-grow-1 h5">
                        Rating: ⭐ {item.rating}
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="slider-nav"
            aria-label="Go left"
          ></button>
          <button
            type="button"
            className="slider-nav slider-nav-next"
            aria-label="Go left"
          ></button>
        </div>
      ) : (
        <h1 className="text-2xl text-center my-8">Dont have any reviews!</h1>
      )}
    </div>
  );
}
