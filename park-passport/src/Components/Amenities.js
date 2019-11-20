import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Amenities( {park} ) {
    
    return (
        <section className="Amenities">
            
            {/* Wildlife */}
            {park.wildlife === true ? <FontAwesomeIcon icon={['fas', 'hippo']} /> : <div> No Wildlife</div> }

            {/* Dog Park */}
            {park.dog-park === true ? <FontAwesomeIcon icon={['fas', 'dog']} /> : <div> No Wildlife</div> }

            {/* Hiking */}
            {park.hiking_trails === true ? <FontAwesomeIcon icon={['fas', 'hiking']} /> : <div> No Wildlife</div> }

            {/* Golf */}
            {park.disc_golf === true ? <FontAwesomeIcon icon={['fas', 'golf-ball']} /> : <div> No Wildlife</div> }

            {/* Open Spaces */}
            {park.disc_golf === true ? <FontAwesomeIcon icon={['fas', 'golf-ball']} /> : <div> No Wildlife</div> }

            {/* Climbing Trees */}
            {park.disc_golf === true ? <FontAwesomeIcon icon={['fas', 'tree']} /> : <div> No Wildlife</div> }
        </section>
    );
  }

//   "wildlife": true,
//   "dog_park": true,
//   "hiking_trails": true,
//   "disc_golf": true,
//   "open_spaces": true,
//   "climbing trees": false,