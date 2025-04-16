import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

export default function RecentReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/faculty/reviews/list/`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 h-full text-white py-4 pb-9">
      <Slide duration={1000}>
        <h1 className="text-2xl font-semibold lg:ms-24 mb-6 sm:text-center lg:text-start">Recent Reviews</h1>
      </Slide>
      <div className="grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 place-items-center gap-6 px-14">
        <Fade>
          {reviews.map((review) => (
            <div
              className="p-4 bg-[#2A2A2A] w-[442px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl"
              key={review.faculty_name}
            >
              <div className="flex justify-between ">
                <div>
                  <h1 className="font-semibold">{review.faculty_name}</h1>
                  <p className="text-sm text-[#9CA3AF] ">Brac University</p>
                </div>
                <div>
                  <p className="text-orange-600">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        {index < review.rating ? <FaStar className="inline"/> : <CiStar className="inline" />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-md font-light text-[#D1D5DB] py-6">
                  "{review.review_text}"
                </p>
                <div className="flex space-x-2">
                  <button className=" text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                    Computer Science
                  </button>
                  <button className=" text-rose-400 text-sm px-4 py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                    AI
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
