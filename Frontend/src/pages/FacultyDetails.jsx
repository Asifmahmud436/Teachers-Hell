"use client"

import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { swiffyslider } from "swiffy-slider"
import "swiffy-slider/css"

// Initialize swiffyslider globally
if (typeof window !== "undefined") {
  window.swiffyslider = swiffyslider
  window.addEventListener("load", () => {
    window.swiffyslider.init()
  })
}

export default function FacultyDetails() {
  const data = useLoaderData()
  const id = data.results[0].id
  const [text, setText] = useState("")
  const [stars, setStars] = useState(1)
  const [reviews, setReviews] = useState([])
  const [avgRating, setAvgRating] = useState([])
  const [sentiment, setSentiment] = useState('')

  useEffect(() => {
    fetch(`https://bracademic.vercel.app/api/faculty/reviews/list/?faculty_id=${id}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews)
        setSentiment(data.average_sentiment)
        console.log(data)
        setTimeout(() => {
          if (window.swiffyslider) {
            window.swiffyslider.init()
          }
        }, 100)
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error)
      })
  }, [id])

  useEffect(() => {
    fetch(`https://bracademic.vercel.app/api/faculty/reviews/average-rating/?faculty_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAvgRating(data.average_rating)
      })
      .catch((error) => {
        console.error("Error fetching average rating:", error)
      })
  }, [id])

  const handleReview = async (event) => {
    event.preventDefault()
    const formData = {
      faculty: id,
      rating: stars,
      review_text: text,
    }

    try {
      const res = await fetch(`https://bracademic.vercel.app/api/faculty/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`HTTP ${res.status}: ${text}`)
      }
      const data = await res.json()
      console.log("Response: ", data)
      alert("Your Review is submitted!")
    } catch (err) {
      console.error("Error: ", err)
      alert("Something went wrong!")
    }
    setStars(1)
    setText("")
  }

  
  return (
    <div className="bg-gradient-to-l from-black to-zinc-900 py-6 sm:py-9 text-white px-4 sm:px-6">
      <div className="flex flex-col sm:items-center lg:flex-row lg:justify-evenly gap-6 max-w-6xl mx-auto">
        <img
          src='./person.png'
          alt={data.results[0].name}
          className="w-full max-w-[300px] h-auto object-cover mx-auto lg:mx-0 rounded-full"
        />
        <div className="flex flex-col justify-center text-center sm:text-center lg:text-start md:text-start">
          <h2 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-semibold text-orange-500">{data.results[0].name}</h2>
          <h2 className="text-base sm:text-lg mb-1"><span className="text-orange-600 font-semibold">Designation:</span> {data.results[0].designation}</h2>
          <h2 className="text-base sm:text-lg mb-1"><span className="text-orange-600 font-semibold">Department:</span> {data.results[0].department}</h2>
          <h2 className="text-base sm:text-lg mb-1 text-white"><span className="text-orange-600 font-semibold">Peoples choice:</span> {sentiment}</h2>
          {avgRating ? (
            <h2 className="text-base sm:text-lg"><span className="text-orange-600 font-semibold">Average Rating:</span> {avgRating}</h2>
          ) : (
            <h2 className="text-base sm:text-lg">Average Rating: Don't have enough rating information</h2>
          )}
        </div>
      </div>

      {/* review form */}
      <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
        <h1 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-8">Drop a Review</h1>
        <form className="flex flex-col justify-center items-center space-y-4 mb-8 sm:mb-12" onSubmit={handleReview}>
          <select
            name="stars"
            id="stars"
            className="w-full max-w-[450px] border-2 p-2 rounded-sm bg-[#2A2A2A] text-white"
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
            rows="4"
            className="w-full max-w-[450px] border-2 rounded-sm p-3 sm:p-4 bg-[#2A2A2A] text-white"
            placeholder="He/She is a very good/bad..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 font-semibold rounded-sm text-white w-[100px] hover:bg-green-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* all rating */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-8">Recent Reviews</h1>
        {reviews.length !== 0 ? (
          <div className="swiffy-slider slider-item-show1 sm:slider-item-show2 lg:slider-item-show3 slider-nav-round slider-nav-page my-6 sm:my-12 slider-nav-autoplay slider-nav-animation-fast">
            <ul className="slider-container px-4">
              {reviews.map((item, idx) => (
                <li key={idx} className="px-2">
                  <div className="card border-0">
                    <div className="p-4 sm:p-6 rounded-sm bg-[#2A2A2A] h-full">
                      <div className="flex flex-col h-full">
                        <p className="text-base sm:text-lg mb-4 flex-grow">{item.review_text}</p>
                        <h3 className="text-sm sm:text-base text-orange-600 font-semibold">Rating: ⭐ {item.rating}</h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go right"></button>
          </div>
        ) : (
          <h1 className="text-xl sm:text-2xl text-center my-6 sm:my-8">Don't have any reviews!</h1>
        )}
      </div>
    </div>
  )
}
