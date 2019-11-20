import React from 'react'
import StarRatings from 'react-star-ratings'

export default function Ratings({rating}){
    avg
    return(
        <div>
            <StarRatings
                rating={rating.rating}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
            />
        </div>
    )
}