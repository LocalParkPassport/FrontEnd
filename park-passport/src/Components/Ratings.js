import React from 'react'
import StarRatings from 'react-star-ratings'

export default function Ratings({ratings}){
    let avg= 0
    ratings.map(res=>{
        (avg+ res.rating)/ratings.length
    })
    return(
        <div>
            <h2>Ratings</h2>
        </div>
    )
}