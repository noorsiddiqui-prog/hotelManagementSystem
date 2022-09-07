
import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'

export default function RatingsStars() {
    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }

  return (
    <div className="flex items-center mr-4 ">
      <div >
      
    <input checked="" id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        
        fillColor='orange'
        emptyColor='gray'
        className='foo' 
      />
      
      {rating}
    </div>
    </div>
  )
}
