import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ameneties.css'

export default function Amenities( {park} ) {
    
    return (
        <section className="Amenities">
            
            {/* Restrooms */}
            {park.restrooms === true ? <div className="Restroom"> <FontAwesomeIcon icon={['fas', 'restroom']}/> </div>  : null }

            {/* Dog Park */}
            {park.dogPark === true ? <div className="DogPark"><FontAwesomeIcon icon={['fas', 'dog']} /> </div>: null }
            
            {/* Basket Ball */}
            {park.basketball === true ? <div className="DogPark"> <FontAwesomeIcon icon={['fas', 'basketball-ball']} /> </div>: null }

            {/* Golf */}
            {park.golf === true ? <div className="DogPark"> <FontAwesomeIcon icon={['fas', 'golf-ball']} /> </div>: null }

            {/* Fishing */}
            {park.fishing === true ? <div className="DogPark"> <FontAwesomeIcon icon={['fas', 'fish']} /> </div>: null }

            {/* Camping */}
            {park.camping === true ? <div className="DogPark"> <FontAwesomeIcon icon={['fas', 'campground']} /> </div>: null }
        </section>
    );
  }

// restrooms
// dogPark
// basketball
// golf
// fishing
// camping

