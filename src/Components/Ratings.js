import React from 'react'
import StarRatings from 'react-star-ratings'
import {useState, useEffect} from 'react'

function Ratings(props) {

    // useEffect(()=> {
    //             console.log(props.ratings)
    //         }, [props.ratings])


            // comments: "This is an example comment"
            // id: 1
            // park_id: 5
            // rating: 3
            // user_id: null


            console.log(props.ratings)
    return (
        <div>
            {props.ratings.map(rate => (
                <div>
                    <h3>Rating: {rate.rating}</h3>
                    <h4>Comments: {rate.comments}</h4>
                </div>
    ))}
        </div>
    )
}

export default Ratings
