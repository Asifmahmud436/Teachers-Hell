"use client"

import { Slide, Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa6"
import { CiStar } from "react-icons/ci"

export default function RecentReviews() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(`https://bracademic.vercel.app/api/faculty/reviews/list/`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.slice(0, 6))
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error)
      })
  }, [])

  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 h-full text-white py-4 pb-6 sm:pb-9">
      <Slide duration={1000}>
        <h1 className="text-xl sm:text-2xl font-semibold text-center lg:text-start px-4 sm:px-6 lg:px-8 xl:px-14 mb-4 sm:mb-6">
          Recent Reviews
        </h1>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 xl:px-14">
        <Fade>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                className="p-4 bg-[#2A2A2A] w-full h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl"
                key={review.faculty_name}
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h1 className="font-semibold text-base sm:text-lg">{review.faculty_name}</h1>
                    <p className="text-xs sm:text-sm text-[#9CA3AF]">Brac University</p>
                  </div>
                  <div>
                    <p className="text-orange-600">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className="inline-block">
                          {index < review.rating ? (
                            <FaStar className="inline text-sm sm:text-base" />
                          ) : (
                            <CiStar className="inline text-sm sm:text-base" />
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm sm:text-md font-light text-[#D1D5DB] py-4 sm:py-6">"{review.review_text}"</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-rose-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                      Computer Science
                    </button>
                    <button className="text-rose-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-black/70 bg-black/90 border border-rose-500/30 transition-colors">
                      AI
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-8">Loading reviews...</div>
          )}
        </Fade>
      </div>
    </div>
  )
}
